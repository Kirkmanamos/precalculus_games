import type { Team } from '../state/useGameState';

export interface RankedTeam {
  team: Team;
  rank: number;
  isLeader: boolean;
}

/**
 * Sort teams high → low by score and assign 1-based ranks with ties handled
 * (two teams sharing first place both rank 1).
 */
export function rankTeams(teams: Team[]): RankedTeam[] {
  const sorted = [...teams].sort((a, b) => b.score - a.score);
  const result: RankedTeam[] = [];
  let lastScore = Number.POSITIVE_INFINITY;
  let lastRank = 0;

  sorted.forEach((team, index) => {
    const rank = team.score === lastScore ? lastRank : index + 1;
    lastScore = team.score;
    lastRank = rank;
    result.push({ team, rank, isLeader: rank === 1 });
  });

  return result;
}

export function ordinal(rank: number): string {
  const lastTwo = rank % 100;
  if (lastTwo >= 11 && lastTwo <= 13) return `${rank}th`;
  switch (rank % 10) {
    case 1:
      return `${rank}st`;
    case 2:
      return `${rank}nd`;
    case 3:
      return `${rank}rd`;
    default:
      return `${rank}th`;
  }
}
