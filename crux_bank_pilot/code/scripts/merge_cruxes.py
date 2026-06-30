#!/usr/bin/env python3
"""
merge_cruxes.py — stage-1 merger.

Reads the per-problem crux files each extract/reconstruct agent wrote
(output/cruxes_raw/<problem_id>.json) plus the per-batch difficulty files
(output/difficulty/<batch>.json), assigns each crux its filing subtopic from the
fixed taxonomy, and writes the flat validated crux list to output/cruxes.json.

No agent runs this logic — it is deterministic text processing over files the
agents already wrote. Run standalone:  python3 code/merge_cruxes.py
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent  # code/scripts/ -> repo root
OUTPUT_DIR = ROOT / 'output'
TMP_DIR = OUTPUT_DIR / 'tmp'
CRUXES_RAW_DIR = TMP_DIR / 'cruxes_raw'
DIFFICULTY_DIR = TMP_DIR / 'difficulty'
CRUXES_OUT = OUTPUT_DIR / 'cruxes.json'

# Fixed olympiad subtopic taxonomy (must match the workflow's TAXONOMY).
TAXONOMY = {
    'algebra': ['functional-equations', 'polynomial-roots-and-factoring',
                'inequalities-SOS-and-convexity', 'sequences-and-recurrences',
                'telescoping-and-summation', 'symmetric-functions-and-substitution'],
    'number_theory': ['p-adic-valuation', 'lifting-the-exponent',
                      'zsygmondy-and-primitive-divisors', 'orders-and-primitive-roots',
                      'modular-arithmetic-and-CRT', 'size-bounding-and-descent',
                      'vieta-jumping', 'divisibility-and-gcd', 'diophantine-and-factoring',
                      'cyclotomic-and-roots-of-unity'],
    'combinatorics': ['extremal-principle', 'pigeonhole', 'invariants-and-monovariants',
                      'double-counting', 'bijections-and-encoding', 'coloring-and-parity',
                      'graph-theory-and-connectivity', 'induction-and-construction',
                      'processes-and-algorithms', 'linear-algebra-method',
                      'games-and-strategy', 'generating-functions', 'probabilistic-method'],
    'geometry': ['angle-chasing-and-cyclic-quads', 'power-of-a-point-and-radical-axes',
                 'spiral-similarity-and-rotation', 'inversion', 'projective-and-cross-ratio',
                 'trig-and-length-bashing', 'coordinate-and-complex-bashing', 'barycentric-and-areas'],
}
ALL_TOPICS = [t for ts in TAXONOMY.values() for t in ts]
DOMAIN_DEFAULT = {
    'algebra': 'symmetric-functions-and-substitution',
    'number_theory': 'divisibility-and-gcd',
    'combinatorics': 'induction-and-construction',
    'geometry': 'angle-chasing-and-cyclic-quads',
}


def load_difficulty() -> dict[str, str]:
    """problem_id -> domain, merged from every output/difficulty/*.json batch file."""
    domain_by_id: dict[str, str] = {}
    if not DIFFICULTY_DIR.exists():
        return domain_by_id
    for f in sorted(DIFFICULTY_DIR.glob('*.json')):
        data = json.loads(f.read_text())
        for r in data.get('ratings', data if isinstance(data, list) else []):
            if r.get('problem_id') and r.get('domain'):
                domain_by_id[r['problem_id']] = r['domain']
    return domain_by_id


def assign_subtopic(crux: dict, domain: str) -> str:
    """First valid taxonomy subtopic the extractor chose, else the domain default."""
    valid = [s for s in (crux.get('subtopics') or []) if s in ALL_TOPICS]
    return valid[0] if valid else DOMAIN_DEFAULT.get(domain, ALL_TOPICS[0])


def merge() -> int:
    domain_by_id = load_difficulty()
    if not CRUXES_RAW_DIR.exists():
        raise SystemExit(f'no {CRUXES_RAW_DIR} — run stage-1 extraction first')

    out: list[dict] = []
    for f in sorted(CRUXES_RAW_DIR.glob('*.json')):
        rec = json.loads(f.read_text())
        pid = rec['problem_id']
        domain = rec.get('domain') or domain_by_id.get(pid, 'combinatorics')
        for c in rec.get('cruxes', []):
            out.append({
                'problem_id': pid,
                'domain': domain,
                'subtopic': assign_subtopic(c, domain),
                'technique': c['technique'],
                'how_used': c['how_used'],
                'technique_tags': c.get('technique_tags', []),
                'subtopics': c.get('subtopics', []),
                'retries': c.get('retries', 1),
            })

    OUTPUT_DIR.mkdir(exist_ok=True)
    CRUXES_OUT.write_text(json.dumps(out))
    return len(out)


if __name__ == '__main__':
    n = merge()
    print('CRUXES_MERGED', n)
    sys.exit(0)
