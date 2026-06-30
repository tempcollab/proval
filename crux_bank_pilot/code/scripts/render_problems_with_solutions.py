#!/usr/bin/env python3
"""
render_problems_with_solutions.py — stage-1 tier-3 renderer.

The model's deepest drill-down tier: CHEATSHEET (technique) -> cruxes.json (technique + how_used)
-> THIS (statement + full solution). A pure file-to-file join of data/problems_full.json
(statements + solutions) with output/cruxes.json (cruxes per id), keyed by
problem_id, restricted to the problems that actually produced cruxes.

No agent runs this logic. Both inputs are already on disk. Run standalone:
  python3 code/render_problems_with_solutions.py
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent  # code/scripts/ -> repo root
PROBLEMS_IN = ROOT / 'data' / 'problems_full.json'
CRUXES_IN = ROOT / 'output' / 'cruxes.json'
PWS_OUT = ROOT / 'output' / 'problems_with_solutions.json'


def render() -> int:
    probs = {r['problem_id']: r for r in json.loads(PROBLEMS_IN.read_text())}
    cruxes = json.loads(CRUXES_IN.read_text())

    cruxes_by_id: dict[str, list] = {}
    for c in cruxes:
        cruxes_by_id.setdefault(c['problem_id'], []).append(c)

    # one record per problem that produced cruxes, in id order
    out: list[dict] = []
    for pid in sorted(cruxes_by_id):
        p = probs.get(pid)
        if not p:
            continue
        out.append({
            'problem_id': pid,
            'domain': p.get('domain'),
            'competition': p.get('competition'),
            'year': p.get('year'),
            'problem_label': p.get('problem_label'),
            'problem': p.get('problem'),
            'solutions': p.get('solutions') or [],
            'cruxes': cruxes_by_id[pid],
        })

    PWS_OUT.parent.mkdir(exist_ok=True)
    PWS_OUT.write_text(json.dumps(out))
    return len(out)


if __name__ == '__main__':
    n = render()
    print('PWS_COUNT', n)
    sys.exit(0)
