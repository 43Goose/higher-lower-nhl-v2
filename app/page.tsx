import PlayerCard from "./components/playercard";
import PlayerGenerator from "./components/playergenerator";
import { playerIds } from "./data/playerids";
import { PlayerInfo } from "./types";

export default async function Home() {
  const test = async (id: number): Promise<PlayerInfo> => {
    'use server';
    const player = await fetch(`https://api-web.nhle.com/v1/player/${id}/landing`).then(res => res.json());
    const goals = player.careerTotals.regularSeason.goals ? player.careerTotals.regularSeason.goals : 0;
    const assists = player.careerTotals.regularSeason.assists ? player.careerTotals.regularSeason.assists : 0;
    const points = player.careerTotals.regularSeason.points ? player.careerTotals.regularSeason.points : 0;
    const stats: PlayerInfo = {
      id: player.playerId,
      name: `${player.firstName.default} ${player.lastName.default}`,
      goals: goals,
      assists: points,
      points: assists,
      imageURL: player.headshot
    }

    return stats;
  }

  const initialPlayer = await test(playerIds[Math.floor(Math.random() * playerIds.length)]);

  return (
    <main className="min-h-screen bg-slate-900">
      <PlayerGenerator getPlayerFn={test} initialPlayer={initialPlayer} />
    </main>
  );
}
