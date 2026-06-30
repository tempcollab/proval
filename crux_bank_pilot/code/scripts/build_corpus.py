#!/usr/bin/env python3
"""
build_corpus.py — reproducible corpus builder for the crux bank.

Downloads the AI-MO/olympiads `segmented` JSONL for the chosen competitions,
groups rows into distinct problems (merging each problem's multiple official
solutions into solutions[]), filters, and writes:

  data/problems_full.json    — the full corpus (all kept problems)
  data/problems.json         — the run slice (default: a recent-years subset)

Design choices (documented for the paper):
  * Competitions are the top-IMO-altitude, problem-proposer-heavy sources that
    AI-MO has SEGMENTED (clean problem+solution JSONL). Iran/Hungary/Romania are
    excluded because AI-MO only ships their raw PDFs (no segmented split).
  * YEAR_MIN = 2006: trims stylistically-different pre-2006 material (esp. old
    USAMO 1972-2005). YEAR_MAX = 2025: contamination guard — strictly pre-2026,
    disjoint from the math-contests-2026 validation set.
  * Only "real" contest labels (A1-N8 for shortlists, 1-6 for olympiads) are kept;
    this drops AI-MO segmentation mis-splits (fake "problems" like "lemma.").
  * IMO-Shortlist domain comes from the label letter (A/C/G/N); other sources have
    no label-encoded domain and are left 'unknown' (backfilled by the pipeline's
    phase-0 difficulty+domain judge).

Run:  python3 code/build_corpus.py
Requires network access to huggingface.co. No HF library needed (plain HTTP).
"""
import json
import re
import urllib.request
from collections import defaultdict, Counter
from pathlib import Path

# ---- configuration --------------------------------------------------------
HF_TREE = 'https://huggingface.co/api/datasets/AI-MO/olympiads/tree/main/{comp}/segmented'
HF_FILE = 'https://huggingface.co/datasets/AI-MO/olympiads/resolve/main/{path}'

# segmented, top-altitude, proposer-heavy competitions (Iran/Hungary/Romania have
# no segmented data on AI-MO, so they cannot be included without re-doing OCR).
COMPETITIONS = ['IMO_SL', 'USAMO', 'USA_TST', 'USA_TSTST', 'RMM', 'Germany_TST', 'Dutch_TST']

YEAR_MIN = 2006   # trim pre-2006 (old-era USAMO etc.)
YEAR_MAX = 2025   # contamination guard: strictly pre-2026

LETTER_DOMAIN = {'A': 'algebra', 'C': 'combinatorics', 'G': 'geometry', 'N': 'number_theory'}
TYPE_DOMAIN = {'Algebra': 'algebra', 'Number Theory': 'number_theory',
               'Combinatorics': 'combinatorics', 'Geometry': 'geometry'}

DATA_DIR = Path(__file__).resolve().parent.parent.parent / 'data'

# competitions whose recent years form the default run slice (problems.json)
RUN_SLICE_YEARS = range(2021, 2026)   # 2021-2025


def _get(url: str) -> bytes:
    with urllib.request.urlopen(url) as r:
        return r.read()


def list_segmented(comp: str) -> list[str]:
    """Return the segmented .jsonl paths for a competition (empty if none)."""
    try:
        tree = json.loads(_get(HF_TREE.format(comp=comp)))
    except Exception:
        return []
    return [x['path'] for x in tree
            if x.get('type') == 'file' and x['path'].endswith('.jsonl')]


def download_rows(comp: str) -> list[dict]:
    rows: list[dict] = []
    for path in list_segmented(comp):
        for line in _get(HF_FILE.format(path=path)).decode('utf-8', 'replace').splitlines():
            line = line.strip()
            if not line:
                continue
            try:
                rows.append(json.loads(line))
            except json.JSONDecodeError:
                continue
    return rows


def year_of(rec: dict) -> int | None:
    m = re.search(r'(19|20)\d\d', str(rec.get('year', '')))
    return int(m.group()) if m else None


# Numeric-label contests have a fixed problem count per edition. AI-MO sometimes
# appends extra (shortlist-style) problems past that count under the same exam
# (e.g. IMO 2025 carries labels 1-9, but the IMO has only 6 problems). Cap them.
MAX_NUMERIC_LABEL = {'IMO': 6, 'USAMO': 6, 'RMM': 6}


def is_real_label(rec: dict) -> bool:
    lab = (rec.get('problem_label') or '').strip()
    if re.fullmatch(r'[ACGN][0-9]+', lab):       # shortlist label A1..N8
        return True
    if re.fullmatch(r'[0-9]+', lab):             # numeric contest label 1..k
        cap = MAX_NUMERIC_LABEL.get(rec.get('exam', ''))
        return cap is None or int(lab) <= cap
    return False


def group_problems(rows: list[dict]) -> list[dict]:
    """Group (exam, year, label) rows into one problem each, merging solutions."""
    groups: dict[tuple, dict] = defaultdict(lambda: {'solutions': []})
    for r in rows:
        key = (r.get('exam', '') or '', str(r.get('year', '') or ''), r.get('problem_label', '') or '')
        g = groups[key]
        g['exam'], g['year'], g['problem_label'] = key
        g['problem_type'] = r.get('problem_type', '') or 'Unknown'
        prob = r.get('problem', '') or ''
        if len(prob) > len(g.get('problem', '')):
            g['problem'] = prob
        sol = r.get('solution', '') or ''
        if sol.strip():
            g['solutions'].append(sol)
    return list(groups.values())


def domain_of(p: dict) -> str:
    lab = (p.get('problem_label') or '').strip()
    m = re.fullmatch(r'([ACGN])\d+', lab)
    if m:
        return LETTER_DOMAIN[m.group(1)]
    return TYPE_DOMAIN.get(p.get('problem_type', ''), 'unknown')


def build() -> None:
    all_rows: list[dict] = []
    for comp in COMPETITIONS:
        rows = download_rows(comp)
        print(f'{comp:14} {len(rows)} raw rows')
        all_rows.extend(rows)

    probs = group_problems(all_rows)

    kept: list[dict] = []
    for p in probs:
        y = year_of(p)
        if y is None or not (YEAR_MIN <= y <= YEAR_MAX):
            continue
        if not is_real_label(p):
            continue
        if not (p.get('problem', '').strip() and p['solutions']):
            continue
        p['domain'] = domain_of(p)
        p['competition'] = p['exam']
        kept.append(p)

    for i, p in enumerate(kept):
        p['problem_id'] = 'aimo-%04d' % i

    DATA_DIR.mkdir(exist_ok=True)
    (DATA_DIR / 'problems_full.json').write_text(json.dumps(kept))

    # run slice: recent years, for the pilot run input
    run_slice = [p for p in kept if (year_of(p) or 0) in RUN_SLICE_YEARS]
    # re-id the slice so ids are contiguous within it
    for i, p in enumerate(run_slice):
        p['problem_id'] = 'aimo-%04d' % i
    (DATA_DIR / 'problems.json').write_text(json.dumps(run_slice))

    print(f'\nfull corpus : {len(kept)} problems  -> data/problems_full.json')
    print(f'run slice   : {len(run_slice)} problems ({RUN_SLICE_YEARS.start}-{RUN_SLICE_YEARS.stop - 1}) -> data/problems.json')
    print('\nby competition (full):')
    for k, v in Counter(p['competition'] for p in kept).most_common():
        print(f'  {k:12} {v}')
    print('contamination check: year span',
          min(filter(None, (year_of(p) for p in kept))), '..',
          max(filter(None, (year_of(p) for p in kept))))


if __name__ == '__main__':
    build()
