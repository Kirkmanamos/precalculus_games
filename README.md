# Precalculus Games

🎮 **[Play the Games Online Here!](https://kirkmanamos.github.io/precalculus_games/)**

Browser-based review games for Pre-Calculus / Honors Pre-Calculus.
Each game is a self-contained folder — play online using the link above, or open the `.html` file directly in any browser with no installation needed.

---

## Games

| Folder | Game | Unit | Status |
|---|---|---|---|
| [`unit5_grudgeball/`](unit5_grudgeball/) | Grudgeball — Identities & Trig Equations | Unit 5 | New |
| [`unit5_trashketball/`](unit5_trashketball/) | Trashketball — Identities & Trig Equations | Unit 5 | New |
| [`unit6_trashketball/`](unit6_trashketball/) | Trashketball — Sequences, Series, & Binomial Theorem (6.1-6.4) | Unit 6 | New |
| [`unit6_trashketball_6_1_6_3/`](unit6_trashketball_6_1_6_3/) | Trashketball — Sequences & Series Only (6.1-6.3) | Unit 6 | New |
| [`unit4_trig_jeopardy/`](unit4_trig_jeopardy/) | Jeopardy — Introduction to Trigonometry | Unit 4 | Live |
| [`unit_circle/`](unit_circle/) | Unit Circle Quiz | Unit 4 | Live |

---

## Quick Start (Offline Play)

1. Clone or download this repository.
2. Open the folder for the game you want.
3. Double-click the `.html` file — it opens in your browser and is ready to play.

For the Vite-based Unit 6 Trashketball variants, use either `unit6_trashketball/dist/index.html` or `unit6_trashketball_6_1_6_3/dist/index.html` for offline play, or run `npm install` and `npm run dev` from the specific folder.

> An internet connection is needed on first load for MathJax (math rendering) and fonts.

---

## Unit Circle Quiz

Practice all 16 standard unit circle points across four question types:

- **Degree mode** — given the point, enter the degree measure
- **Radian mode** — given the point, enter the radian measure
- **Coordinates mode** — given the point, enter the (x, y) coordinates
- **Click-the-point** — given a degree or radian, click the correct point on the circle

Run all four types together (64 questions) or focus on one type at a time (16 questions).
Answers accept common alternate forms — `π` or `pi`, `√` or `sqrt()`, `°` optional.

## Unit 5 Trashketball

A five-category Trashketball board for sections 5.1-5.3.
It stays in non-honors scope and keeps solving questions on exact unit-circle values.

## Unit 5 Grudgeball

A Grudgeball variant of the same Unit 5 board.
It uses standard X-based Grudgeball scoring while keeping nearly the same question set as Trashketball.

## Unit 6 Trashketball (6.1–6.4)

A React-based Trashketball board for sections 6.1-6.4.
It covers sequences, series, sigma notation, and introductory Binomial Theorem work, with the built `dist/` committed for GitHub Pages and offline play.

## Unit 6 Trashketball (6.1–6.3)

A sibling React-based Trashketball board for the sequences-and-series-only version of Unit 6.
It keeps the same gameplay flow and design system while limiting the question bank to sections 6.1-6.3.

## Unit 4 Trig Jeopardy

A Jeopardy-style game covering the Introduction to Trigonometry unit.
Supports 1–3 teams. Questions are stored in a separate JSON file for easy editing.
