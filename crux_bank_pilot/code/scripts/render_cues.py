#!/usr/bin/env python3
"""
render_cues.py — stage-3 tier-1 renderer (the CUE INDEX).

Reads the canonical cues (output/tmp/cues_final.json, written by apply_cue_plan.py) and
joins each cue's cruxes back to the stage-1 cruxes (output/cruxes.json, indexed by cid =
array position) to recover, per exemplar, its problem_id + technique + how_used. Writes:

  output/cues.json — machine-readable: [{cue, count, domains, flagged, exemplars:
                     [{problem_id, technique, how_used}]}], recurring cues first.
  output/cues.md   — the human cue index: each cue (a recognition trigger), then the
                     problems where it fired and HOW the move was used there. Recurring
                     cues (>=2 problems) first; flagged-topical cues marked for review;
                     single-problem cues in a tail section.

count = number of DISTINCT problems under the cue (a problem with two cruxes under the
same cue is one problem but both how_used lines are kept). No reasoning here.
Run standalone:  python3 code/scripts/render_cues.py
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent  # code/scripts/ -> repo root
OUTPUT_DIR = ROOT / 'output'
CUES_FINAL_IN = OUTPUT_DIR / 'tmp' / 'cues_final.json'
CRUXES_IN = OUTPUT_DIR / 'cruxes.json'
CUES_JSON = OUTPUT_DIR / 'cues.json'
CUES_MD = OUTPUT_DIR / 'cues.md'


def build() -> list[dict]:
    cruxes = json.loads(CRUXES_IN.read_text())
    final = json.loads(CUES_FINAL_IN.read_text())

    out: list[dict] = []
    n_bad_cid = 0
    for entry in final:
        exemplars: list[dict] = []
        for cid in entry['cids']:
            if not (0 <= cid < len(cruxes)):
                n_bad_cid += 1
                print(f'  DROP[bad-cid] cue={entry["cue"][:50]!r} cid={cid}', file=sys.stderr)
                continue
            c = cruxes[cid]
            exemplars.append({
                'problem_id': c.get('problem_id', ''),
                'domain': c.get('domain', ''),
                # skim layer shows the terse one-move label (technique_short) when present;
                # the full technique + how_used stay on the crux for tier-2 drill-down.
                'technique': c.get('technique_short') or c.get('technique', ''),
                'how_used': c.get('how_used', ''),
            })
        if not exemplars:
            continue
        problems = list(dict.fromkeys(e['problem_id'] for e in exemplars))   # distinct, ordered
        domains = sorted({e['domain'] for e in exemplars if e['domain']})
        out.append({
            'cue': entry['cue'],
            'count': len(problems),
            'domains': domains,
            'flagged': entry.get('flagged', False),
            'flag_reason': entry.get('flag_reason', ''),
            'exemplars': exemplars,
        })
    out.sort(key=lambda e: (-e['count'], e['cue']))
    if n_bad_cid:
        print(f'⚠️  render dropped {n_bad_cid} exemplar(s) with out-of-range cid.', file=sys.stderr)
    return out


def render_md(cues: list[dict]) -> str:
    recurring = [c for c in cues if c['count'] >= 2]
    singletons = [c for c in cues if c['count'] < 2]
    n_prob = len({e['problem_id'] for c in cues for e in c['exemplars']})

    L = ['# Cue Bank — recognition triggers', '',
         f'{len(cues)} cues over {n_prob} problems. Each cue is a recognition trigger; under '
         'it, the problems where it fired and how the move was used there. '
         'Recurring cues (>=2 problems) first; single-problem cues at the end.', '']

    def block(c: dict) -> None:
        review = '  ⚠️ REVIEW (topical): ' + c['flag_reason'] if c['flagged'] else ''
        doms = ', '.join(c['domains'])
        L.append(f'## {c["cue"]}')
        L.append(f'_{c["count"]} problem(s) · {doms}_{review}')
        L.append('')
        # cue + technique only — the verbose how_used stays in cues.json / cruxes.json (tier 2)
        for e in c['exemplars']:
            L.append(f'- `{e["problem_id"]}` — {e["technique"]}')
        L.append('')

    L.append(f'## Recurring cues ({len(recurring)})')
    L.append('')
    for c in recurring:
        block(c)
    L.append(f'## Single-problem cues ({len(singletons)})')
    L.append('')
    for c in singletons:
        block(c)
    return '\n'.join(L)


def main() -> int:
    cues = build()
    OUTPUT_DIR.mkdir(exist_ok=True)
    CUES_JSON.write_text(json.dumps(cues, indent=2))
    CUES_MD.write_text(render_md(cues))
    recurring = sum(1 for c in cues if c['count'] >= 2)
    print(f'render: {len(cues)} cues ({recurring} recurring, {len(cues) - recurring} single-problem).', file=sys.stderr)
    return len(cues)


if __name__ == '__main__':
    n = main()
    print('CUES_RENDERED', n)
    sys.exit(0)
