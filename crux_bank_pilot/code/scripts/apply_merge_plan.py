#!/usr/bin/env python3
"""
apply_merge_plan.py — stage-2 merge applier.

Reads the distilled entries (output/tmp/moves/*.json) and the agent-proposed merge
plan (output/tmp/merge_plan.json), then deterministically applies the plan and writes
the resulting entries to output/tmp/moves_final/*.json (one file per entry).

The LLM only DECIDED the merges (which entries collapse + the unified technique);
this script EXECUTES them: it unions the grouped entries' exemplar_ids, subtopics and
technique_tags, and replaces their technique with the unified text. Unioning subtopics
is what lets a deduped entry surface under EVERY subtopic it spanned. Entries not named
in any merge pass through unchanged. An entry id is "<filename>#<index-within-file>".

No reasoning here. Run standalone:  python3 code/scripts/apply_merge_plan.py
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent  # code/scripts/ -> repo root
TMP_DIR = ROOT / 'output' / 'tmp'
MOVES_DIR = TMP_DIR / 'moves'
MOVES_FINAL_DIR = TMP_DIR / 'moves_final'
MERGE_PLAN = TMP_DIR / 'merge_plan.json'


def load_entries() -> dict[str, dict]:
    """All distilled entries keyed by id '<filename>#<idx>'."""
    by_id: dict[str, dict] = {}
    for f in sorted(MOVES_DIR.glob('*.json')):
        for i, m in enumerate(json.loads(f.read_text())):
            by_id[f'{f.name}#{i}'] = m
    return by_id


def union(entries: list[dict], field: str) -> list[str]:
    """Order-preserving union of a list-valued field across entries."""
    out: list[str] = []
    for e in entries:
        for v in e[field]:
            if v not in out:
                out.append(v)
    return out


def apply() -> int:
    by_id = load_entries()
    plan = json.loads(MERGE_PLAN.read_text()) if MERGE_PLAN.exists() else []

    merged_ids: set[str] = set()
    out: list[dict] = []

    # Each merge group: keep the unified technique, UNION exemplars + subtopics + tags
    # across the group (so a deduped entry surfaces under every subtopic it spanned).
    for group in plan:
        ids = [i for i in group['ids'] if i in by_id]
        if len(ids) < 2:
            continue  # a merge of <2 real entries is a no-op
        members = [by_id[i] for i in ids]
        merged_ids.update(ids)
        out.append({
            **members[0],
            'technique': group['technique'],
            'exemplar_ids': union(members, 'exemplar_ids'),
            'subtopics': union(members, 'subtopics'),
            'technique_tags': union(members, 'technique_tags'),
        })

    # pass through every entry not consumed by a merge
    for eid, m in by_id.items():
        if eid not in merged_ids:
            out.append(m)

    MOVES_FINAL_DIR.mkdir(parents=True, exist_ok=True)
    for f in MOVES_FINAL_DIR.glob('*.json'):
        f.unlink()
    for i, m in enumerate(out):
        (MOVES_FINAL_DIR / f'entry_{i:04d}.json').write_text(json.dumps(m))
    return len(out)


if __name__ == '__main__':
    n = apply()
    print('FINAL_ENTRIES', n)
    sys.exit(0)
