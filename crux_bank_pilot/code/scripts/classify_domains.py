#!/usr/bin/env python3
"""
classify_domains.py — merge the domain-classifier scratch into a labeled corpus copy.

Reads data/problems_full.json and every classify batch's verdicts
(output/tmp/domain/*.json), then writes a COPY of the corpus with the previously
`unknown`-domain problems filled in:

  data/problems_full_labeled.json — same rows as problems_full.json, but each row whose
                                    domain was 'unknown'/empty now carries the classified
                                    domain. Rows that already had a real domain are kept
                                    verbatim (the classifier never overrides a real label).

No reasoning here — the classifier agents already decided. This script only gathers their
verdicts deterministically. It is defensive about untrusted agent output: a malformed batch
file or row is dropped with a LOUD stderr line (never aborting the merge); a problem that
ends up with no classification keeps 'unknown' and is reported, never silently guessed.
Run standalone:  python3 code/scripts/classify_domains.py
"""
import json
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent  # code/scripts/ -> repo root
DATA_DIR = ROOT / 'data'
INPUT = DATA_DIR / 'problems_full.json'
DOMAIN_DIR = ROOT / 'output' / 'tmp' / 'domain'
OUT = DATA_DIR / 'problems_full_labeled.json'
DOMAINS = {'algebra', 'number_theory', 'combinatorics', 'geometry'}


def collect() -> dict[str, str]:
    """Gather id -> domain from every batch file. First verdict wins on collision (loud)."""
    if not DOMAIN_DIR.exists():
        raise SystemExit(f'no {DOMAIN_DIR} — run the classify phase (04_classify_domains.workflow.js) first')
    by_id: dict[str, str] = {}
    n_files = n_ok = dropped = collisions = 0
    for f in sorted(DOMAIN_DIR.glob('*.json')):
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
    if dropped or collisions or n_ok < n_files:
        print(f'⚠️  collect: dropped {dropped} row(s), {collisions} collision(s); '
              f'{n_files - n_ok} corrupt file(s) of {n_files}.', file=sys.stderr)
    print(f'collect: {len(by_id)} classifications from {n_ok}/{n_files} batch file(s).', file=sys.stderr)
    return by_id


def apply() -> tuple[int, Counter]:
    """Write the labeled corpus copy. Returns (problems filled, domain counts over the whole file)."""
    problems = json.loads(INPUT.read_text())
    by_id = collect()
    filled = still_unknown = 0
    for p in problems:
        dom = p.get('domain')
        if dom in DOMAINS:
            continue                                  # real label already — never override
        new = by_id.get(p['problem_id'])
        if new:
            p['domain'] = new
            filled += 1
        else:
            still_unknown += 1
            print(f'  KEEP[unknown] {p["problem_id"]}: no classification, left as {dom!r}', file=sys.stderr)
    OUT.write_text(json.dumps(problems, indent=2))
    counts = Counter(p.get('domain') for p in problems)
    if still_unknown:
        print(f'⚠️  {still_unknown} problem(s) still unclassified (left as-is).', file=sys.stderr)
    print(f'apply: filled {filled} domain(s) -> {OUT.name}; final domains: {dict(counts)}', file=sys.stderr)
    return filled, counts


if __name__ == '__main__':
    filled, counts = apply()
    print(json.dumps({'filled': filled, 'domains': dict(counts)}))
    sys.exit(0)
