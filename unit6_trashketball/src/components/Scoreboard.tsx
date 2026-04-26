import type { Team } from '../state/useGameState';
import { rankTeams } from '../lib/ranking';
import { TeamCard } from './TeamCard';

interface Props {
  teams: Team[];
  onRename: (id: string, name: string) => void;
}

export function Scoreboard({ teams, onRename }: Props) {
  const ranked = rankTeams(teams);

  return (
    <div className="flex flex-wrap items-end justify-center gap-6 sm:gap-8">
      {ranked.map(({ team, rank, isLeader }) => (
        <TeamCard
          key={team.id}
          team={team}
          rank={rank}
          isLeader={isLeader}
          onRename={(name) => onRename(team.id, name)}
        />
      ))}
    </div>
  );
}
