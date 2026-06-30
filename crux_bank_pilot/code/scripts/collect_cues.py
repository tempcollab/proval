#!/usr/bin/env python3
"""
collect_cues.py — stage-3 collector (MAP -> raw registry).

Reads the seed registry (output/cue_seeds.json) and every MAP batch's assignments
(output/tmp/cue_assign/*.json), then writes two deterministic artifacts:

  output/tmp/cue_registry_raw.json  — every DISTINCT cue with a stable id:
                                      seeds keep "S<i>" ids (matching the workflow's
                                      setup), new cues get "N<i>" ids (identical new-cue
                                      text is deduped to one id).
  output/tmp/crux_to_cue.json       — {cid -> cue-id}: which cue each crux was assigned to
                                      (cid = the crux's index in cruxes.json).

No reasoning here — the MAP agents already decided the assignments. This script only
gathers + de-duplicates the proposed cues so REDUCE sees one clean registry. It is
defensive about malformed agent output: a bad row or a corrupt batch file is dropped
with a LOUD stderr line, never aborting the collection (one truncated file must not lose
every healthy batch). cid range is NOT checked here — render_cues.py is the authoritative
guard against out-of-range cids; here we only catch type errors and cross-batch collisions.
Run standalone:  python3 code/scripts/collect_cues.py
"""
import json
import re
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent  # code/scripts/ -> repo root
OUTPUT_DIR = ROOT / 'output'
TMP_DIR = OUTPUT_DIR / 'tmp'
ASSIGN_DIR = TMP_DIR / 'cue_assign'
SEEDS_IN = OUTPUT_DIR / 'cue_seeds.json'
CRUXES_IN = OUTPUT_DIR / 'cruxes.json'
REGISTRY_OUT = TMP_DIR / 'cue_registry_raw.json'
CRUX_TO_CUE_OUT = TMP_DIR / 'crux_to_cue.json'


def norm(text: str) -> str:
    """Normalize a cue string for intra-run dedup: lowercase, collapse whitespace, drop a
    trailing period. Best-effort only — semantically-equal cues phrased differently are
    merged later by the REDUCE agent, not here."""
    return re.sub(r'\s+', ' ', text.strip().lower()).rstrip('.')


def coerce_cid(raw: object) -> int | None:
    """Return raw as an int cid, or None if it is not an integer-valued number. Rejects bool
    (True/False are ints in Python) and accepts an integral JSON float (e.g. 12.0), since the
    MAP schema only promises a 'number'."""
    if isinstance(raw, bool):
        return None
    if isinstance(raw, int):
        return raw
    if isinstance(raw, float) and raw.is_integer():
        return int(raw)
    return None


def collect() -> tuple[int, int, int]:
    """Merge seeds + every MAP batch's assignments into one raw registry + a crux->cue map.
    Returns (distinct cues, assigned cruxes, batch files read)."""
    seeds = json.loads(SEEDS_IN.read_text())
    if not ASSIGN_DIR.exists():
        raise SystemExit(f'no {ASSIGN_DIR} — run the MAP phase (03_build_cues.workflow.js) first')

    # Seed cues keep S<i> ids (the workflow's setup emitted the same ids to the MAP agents,
    # both by enumerating cue_seeds.json in order).
    registry: list[dict] = [{'id': f'S{i}', 'cue': c['cue'], 'kind': 'seed'} for i, c in enumerate(seeds)]
    seed_ids = {e['id'] for e in registry}

    new_id_by_norm: dict[str, str] = {}
    crux_to_cue: dict[str, str] = {}
    n_files = n_ok_files = dropped_bad = dropped_collision = 0
    for f in sorted(ASSIGN_DIR.glob('*.json')):
        n_files += 1
        try:
            data = json.loads(f.read_text())
        except (json.JSONDecodeError, OSError) as exc:
            print(f'  DROP[bad-file] {f.name}: {exc}', file=sys.stderr)
            continue
        n_ok_files += 1
        for a in data.get('assignments', []):
            cid = coerce_cid(a.get('cid'))
            cue_id = a.get('cue_id', '')
            new_cue = (a.get('new_cue') or '').strip()
            if cid is None:
                dropped_bad += 1
                print(f'  DROP[bad-cid] {f.name}: cid={a.get("cid")!r}', file=sys.stderr)
                continue
            key_cid = str(cid)
            if key_cid in crux_to_cue:
                # Cross-batch collision: batches are disjoint by construction, so a cid that
                # already has an assignment means a duplicated/out-of-slice cid. Keep the
                # first, never let a later batch silently overwrite it.
                dropped_collision += 1
                print(f'  DROP[collision] {f.name}: cid={cid} already assigned to {crux_to_cue[key_cid]}', file=sys.stderr)
                continue
            if cue_id == 'NEW':
                if not new_cue:
                    dropped_bad += 1
                    print(f'  DROP[NEW-without-text] {f.name}: cid={cid}', file=sys.stderr)
                    continue
                nkey = norm(new_cue)
                if nkey not in new_id_by_norm:
                    nid = f'N{len(new_id_by_norm)}'
                    new_id_by_norm[nkey] = nid
                    registry.append({'id': nid, 'cue': new_cue, 'kind': 'new'})
                crux_to_cue[key_cid] = new_id_by_norm[nkey]
            elif cue_id in seed_ids:
                crux_to_cue[key_cid] = cue_id
            else:
                dropped_bad += 1
                print(f'  DROP[unknown-cue-id] {f.name}: cid={cid} cue_id={cue_id!r}', file=sys.stderr)

    # Tag each registry cue with its majority domain (from the cruxes assigned to it), so
    # REDUCE can block by domain. cid = index into cruxes.json.
    cruxes = json.loads(CRUXES_IN.read_text())
    dom_votes: dict[str, Counter] = {}
    for cid_str, cue_id in crux_to_cue.items():
        d = cruxes[int(cid_str)].get('domain')
        if d:
            dom_votes.setdefault(cue_id, Counter())[d] += 1
    for e in registry:
        votes = dom_votes.get(e['id'])
        e['domain'] = votes.most_common(1)[0][0] if votes else 'unknown'

    REGISTRY_OUT.write_text(json.dumps(registry, indent=2))
    CRUX_TO_CUE_OUT.write_text(json.dumps(crux_to_cue))
    if dropped_bad or dropped_collision or n_ok_files < n_files:
        print(f'⚠️  collect: dropped {dropped_bad} bad row(s), {dropped_collision} collision(s); '
              f'{n_files - n_ok_files} corrupt file(s) of {n_files}.', file=sys.stderr)
    print(f'collect: {len(registry)} cues ({len(seeds)} seed + {len(new_id_by_norm)} new) '
          f'over {len(crux_to_cue)} assigned cruxes from {n_ok_files}/{n_files} batch file(s).', file=sys.stderr)
    return len(registry), len(crux_to_cue), n_ok_files


if __name__ == '__main__':
    cues, cruxes, batches = collect()
    print(json.dumps({'cues': cues, 'cruxes': cruxes, 'batches': batches}))
    sys.exit(0)
