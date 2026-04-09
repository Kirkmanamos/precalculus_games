---
name: trashketball-builder
description: Build or revise the Unit 5 Trashketball review game in this repository from teacher slides and assessment files. Use when Codex needs to create, refresh, or align Unit 5 sections 5.1-5.3 game questions, especially from `/Users/kirkmanamos/Documents/GitHub/Precalculus_Slides` and `/Users/kirkmanamos/Desktop/Unit 5 - Trigonometry /5_assessments/assessments_latex`.
---

# Trashketball Builder

Read the source material first, then build or revise the game from the evidence instead of inventing scope.

## Source Files

Open these files before drafting questions:

- `/Users/kirkmanamos/Documents/GitHub/Precalculus_Slides/5.1-fundamental-identities.html`
- `/Users/kirkmanamos/Documents/GitHub/Precalculus_Slides/5.2-verifying-trig-identities.html`
- `/Users/kirkmanamos/Documents/GitHub/Precalculus_Slides/5.3-solving-trig-equations.html`
- `/Users/kirkmanamos/Documents/GitHub/Precalculus_Slides/5.1-5.3-review.html`
- `/Users/kirkmanamos/Desktop/Unit 5 - Trigonometry /5_assessments/assessments_latex/assessments/Quick Check - Trig Equations and Identities/Quick_Check_Trig_Eq_ID.tex`

Treat the quick check as the assessment anchor when deciding what the game should prepare students for.

## Scope Rules

Keep the game non-honors and limited to sections 5.1-5.3.

Use these five categories unless the user explicitly changes them:

- Simplifying Trig Expressions with Fundamental ID's
- Verifying Trig Identities
- Solving Trig Equations
- Solving Trig Equations with Quadratic Forms
- Solving Trig Equations with Quadratics/Square Roots/and Fundamental ID's

Use increasing point values so the harder clues are worth more.

Require exact work with standard unit-circle values. Avoid calculator-only values.

Exclude material outside this scope:

- Unit 4 topics
- 5.4+ identities
- graphing and modeling
- inverse trig challenge content
- multiple-angle equations unless the user explicitly asks for them
- calculator-only solving

## Build Workflow

1. Extract candidate skills and question types from the slide files and quick check.
2. Map each candidate to one of the five approved categories.
3. Keep the 100 and 200 clues direct, the 300 and 400 clues multi-step, and the 500 clue the most demanding in the category.
4. Prefer fresh wording over copying assessment text verbatim unless the user explicitly asks for the same problem.
5. Keep the final answers exact and student-facing.

## Output Targets

When working in this repo, prefer these files:

- `unit5_trashketball/Trashketball.html`
- `unit5_trashketball/Trashketball_Questions.json`
- `unit5_trashketball/README.md`

If adapting an existing Jeopardy-style board, rename visible UI text to Trashketball and keep the game playable as a standalone HTML file.

## Validation

Before finishing, confirm:

- every solving question ends in exact unit-circle answers or an explicit no-solution outcome
- no clue depends on honors-only techniques
- the category mix matches the quick check emphasis
- the HTML board still works with five categories
