This repo is for solving Olympiad problems with AI. We have a set of problems in curated_problem_set_clean.jsonl and a knowledge base at knowledge_base.md. 

The goal is to produce one file for each problem called results/problem_id.md. This is the scratch pad for the problem: discussions about the problem, what we tried what worked and what didn't work. If you find a solution / proof, write it here and save in run state so we dont attempt it again.

Your approach is explore -> outline proof/solution -> (optional) review outline -> fill in the details -> review.

1. Each round pick 1-3 problems. For each problem, using knowledge base, explore what has been done, what worked, what progress has been made, 
if we made critical progress, what was tried, what was not and what did not so far. 
2. Then use a planner to outline a new strategy for a proof and if review needed review the outline
3. use proof builder to fill in the gaps
4. use math reviewer to adversarially judge the solution. score on progress, correctness, etc

then repeat. our goal is to solve as many problems as we can.
