import React from 'react'
import { PlayerInfo } from '../types';
import { playerIds } from '../data/playerids';
import PlayerCards from '../components/playercards';
import GameComponent from '../components/gamecomponent';

export default async function Game() {
    const genInitialPlayers = async (initArray: PlayerInfo[], idList: number[]): Promise<PlayerInfo[]> => {
        if (initArray.length === 3) return initArray;

        const randId = Math.floor(Math.random() * idList.length);
        const player = await fetch(`https://api-web.nhle.com/v1/player/${idList[randId]}/landing`).then(res => res.json());
        const goals = Object.keys(player.careerTotals.regularSeason).includes('goals') ? player.careerTotals.regularSeason.goals : 0;
        const assists = Object.keys(player.careerTotals.regularSeason).includes('assists') ? player.careerTotals.regularSeason.assists : 0;
        const points = Object.keys(player.careerTotals.regularSeason).includes('points') ? player.careerTotals.regularSeason.points : 0;
        const stats: PlayerInfo = {
            id: player.playerId,
            name: `${player.firstName.default} ${player.lastName.default}`,
            goals: goals,
            assists: points,
            points: assists,
            imageURL: player.heroImage
        }
        return await genInitialPlayers([...initArray, stats], idList.filter(id => id !== randId));
    }

    const initialPlayers = await genInitialPlayers([], playerIds);

    return (
        <main className='w-screen h-screen'>
            <GameComponent initialPlayers={initialPlayers} />
        </main>
    )
}
