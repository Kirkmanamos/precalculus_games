import { useMemo, useReducer } from 'react';
import { QUESTIONS } from '../data/questions';
import type { Question } from '../data/types';
import { TEAM_PALETTE } from '../design/tokens';
import type { TeamColor } from '../design/tokens';

export interface Team {
  id: string;
  name: string;
  score: number;
  colorId: TeamColor['id'];
}

export type Phase =
  | 'setup'      // configuring teams, picking names/colors
  | 'idle'       // scoreboard visible, waiting on teacher to draw
  | 'question'   // modal open, question shown
  | 'answer'     // modal open, answer revealed
  | 'awarding'   // marking which teams answered correctly
  | 'shooting';  // teacher chooses the next team to shoot

interface CoreState {
  teams: Team[];
  phase: Phase;
  currentQuestion: Question | null;
  usedQuestionIds: number[];
  round: number;
  /** Teams that still need to shoot this round. */
  remainingShotTeamIds: string[];
  /** Selected shooter for the current shot, or null until the teacher picks one. */
  currentShotTeamId: string | null;
}

interface State extends CoreState {
  /** Snapshot stack for undo. Each entry is the state *before* the change. */
  history: CoreState[];
}

type Action =
  | { type: 'CONFIGURE_TEAMS'; teams: Team[] }
  | { type: 'START_GAME' }
  | { type: 'DRAW_QUESTION' }
  | { type: 'REVEAL_ANSWER' }
  | { type: 'CLOSE_QUESTION' }
  | { type: 'SKIP_QUESTION' }
  | { type: 'AWARD_CORRECT'; teamIds: string[] }
  | { type: 'SELECT_SHOOTER'; teamId: string }
  | { type: 'AWARD_SHOT'; teamId: string; points: number }
  | { type: 'RENAME_TEAM'; teamId: string; name: string }
  | { type: 'SET_TEAM_COLOR'; teamId: string; colorId: TeamColor['id'] }
  | { type: 'UNDO' }
  | { type: 'RESET' }
  | { type: 'NEW_GAME' };

const HISTORY_LIMIT = 25;

const INITIAL_TEAMS: Team[] = [
  { id: 't1', name: 'Team 1', score: 0, colorId: 'violet' },
  { id: 't2', name: 'Team 2', score: 0, colorId: 'pink' },
];

const initialState: State = {
  teams: INITIAL_TEAMS,
  phase: 'setup',
  currentQuestion: null,
  usedQuestionIds: [],
  round: 1,
  remainingShotTeamIds: [],
  currentShotTeamId: null,
  history: [],
};

function snapshot(state: State): CoreState {
  return {
    teams: state.teams.map((t) => ({ ...t })),
    phase: state.phase,
    currentQuestion: state.currentQuestion,
    usedQuestionIds: [...state.usedQuestionIds],
    round: state.round,
    remainingShotTeamIds: [...state.remainingShotTeamIds],
    currentShotTeamId: state.currentShotTeamId,
  };
}

function withHistory(prev: State, next: CoreState): State {
  const history = [...prev.history, snapshot(prev)].slice(-HISTORY_LIMIT);
  return { ...next, history };
}

function pickRandomQuestion(usedIds: number[]): { question: Question; usedIds: number[] } {
  const remaining = QUESTIONS.filter((q) => !usedIds.includes(q.id));
  const pool = remaining.length > 0 ? remaining : QUESTIONS;
  const next = pool[Math.floor(Math.random() * pool.length)];
  const nextUsed = remaining.length > 0 ? [...usedIds, next.id] : [next.id];
  return { question: next, usedIds: nextUsed };
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'CONFIGURE_TEAMS':
      return { ...state, teams: action.teams };

    case 'START_GAME':
      return {
        ...state,
        phase: 'idle',
        round: 1,
        usedQuestionIds: [],
        currentQuestion: null,
        remainingShotTeamIds: [],
        currentShotTeamId: null,
        history: [],
      };

    case 'DRAW_QUESTION': {
      if (state.phase !== 'idle') return state;
      const { question, usedIds } = pickRandomQuestion(state.usedQuestionIds);
      return withHistory(state, {
        ...snapshot(state),
        phase: 'question',
        currentQuestion: question,
        usedQuestionIds: usedIds,
      });
    }

    case 'REVEAL_ANSWER':
      if (state.phase !== 'question') return state;
      return { ...state, phase: 'answer' };

    case 'CLOSE_QUESTION':
      if (state.phase !== 'question' && state.phase !== 'answer') return state;
      return { ...state, phase: 'awarding' };

    case 'SKIP_QUESTION':
      // Advance round without scoring; un-mark current question so it returns to the pool.
      return withHistory(state, {
        ...snapshot(state),
        phase: 'idle',
        currentQuestion: null,
        usedQuestionIds: state.usedQuestionIds.filter(
          (id) => id !== state.currentQuestion?.id,
        ),
      });

    case 'AWARD_CORRECT': {
      const correct = new Set(action.teamIds);
      const next: CoreState = {
        ...snapshot(state),
        teams: state.teams.map((t) =>
          correct.has(t.id) ? { ...t, score: t.score + 2 } : t,
        ),
        phase: 'shooting',
        remainingShotTeamIds: state.teams.map((t) => t.id),
        currentShotTeamId: null,
      };
      return withHistory(state, next);
    }

    case 'SELECT_SHOOTER':
      if (state.phase !== 'shooting') return state;
      if (!state.remainingShotTeamIds.includes(action.teamId)) return state;
      return {
        ...state,
        currentShotTeamId: action.teamId,
      };

    case 'AWARD_SHOT': {
      if (state.phase !== 'shooting') return state;
      if (state.currentShotTeamId !== action.teamId) return state;

      const next: CoreState = {
        ...snapshot(state),
        teams: state.teams.map((t) =>
          t.id === action.teamId ? { ...t, score: t.score + action.points } : t,
        ),
        remainingShotTeamIds: state.remainingShotTeamIds.filter(
          (teamId) => teamId !== action.teamId,
        ),
        currentShotTeamId: null,
      };
      if (next.remainingShotTeamIds.length === 0) {
        next.phase = 'idle';
        next.round = state.round + 1;
        next.currentQuestion = null;
      }
      return withHistory(state, next);
    }

    case 'RENAME_TEAM':
      return {
        ...state,
        teams: state.teams.map((t) =>
          t.id === action.teamId ? { ...t, name: action.name } : t,
        ),
      };

    case 'SET_TEAM_COLOR':
      return {
        ...state,
        teams: state.teams.map((t) =>
          t.id === action.teamId ? { ...t, colorId: action.colorId } : t,
        ),
      };

    case 'UNDO': {
      const prev = state.history[state.history.length - 1];
      if (!prev) return state;
      return { ...prev, history: state.history.slice(0, -1) };
    }

    case 'RESET':
      return {
        ...state,
        teams: state.teams.map((t) => ({ ...t, score: 0 })),
        phase: 'idle',
        currentQuestion: null,
        usedQuestionIds: [],
        round: 1,
        remainingShotTeamIds: [],
        currentShotTeamId: null,
        history: [],
      };

    case 'NEW_GAME':
      return initialState;

    default:
      return state;
  }
}

