import type { CSSProperties } from 'react';
import type { Team } from '../state/useGameState';
import type { Theme } from '../lib/useTheme';
import { rankTeams } from '../lib/ranking';
import { TeamCard } from './TeamCard';

interface Props {
  teams: Team[];
  theme: Theme;
  onRename: (id: string, name: string) => void;
}

export function Scoreboard({ teams, theme, onRename }: Props) {
  const ranked = rankTeams(teams);
  const leaderScore = Math.max(...teams.map((team) => team.score), 0);
  const hasUniqueLeader = teams.filter((team) => team.score === leaderScore).length === 1;
  const desktopColumns = getDesktopColumnCount(teams.length);

  return (
    <div
      className="grid w-full grid-cols-1 justify-items-center gap-4 md:justify-items-stretch md:gap-3 xl:gap-4 md:[grid-template-columns:repeat(var(--scoreboard-columns),minmax(0,1fr))]"
      style={{ '--scoreboard-columns': desktopColumns } as CSSProperties}
    >
      {ranked.map(({ team, rank, isLeader }) => (
        <TeamCard
          key={team.id}
          team={team}
          rank={rank}
          isLeader={hasUniqueLeader && isLeader}
          theme={theme}
          onRename={(name) => onRename(team.id, name)}
        />
      ))}
    </div>
  );
}

function getDesktopColumnCount(teamCount: number): number {
  if (teamCount <= 1) return 1;
  if (teamCount <= 4) return teamCount;
  return 3;
}
