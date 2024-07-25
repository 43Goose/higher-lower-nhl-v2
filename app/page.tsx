import PlayerCard from "./components/playercard";

export default async function Home() {
  const player = await fetch('https://api-web.nhle.com/v1/player/8482496/landing').then(res => res.json());
  const stats = {
    name: `${player.firstName.default} ${player.lastName.default}`,
    goals: player.careerTotals.regularSeason.goals,
    assists: player.careerTotals.regularSeason.assists,
    points: player.careerTotals.regularSeason.points,
    imageURL: player.headshot
  }

  return (
    <main className="min-h-screen bg-slate-900">
      <PlayerCard playerStats={stats} />
    </main>
  );
}
