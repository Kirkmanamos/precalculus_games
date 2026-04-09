# Unit 5 Grudgeball

A browser-based Grudgeball review game for **Unit 5 sections 5.1-5.3** in non-honors precalculus.

## How to Run

1. Open this folder.
2. Double-click `Grudgeball.html`.
3. The game opens in your browser with no build step or server.

An internet connection is needed on first load for MathJax and fonts.

## Standard Variation

This version follows the standard Grudgeball flow:

- each team starts with 10 Xs
- a correct answer removes 2 Xs from opponents
- a made bonus shot steals 1 more X and adds it to the shooting team
- wrong answers can be diverted to another team
- the team with the most Xs after the board is exhausted wins

The question set stays aligned to the same non-honors Unit 5 quick check targets as Trashketball, using exact unit-circle values.

## Files

```text
unit5_grudgeball/
├── Grudgeball.html
├── Grudgeball_Questions.json
└── README.md
```

`Grudgeball.html` is the playable single-file game.

`Grudgeball_Questions.json` is the editable reference question bank. The HTML file is still the source of truth for live gameplay.

## Source Alignment

The question set is aligned to:

- `/Users/kirkmanamos/Documents/GitHub/Precalculus_Slides/5.1-fundamental-identities.html`
- `/Users/kirkmanamos/Documents/GitHub/Precalculus_Slides/5.2-verifying-trig-identities.html`
- `/Users/kirkmanamos/Documents/GitHub/Precalculus_Slides/5.3-solving-trig-equations.html`
- `/Users/kirkmanamos/Documents/GitHub/Precalculus_Slides/5.1-5.3-review.html`
- `/Users/kirkmanamos/Desktop/Unit 5 - Trigonometry /5_assessments/assessments_latex/assessments/Quick Check - Trig Equations and Identities/Quick_Check_Trig_Eq_ID.tex`
