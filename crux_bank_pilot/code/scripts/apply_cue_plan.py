#!/usr/bin/env python3
"""
apply_cue_plan.py — stage-3 consolidation applier.

Reads the raw registry (output/tmp/cue_registry_raw.json), the per-crux assignment
(output/tmp/crux_to_cue.json), and the REDUCE agent's plan (output/tmp/cue_merge_plan.json),
then deterministically applies the plan and writes the canonical cue -> exemplars map:

  output/tmp/cues_final.json — [{cue, flagged, flag_reason, cids:[...]}], one per CANONICAL
                               cue. (render_cues.py sorts for display; order here is incidental.)

The LLM only DECIDED the merges (which cue ids collapse + the unified text) and the flags
(which cues are still topical). This script EXECUTES them: it builds an id -> canonical-id
remap (merged ids share one canonical; unmerged ids pass through as their own canonical),
re-tags every crux to its canonical cue, and carries the topical flags onto the result.
Malformed plan rows and ids that appear in two merge groups are dropped with a LOUD stderr
line (first group wins) rather than silently mis-collapsing the registry.
Run standalone:  python3 code/scripts/apply_cue_plan.py
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent  # code/scripts/ -> repo root
TMP_DIR = ROOT / 'output' / 'tmp'
REGISTRY_IN = TMP_DIR / 'cue_registry_raw.json'
CRUX_TO_CUE_IN = TMP_DIR / 'crux_to_cue.json'
MERGE_PLAN = TMP_DIR / 'cue_merge_plan.json'
CUES_FINAL_OUT = TMP_DIR / 'cues_final.json'


def build_remap(plan: dict, cue_text: dict[str, str]) -> tuple[dict[str, str], dict[str, str], int]:
    """From the merge plan, build id -> canonical-id remap and canonical-id -> cue text.
    Merged groups become a 'C<i>' canonical with the unified text; every other valid id
    passes through as its own canonical. Returns (remap, canon_text, n_merges)."""
    valid_ids = set(cue_text)
    remap: dict[str, str] = {}
    canon_text: dict[str, str] = {}
    n_merges = 0
    for gi, group in enumerate(plan.get('merges', [])):
        ids_raw = group.get('ids')
        cue = group.get('cue')
        if not isinstance(ids_raw, list) or not cue:
            print(f'  DROP[malformed-merge] group {gi}: {group!r}', file=sys.stderr)
            continue
        ids = []
        for i in ids_raw:
            if i not in valid_ids:
                continue
            if i in remap:                  # id already claimed by an earlier group: first wins
                print(f'  DROP[overlap] id {i} already in {remap[i]}, ignored in group {gi}', file=sys.stderr)
                continue
            ids.append(i)
        if len(ids) < 2:
            continue                        # a merge of <2 real, unclaimed ids is a no-op
        canon = f'C{gi}'
        canon_text[canon] = cue
        for i in ids:
            remap[i] = canon
        n_merges += 1
    for cid_id in valid_ids:                # passthrough: unmerged ids are their own canonical
        if cid_id not in remap:
            remap[cid_id] = cid_id
            canon_text[cid_id] = cue_text[cid_id]
    return remap, canon_text, n_merges


def apply() -> int:
    registry = json.loads(REGISTRY_IN.read_text())
    crux_to_cue = json.loads(CRUX_TO_CUE_IN.read_text())
    plan = json.loads(MERGE_PLAN.read_text()) if MERGE_PLAN.exists() else {'merges': [], 'flags': []}

    cue_text = {e['id']: e['cue'] for e in registry}
    remap, canon_text, n_merges = build_remap(plan, cue_text)

    # Topical flags ride from the flagged raw id to its canonical (loud if the id is unknown).
    flagged: dict[str, str] = {}
    for fl in plan.get('flags', []):
        fid = fl.get('id')
        if fid in remap:
            flagged[remap[fid]] = fl.get('reason', 'topical')
        else:
            print(f'  DROP[flag-unknown-id] {fl!r}', file=sys.stderr)

    # Re-tag every crux to its canonical cue and gather cids per canonical.
    cids_by_canon: dict[str, list[int]] = {}
    for cid_str, raw_id in crux_to_cue.items():
        if raw_id not in remap:
            print(f'  DROP[crux->unknown-cue] cid={cid_str} cue_id={raw_id!r}', file=sys.stderr)
            continue
        cids_by_canon.setdefault(remap[raw_id], []).append(int(cid_str))

    out = [{
        'cue': canon_text[canon],
        'flagged': canon in flagged,
        'flag_reason': flagged.get(canon, ''),
        'cids': sorted(cids),
    } for canon, cids in cids_by_canon.items()]

    CUES_FINAL_OUT.write_text(json.dumps(out, indent=2))
    print(f'apply: {len(registry)} raw cues -> {len(out)} canonical ({n_merges} merge group(s), '
          f'{len(flagged)} flagged topical).', file=sys.stderr)
    return len(out)


if __name__ == '__main__':
    n = apply()
    print('FINAL_CUES', n)
    sys.exit(0)
