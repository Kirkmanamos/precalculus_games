# Unit 4 Trig Jeopardy

A browser-based Jeopardy-style review game for **Introduction to Trigonometry** (Pre-Calculus / Honors Pre-Calculus).

---

## How to Run

No server, build step, or installation required.

1. Open **Finder** and navigate to this folder.
2. Double-click **`Trig_Jeopardy.html`**.
3. It opens in your default browser — the game is ready to play.

> **Tip:** For the best display, use a full-screen browser window (⌘ + Ctrl + F on Mac) projected on a classroom screen.
> An internet connection is required on first load to fetch MathJax (math rendering) and the Google Font. After that it works offline if the browser has cached those resources.

---

## Game Setup

When the page loads you will see a **lobby screen**:

1. Choose the number of teams — **2 through 6**.
2. Type a name for each team (defaults to "Team 1", "Team 2", …).
3. Click **Let's Play!**

Team names can be changed mid-game by clicking any team name on the scoreboard.

---

## How to Play

| Action | How |
|---|---|
| Select a question | Click any dollar-value cell on the board |
| Daily Double | Two hidden cells trigger a Daily Double screen — place your wager, then reveal the clue |
| Pause / resume timer | **⏸** button in the question modal |
| Add time | **+15s** button adds 15 seconds (stackable) |
| Reveal the answer | **Reveal Answer** button |
| Award points | Select the answering team, then click **✓ Correct** (+points) or **✗ Incorrect** (−points) |
| Skip with no score change | **Skip / No Points** button |
| Final Jeopardy | **⭐ Final Jeopardy** button below the board — teams enter wagers before the clue is shown |
| Reset the board | **↺ Reset Board** button — clears the board and scores, keeps team names |

---

## Categories & Skills Assessed

| Category | Skills |
|---|---|
| **Evaluating Trig Functions** | Exact values from the unit circle (sin, cos, tan, csc, sec, cot); reducing large angles via coterminal reduction |
| **Angles & the Coordinate Plane** | Reference angles; converting degrees ↔ radians; coterminal angles; quadrant determination from sign conditions |
| **Inverse Trig Functions** | arcsin, arccos, arctan; compositions (e.g. arccos(sin θ)); solving simple trig equations |
| **Graphing Trig Functions** | Amplitude, period, phase shift, vertical shift from equations and graphs; matching equations in `y = a·f(b(x−c)) + d` form |
| **Real-World Modeling** | Interpreting sinusoidal functions in context (Ferris wheels, tides, temperature, buoy motion) |
| **Linear & Angular Speed** | RPM ↔ rad/s conversions; v = ωr; gear-train problems |

### Difficulty Ramp
- **$100–$300** — Direct skill practice (similar to the test)
- **$400** — Multi-step or graph-reading
- **$500** — Jedi Master level: stacked skills (double-angle identities, angle-addition with inverse trig, gear trains, modeling with direction filtering)
- **Final Jeopardy** — Periodic function properties (reasoning about f(t±nc))

---

## Files

```
unit4_trig_jeopardy/
├── Trig_Jeopardy.html          # The complete game (single self-contained file)
├── Trig_Jeopardy_Questions.json  # Human-readable question bank for review / editing
└── README.md                   # This file
```

`Trig_Jeopardy.html` is fully self-contained — all CSS, JavaScript, and question data live inside it. To edit a question, open the file in any text editor and search for the question text.

`Trig_Jeopardy_Questions.json` is a plain-text reference copy of all 30 questions plus Final Jeopardy. It is **not** loaded by the game — edit the HTML file directly to change in-game content.

---

## Technical Notes

| Dependency | How it's loaded |
|---|---|
| [MathJax 3](https://www.mathjax.org/) | CDN (`cdn.jsdelivr.net`) — renders all LaTeX math |
| [Oswald & Lato](https://fonts.google.com/) | Google Fonts CDN — display fonts |
| Canvas API | Built-in browser API — draws trig graphs |

No frameworks, no npm, no bundler.