export interface GameApi {
  state: State;
  configureTeams: (teams: Team[]) => void;
  startGame: () => void;
  drawQuestion: () => void;
  revealAnswer: () => void;
  closeQuestion: () => void;
  skipQuestion: () => void;
  awardCorrect: (teamIds: string[]) => void;
  selectShotTeam: (teamId: string) => void;
  awardShot: (teamId: string, points: number) => void;
  renameTeam: (teamId: string, name: string) => void;
  setTeamColor: (teamId: string, colorId: TeamColor['id']) => void;
  undo: () => void;
  canUndo: boolean;
  reset: () => void;
  newGame: () => void;
}

export function useGameState(): GameApi {
  const [state, dispatch] = useReducer(reducer, initialState);

  const api = useMemo<Omit<GameApi, 'state' | 'canUndo'>>(
    () => ({
      configureTeams: (teams) => dispatch({ type: 'CONFIGURE_TEAMS', teams }),
      startGame: () => dispatch({ type: 'START_GAME' }),
      drawQuestion: () => dispatch({ type: 'DRAW_QUESTION' }),
      revealAnswer: () => dispatch({ type: 'REVEAL_ANSWER' }),
      closeQuestion: () => dispatch({ type: 'CLOSE_QUESTION' }),
      skipQuestion: () => dispatch({ type: 'SKIP_QUESTION' }),
      awardCorrect: (teamIds) => dispatch({ type: 'AWARD_CORRECT', teamIds }),
      selectShotTeam: (teamId) => dispatch({ type: 'SELECT_SHOOTER', teamId }),
      awardShot: (teamId, points) => dispatch({ type: 'AWARD_SHOT', teamId, points }),
      renameTeam: (teamId, name) => dispatch({ type: 'RENAME_TEAM', teamId, name }),
      setTeamColor: (teamId, colorId) =>
        dispatch({ type: 'SET_TEAM_COLOR', teamId, colorId }),
      undo: () => dispatch({ type: 'UNDO' }),
      reset: () => dispatch({ type: 'RESET' }),
      newGame: () => dispatch({ type: 'NEW_GAME' }),
    }),
    [],
  );

  const canUndo = state.history.length > 0;

  return { state, canUndo, ...api };
}

/** Helper to spin up a fresh team object with a unique id. */
export function makeTeam(name: string, colorId: TeamColor['id']): Team {
  return {
    id: `t_${Math.random().toString(36).slice(2, 9)}`,
    name,
    score: 0,
    colorId,
  };
}

export function getTeamColor(team: Team): TeamColor {
  return (
    TEAM_PALETTE.find((c) => c.id === team.colorId) ?? TEAM_PALETTE[0]
  );
}

export function getCurrentShotTeam(state: State): Team | null {
  if (state.phase !== 'shooting') return null;
  return state.teams.find((team) => team.id === state.currentShotTeamId) ?? null;
}

export function getRemainingShotTeams(state: State): Team[] {
  if (state.phase !== 'shooting') return [];
  return state.remainingShotTeamIds
    .map((teamId) => state.teams.find((team) => team.id === teamId) ?? null)
    .filter((team): team is Team => team !== null);
}
