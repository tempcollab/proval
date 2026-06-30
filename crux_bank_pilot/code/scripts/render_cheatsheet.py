#!/usr/bin/env python3
"""
render_cheatsheet.py — stage-2 merger + tier-1 renderer.

Reads the merged entry files (output/tmp/moves_final/*.json, written by apply_merge_plan.py),
reconciles each move against the stage-1 cruxes (output/cruxes.json), and writes:

  output/cheatsheet.json   — the distilled move set (machine-readable render source)
  bank/CHEATSHEET.md       — tier-1 skim layer: one line per entry (technique + ids),
                             grouped domain -> topic, recurring moves first.

Reconcile logic (moved out of the workflow JS so it is one readable place):
  * drop hallucinated exemplar ids (keep only ids present in cruxes.json)
  * majority-domain: a move's domain = the most common stage-1 domain of its
    exemplars (falls back to the move's own domain)
  * exemplar_count = number of distinct kept exemplars; drop moves with 0
  * dedup identical entry files (same technique + same exemplar set)

No agent runs this logic. Run standalone:  python3 code/render_cheatsheet.py
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent  # code/scripts/ -> repo root
OUTPUT_DIR = ROOT / 'output'
MOVES_FINAL_DIR = OUTPUT_DIR / 'tmp' / 'moves_final'
CRUXES_IN = OUTPUT_DIR / 'cruxes.json'
CHEATSHEET_JSON = OUTPUT_DIR / 'cheatsheet.json'
BANK = ROOT / 'bank'
CHEATSHEET_MD = BANK / 'CHEATSHEET.md'

DOMAIN_ORDER = ['number_theory', 'algebra', 'combinatorics']


def load_domain_by_id() -> tuple[dict[str, str], set[str]]:
    """problem_id -> stage-1 domain, and the set of valid ids (for id-filtering).
    Every stage-1 crux has both fields; a missing one is a corrupt cruxes.json — fail."""
    cruxes = json.loads(CRUXES_IN.read_text())
    domain_by_id = {c['problem_id']: c['domain'] for c in cruxes}
    return domain_by_id, set(domain_by_id)


def majority_domain(exemplar_ids: list[str], domain_by_id: dict[str, str]) -> str:
    """Most common stage-1 domain among the entry's exemplars. Callers pass only ids
    already filtered to id_set, so every id resolves — an empty count is a bug, not a
    fallback case."""
    counts: dict[str, int] = {}
    for pid in exemplar_ids:
        d = domain_by_id[pid]
        counts[d] = counts.get(d, 0) + 1
    if not counts:
        raise ValueError(f'majority_domain got no resolvable ids: {exemplar_ids}')
    return max(counts.items(), key=lambda kv: kv[1])[0]


def load_moves(domain_by_id: dict[str, str], id_set: set[str]) -> list[dict]:
    """Load merged entries, drop empties + exact dups. Logs every drop LOUDLY to
    stderr (project rule: a count collapse must never be silent)."""
    if not MOVES_FINAL_DIR.exists():
        raise SystemExit(f'no {MOVES_FINAL_DIR} — run apply_merge_plan.py first')

    moves: list[dict] = []
    seen: dict[tuple, str] = {}
    n_in = dropped_no_id = dropped_dup = 0
    for f in sorted(MOVES_FINAL_DIR.glob('*.json')):
        m = json.loads(f.read_text())
        n_in += 1
        real = [pid for pid in m['exemplar_ids'] if pid in id_set]
        real = list(dict.fromkeys(real))  # dedup, preserve order
        tech = m['technique'].strip()
        if not real:
            dropped_no_id += 1
            print(f'  DROP[no-valid-id] {f.name}: ids={m["exemplar_ids"]} tech={tech[:60]!r}', file=sys.stderr)
            continue
        key = (tech, tuple(sorted(real)))
        if key in seen:
            dropped_dup += 1
            print(f'  DROP[dup-of {seen[key]}] {f.name}: ids={real} tech={tech[:60]!r}', file=sys.stderr)
            continue
        seen[key] = f.name
        moves.append({
            'technique': tech,
            'domain': majority_domain(real, domain_by_id),
            'subtopics': m['subtopics'],   # entry surfaces under each of these
            'technique_tags': m['technique_tags'],
            'exemplar_ids': real,
            'exemplar_count': len(real),
        })
    kept = len(moves)
    if dropped_no_id or dropped_dup:
        print(f'⚠️  render dropped {dropped_no_id + dropped_dup}/{n_in} entries '
              f'({dropped_no_id} no-valid-id, {dropped_dup} exact-dup); kept {kept}.', file=sys.stderr)
    else:
        print(f'render: kept all {kept}/{n_in} entries.', file=sys.stderr)
    return moves


def render_md(moves: list[dict]) -> str:
    # A deduped entry spanning several subtopics is listed under EACH of them (max recall):
    # file it into by_dom[domain][subtopic] once per subtopic it carries.
    by_dom: dict[str, dict[str, list]] = {}
    for m in moves:
        for subtopic in m['subtopics']:
            by_dom.setdefault(m['domain'], {}).setdefault(subtopic, []).append(m)
    doms = ([d for d in DOMAIN_ORDER if d in by_dom]
            + [d for d in sorted(by_dom) if d not in DOMAIN_ORDER])

    L = ['# Crux Bank — CHEATSHEET', '',
         'Reusable olympiad techniques, grouped by domain and subtopic. Each `[id]` is an '
         'exemplar problem where the technique was used (see `cruxes.json`, '
         '`problems_with_solutions.json`).', '']
    for d in doms:
        L += ['## ' + d, '']
        for topic in sorted(by_dom[d]):
            ms = by_dom[d][topic]
            ms.sort(key=lambda m: (-m['exemplar_count'], m['technique']))
            L.append(f'### {topic}')
            L.append('')
            for m in ms:
                ids = ' '.join(m['exemplar_ids'])
                tag = '' if m['exemplar_count'] >= 2 else ' _(1 example)_'
                L.append(f'- {m["technique"]}{tag}  `[{ids}]`')
            L.append('')
    return '\n'.join(L)


def main() -> int:
    domain_by_id, id_set = load_domain_by_id()
    moves = load_moves(domain_by_id, id_set)

    OUTPUT_DIR.mkdir(exist_ok=True)
    CHEATSHEET_JSON.write_text(json.dumps(moves, indent=2))

    BANK.mkdir(exist_ok=True)
    CHEATSHEET_MD.write_text(render_md(moves))
    return len(moves)


if __name__ == '__main__':
    n = main()
    print('CHEATSHEET_MOVES', n)
    sys.exit(0)
