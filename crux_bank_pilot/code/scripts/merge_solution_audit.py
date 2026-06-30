#!/usr/bin/env python3
"""
merge_solution_audit.py — test-set prep merger.

Reads the test problems (data/test/test_problems.json) and the per-problem audit verdicts
(output/tmp/sol_audit/*.json, written by verify_solutions.workflow.js), then writes:

  data/test/test_problems_fixed.json — same problems, but a solution that the audit fixed is
                                       REPLACED by the corrected one (the original is kept in
                                       `_original_solutions` for provenance). Problems with no
                                       solution pass through unchanged.
  data/test/gap_report.md            — per-problem verdict, approach soundness, gap note, and
                                       whether the solution was fixed (auditable record).

No reasoning here. Run standalone:  python3 code/scripts/merge_solution_audit.py
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent  # code/scripts/ -> repo root
TEST_DIR = ROOT / 'data' / 'test'
PROBLEMS_IN = TEST_DIR / 'test_problems.json'
AUDIT_DIR = ROOT / 'output' / 'tmp' / 'sol_audit'
PROBLEMS_OUT = TEST_DIR / 'test_problems_fixed.json'
REPORT_OUT = TEST_DIR / 'gap_report.md'

VERDICT_ORDER = ['wrong', 'major_gap', 'minor_gap', 'ok']


def load_audits() -> dict[str, dict]:
    """problem_id -> audit verdict, from output/tmp/sol_audit/*.json."""
    audits: dict[str, dict] = {}
    if not AUDIT_DIR.exists():
        raise SystemExit(f'no {AUDIT_DIR} — run verify_solutions.workflow.js first')
    for f in sorted(AUDIT_DIR.glob('*.json')):
        try:
            a = json.loads(f.read_text())
        except (json.JSONDecodeError, OSError) as exc:
            print(f'  DROP[bad-file] {f.name}: {exc}', file=sys.stderr)
            continue
        if a.get('problem_id'):
            audits[a['problem_id']] = a
    return audits


def merge() -> tuple[int, int]:
    problems = json.loads(PROBLEMS_IN.read_text())
    audits = load_audits()

    fixed_n = 0
    for p in problems:
        a = audits.get(p['problem_id'])
        if a and a.get('fixed') and (a.get('fixed_solution') or '').strip():
            p['_original_solutions'] = p.get('solutions', [])
            p['solutions'] = [a['fixed_solution']]
            p['_audit'] = {k: a.get(k) for k in ('verdict', 'approach_sound', 'gap_note', 'confidence')}
            fixed_n += 1
        elif a:
            p['_audit'] = {k: a.get(k) for k in ('verdict', 'approach_sound', 'gap_note', 'confidence')}
    PROBLEMS_OUT.write_text(json.dumps(problems, indent=1))

    # gap report, ordered worst-first
    audited = [audits[p['problem_id']] for p in problems if p['problem_id'] in audits]
    audited.sort(key=lambda a: (VERDICT_ORDER.index(a.get('verdict', 'ok')), a['problem_id']))
    no_sol = [p['problem_id'] for p in problems if not p.get('solutions') and p['problem_id'] not in audits]
    L = ['# Test-solution gap report', '',
         f'{len(problems)} hard problems · {len(audits)} audited · {fixed_n} solutions fixed · '
         f'{len(no_sol)} with no reference solution.', '']
    counts: dict[str, int] = {}
    for a in audited:
        counts[a.get('verdict', '?')] = counts.get(a.get('verdict', '?'), 0) + 1
    L.append('Verdicts: ' + ', '.join(f'{k}={v}' for k, v in counts.items()) + '.')
    if no_sol:
        L.append('')
        L.append('**No reference solution (no cue possible):** ' + ', '.join(no_sol))
    L.append('')
    for a in audited:
        sound = 'approach sound' if a.get('approach_sound') else '⚠️ APPROACH UNSOUND (cue-risk)'
        fixed = ' · **FIXED**' if a.get('fixed') else ''
        L.append(f'## {a["problem_id"]} — {a.get("verdict")}{fixed}')
        L.append(f'_{sound} · confidence {a.get("confidence")}_')
        L.append('')
        L.append(a.get('gap_note', '') or 'none')
        L.append('')
    REPORT_OUT.write_text('\n'.join(L))
    return len(problems), fixed_n


if __name__ == '__main__':
    n, fixed = merge()
    print(json.dumps({'problems': n, 'fixed': fixed}))
    sys.exit(0)
