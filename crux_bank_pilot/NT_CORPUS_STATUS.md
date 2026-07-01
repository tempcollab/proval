# NT crux corpus — status

Single-domain (number_theory) build for the retrieval experiment.
Source: data/problems_full.json (243 NT problems total).

## In the corpus (194 problems, 548 cruxes) -> output/cruxes.json
Extracted + reconstruct-validated by 01. This is the retrieval corpus.

  aimo-0000 aimo-0027 aimo-0028 aimo-0030 aimo-0031 aimo-0035 aimo-0039 aimo-0040
  aimo-0045 aimo-0049 aimo-0054 aimo-0058 aimo-0062 aimo-0076 aimo-0079 aimo-0087
  aimo-0090 aimo-0093 aimo-0098 aimo-0099 aimo-0106 aimo-0134 aimo-0138 aimo-0144
  aimo-0153 aimo-0157 aimo-0171 aimo-0173 aimo-0179 aimo-0184 aimo-0208 aimo-0209
  aimo-0210 aimo-0211 aimo-0212 aimo-0215 aimo-0216 aimo-0220 aimo-0221 aimo-0224
  aimo-0226 aimo-0231 aimo-0246 aimo-0273 aimo-0274 aimo-0275 aimo-0276 aimo-0277
  aimo-0278 aimo-0283 aimo-0307 aimo-0308 aimo-0309 aimo-0310 aimo-0312 aimo-0313
  aimo-0317 aimo-0322 aimo-0324 aimo-0348 aimo-0349 aimo-0351 aimo-0355 aimo-0356
  aimo-0360 aimo-0365 aimo-0371 aimo-0374 aimo-0377 aimo-0378 aimo-0382 aimo-0390
  aimo-0414 aimo-0415 aimo-0416 aimo-0417 aimo-0418 aimo-0419 aimo-0421 aimo-0427
  aimo-0433 aimo-0436 aimo-0440 aimo-0447 aimo-0449 aimo-0474 aimo-0475 aimo-0476
  aimo-0477 aimo-0478 aimo-0501 aimo-0502 aimo-0503 aimo-0504 aimo-0505 aimo-0506
  aimo-0511 aimo-0516 aimo-0520 aimo-0528 aimo-0539 aimo-0544 aimo-0575 aimo-0576
  aimo-0577 aimo-0579 aimo-0580 aimo-0581 aimo-0605 aimo-0606 aimo-0608 aimo-0609
  aimo-0610 aimo-0611 aimo-0612 aimo-0614 aimo-0616 aimo-0617 aimo-0625 aimo-0628
  aimo-0632 aimo-0638 aimo-0643 aimo-0675 aimo-0676 aimo-0677 aimo-0678 aimo-0680
  aimo-0681 aimo-0682 aimo-0684 aimo-0686 aimo-0691 aimo-0698 aimo-0700 aimo-0701
  aimo-0724 aimo-0725 aimo-0726 aimo-0727 aimo-0728 aimo-0729 aimo-0731 aimo-0739
  aimo-0742 aimo-0747 aimo-0751 aimo-0753 aimo-0779 aimo-0780 aimo-0781 aimo-0782
  aimo-0783 aimo-0785 aimo-0810 aimo-0811 aimo-0812 aimo-0813 aimo-0814 aimo-0815
  aimo-0827 aimo-0829 aimo-0830 aimo-0842 aimo-0851 aimo-0880 aimo-0881 aimo-0882
  aimo-0889 aimo-0893 aimo-0896 aimo-0900 aimo-0927 aimo-0928 aimo-0931 aimo-0932
  aimo-0933 aimo-0938 aimo-0943 aimo-0955 aimo-0957 aimo-0982 aimo-0984 aimo-0985
  aimo-0986 aimo-0987 aimo-1011 aimo-1012 aimo-1014 aimo-1015 aimo-1016 aimo-1017
  aimo-1018 aimo-1023

## Not extracted (45 problems) — 01 hit the 1000-agent cap mid-run
Medium+hard NT problems that did not finish before the cap. Raw partials for the
194 are archived in output/nt_salvage.tar.gz. To add these later: rerun 01 on
just this list (safe under the cap) and merge.

  aimo-0026 aimo-0029 aimo-0032 aimo-0034 aimo-0056 aimo-0103 aimo-0116 aimo-0161
  aimo-0162 aimo-0213 aimo-0214 aimo-0241 aimo-0242 aimo-0279 aimo-0311 aimo-0350
  aimo-0352 aimo-0364 aimo-0391 aimo-0479 aimo-0480 aimo-0578 aimo-0582 aimo-0607
  aimo-0630 aimo-0679 aimo-0730 aimo-0733 aimo-0784 aimo-0809 aimo-0821 aimo-0841
  aimo-0847 aimo-0883 aimo-0884 aimo-0885 aimo-0886 aimo-0887 aimo-0898 aimo-0929
  aimo-0930 aimo-0936 aimo-0946 aimo-0983 aimo-1013

## Dropped by difficulty filter (4 easy NT)
Not in scope (01 keeps medium+hard only).

## Held-out test set (NOT in corpus)
32 number_theory problems in root problems.jsonl (2026): easy 7 / medium 16 / hard 9.
