# Unit 6 Trashketball (6.1–6.3)

Classroom review game for **Pre-Calculus Unit 6 (sections 6.1–6.3)** — sequences and series only, with no Binomial Theorem content.

Built with **Vite + React + TypeScript + Tailwind CSS**. Designed using the *Playful Geometric* design system: clean grid, sticker cards, candy buttons, hard shadows, confetti decoration.

---

## Quick start

Requires **Node 18+** and **npm**.

```bash
cd unit6_trashketball_6_1_6_3
npm install
npm run dev          # http://localhost:5173
npm run build        # outputs to ./dist
npm run preview      # serves ./dist locally
npm run typecheck    # strict TypeScript pass
```

`dist/` is committed so GitHub Pages can serve it without a build step. After every meaningful change, run `npm run build` and commit the updated `dist/` along with the source changes.

---

## Game flow

Each round is three phases:

1. **Question** — teacher clicks **Draw Question**, full-screen modal opens with very large math typesetting (KaTeX).
2. **Answer** — **Reveal Answer** flips in the solution and a one-line "why" hint.
3. **Scoring** — back on the scoreboard:
   - **Award Correct (+2)** — multi-select which teams answered correctly.
   - **Shot Phase** — each team shoots in turn; teacher taps **+1 / +2 / +3 / Miss**.

The scoreboard is always the focal point. Cards auto-sort by score, the leader gets a crown sticker, and a number-line "Score Map" shows the gaps between teams.

Undo rolls back the last scoring action. Reset zeroes the scores; New Game returns to setup.

---

## Architecture

```
unit6_trashketball_6_1_6_3/
├── index.html              # Vite entry
├── package.json
├── vite.config.ts          # base: './' for portable dist
├── tailwind.config.js      # design tokens (colors, shadows, animations)
├── tsconfig.json
├── src/
│   ├── main.tsx            # React mount + global styles + katex.css
│   ├── App.tsx             # phase router
│   ├── index.css           # Tailwind layers + reduced-motion
│   ├── design/
│   │   └── tokens.ts       # team palette, scoring constants
│   ├── data/
│   │   ├── types.ts        # Question / Difficulty
│   │   └── questions.ts    # 49-question bank for 6.1–6.3
│   ├── state/
│   │   └── useGameState.ts # reducer + snapshot-stack undo
│   ├── lib/
│   │   └── ranking.ts      # rank teams with tie handling, ordinals
│   └── components/
│       ├── ui/
│       │   ├── Button.tsx        # candy button (variants × sizes)
│       │   ├── Decorations.tsx   # confetti shapes
│       │   └── Math.tsx          # KaTeX text+math renderer ($...$)
│       ├── TeamSetup.tsx
│       ├── Scoreboard.tsx
│       ├── TeamCard.tsx
│       ├── ScoreVisualization.tsx
│       ├── QuestionModal.tsx
│       ├── AwardPanel.tsx
│       ├── ShotControls.tsx
│       └── ControlsPanel.tsx
└── dist/                    # built static site (committed)
```

**Centralized design tokens** live in two places that stay in sync:

- `tailwind.config.js` → CSS-class colors, shadows, animations
- `src/design/tokens.ts` → JS-side constants (team palette, scoring values)

Edit colors there, not in components.

---

## Adding new questions

Open `src/data/questions.ts`. Each entry is:

```ts
{
  id: 26,
  category: 'Sequences & Recursion',
  difficulty: 'medium',          // 'easy' | 'medium' | 'hard'
  question: 'Simplify $\\dfrac{(2n)!}{(2n-2)!}$.',
  answer: '$2n(2n - 1)$',
  hint: 'Optional short explanation; also supports $...$ math.'
}
```

Inline math uses `$...$`, display math `$$...$$`. Plain prose passes through unchanged. IDs must be unique. After editing, run `npm run build`.

---

## Deploying to GitHub Pages

The repo's hub `index.html` (one folder up) links to `unit6_trashketball_6_1_6_3/dist/index.html`. With `base: './'` in `vite.config.ts`, the built bundle uses relative asset paths, so the same `dist/` works whether it's served from:

- `https://<user>.github.io/precalculus_games/unit6_trashketball_6_1_6_3/dist/`
- a subfolder, a CDN, or `npm run preview` locally

**Deploy steps:**

```bash
npm run build                # rebuild dist/
git add dist/ src/ ...       # commit source + built output
git commit -m "Update Trashketball"
git push                     # GitHub Pages auto-publishes
```

---

## Design system reference

| Token       | Value                       | Usage                                   |
| ----------- | --------------------------- | --------------------------------------- |
| canvas      | `#FFFDF5`                   | page background                         |
| ink         | `#1E293B`                   | text, borders, hard shadows             |
| accent      | `#8B5CF6` (violet)          | primary buttons, leader emphasis        |
| secondary   | `#F472B6` (pink)            | hard-difficulty tag, +3 shot            |
| tertiary    | `#FBBF24` (amber)           | medium-difficulty tag, +2 shot, badges  |
| quaternary  | `#34D399` (emerald)         | answer card, easy-difficulty tag, +1    |
| shadow-sticker | `4px 4px 0 0 #1E293B`    | default hard shadow (no blur)           |

Buttons: pill-shaped, 2px border, hard shadow, hover lifts up-and-left, press snaps down-and-right. Cards: rounded-3xl, 2px border, `shadow-sticker-lg`. Animations honor `prefers-reduced-motion`.

---

## Source alignment

Question content drawn directly from:

- `Desktop/Unit 6 - Seq & Series/assessments/Study Guide - Unit 6 Test (6.1-6.3)/Unit6_Test_Study_Guide_6_1_6_3.tex`
- `Desktop/Unit 6 - Seq & Series/assessments/Unit 6 Test - Sequences, Series, and Probability/Unit6_Test_Sequences_Series_Probability.tex`

Probability and Binomial Theorem questions from the broader Unit 6 materials are intentionally excluded in this variant.
