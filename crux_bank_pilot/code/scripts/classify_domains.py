#!/usr/bin/env python3
"""
classify_domains.py — merge the domain REVIEW verdicts into a labeled corpus copy.

The 04 workflow runs two agent groups: group A ANNOTATES each unknown-domain problem with a
domain, then group B independently REVIEWS (confirms or corrects) it. This script reads group
B's verdicts (output/tmp/domain/review/*.json — the authoritative final labels) and updates
data/problems_full.json IN PLACE, filling each previously `unknown`-domain row from the review
verdict. Rows that already had a real domain are kept verbatim (classification never overrides
a real label).

SAFETY: the pre-run problems_full.json is committed in git (the backup), and the write is
ATOMIC — the new corpus is written to a temp file in the same dir and os.replace'd into place,
so problems_full.json is never left half-written even if the process dies mid-write. The file
is read fully into memory before any write, so the read-modify-write is safe.

Each review row carries `changed` (true if B overrode A's annotation) so the workflow can
report how much the review corrected — the signal for human confirmation. No reasoning here.
Defensive about untrusted output: a malformed batch/row is dropped LOUD; a problem left
without a label keeps 'unknown' and is reported, never silently guessed.
Run standalone:  python3 code/scripts/classify_domains.py
"""
import json
import os
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent  # code/scripts/ -> repo root
DATA_DIR = ROOT / 'data'
INPUT = DATA_DIR / 'problems_full.json'
REVIEW_DIR = ROOT / 'output' / 'tmp' / 'domain' / 'review'
OUT = INPUT                                            # update problems_full.json IN PLACE (atomic)
DOMAINS = {'algebra', 'number_theory', 'combinatorics', 'geometry'}


def collect() -> tuple[dict[str, str], int]:
    """Gather id -> final domain from group B's review files. Returns (labels, n_changed).
    First verdict wins on collision (loud)."""
    if not REVIEW_DIR.exists():
        raise SystemExit(f'no {REVIEW_DIR} — run the review phase (04_classify_domains.workflow.js) first')
    by_id: dict[str, str] = {}
    n_files = n_ok = dropped = collisions = changed = 0
    for f in sorted(REVIEW_DIR.glob('*.json')):
        n_files += 1
        try:
            data = json.loads(f.read_text())
        except (json.JSONDecodeError, OSError) as exc:
            print(f'  DROP[bad-file] {f.name}: {exc}', file=sys.stderr)
            continue
        n_ok += 1
        for row in data.get('labels', []):
            pid = row.get('problem_id')
            dom = row.get('domain')
            if not pid or dom not in DOMAINS:
                dropped += 1
                print(f'  DROP[bad-row] {f.name}: {row!r}', file=sys.stderr)
                continue
            if pid in by_id:
                collisions += 1
                print(f'  DROP[collision] {f.name}: {pid} already {by_id[pid]}, ignored {dom}', file=sys.stderr)
                continue
            by_id[pid] = dom
            if row.get('changed'):
                changed += 1
    if dropped or collisions or n_ok < n_files:
        print(f'⚠️  collect: dropped {dropped} row(s), {collisions} collision(s); '
              f'{n_files - n_ok} corrupt file(s) of {n_files}.', file=sys.stderr)
    print(f'collect: {len(by_id)} reviewed labels ({changed} corrected by review) '
          f'from {n_ok}/{n_files} batch file(s).', file=sys.stderr)
    return by_id, changed


def apply() -> tuple[int, int, Counter]:
    """Write the labeled corpus copy. Returns (filled, corrected_by_review, domain counts)."""
    problems = json.loads(INPUT.read_text())
    by_id, changed = collect()
    filled = still_unknown = 0
    for p in problems:
        if p.get('domain') in DOMAINS:
            continue                                  # real label already — never override
        new = by_id.get(p['problem_id'])
        if new:
            p['domain'] = new
            filled += 1
        else:
            still_unknown += 1
            print(f'  KEEP[unknown] {p["problem_id"]}: no review label, left unknown', file=sys.stderr)
    tmp = OUT.with_name(OUT.name + '.tmp')            # atomic write: temp in same dir, then replace
    tmp.write_text(json.dumps(problems, indent=2))
    os.replace(tmp, OUT)
    counts = Counter(p.get('domain') for p in problems)
    if still_unknown:
        print(f'⚠️  {still_unknown} problem(s) still unclassified (left as-is).', file=sys.stderr)
    print(f'apply: filled {filled} domain(s) ({changed} were review-corrected) -> {OUT.name}; '
          f'final domains: {dict(counts)}', file=sys.stderr)
    return filled, changed, counts


if __name__ == '__main__':
    filled, changed, counts = apply()
    print(json.dumps({'filled': filled, 'corrected_by_review': changed, 'domains': dict(counts)}))
    sys.exit(0)
