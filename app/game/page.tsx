import React from 'react'
import { PlayerInfo } from '../types';
import { playerIds } from '../data/playerids';
import GameComponent from '../components/gamecomponent';
import { getPlayer } from '../data/apifunctions';
import { checkHighScoreCookie, getHighScoreCookie } from '../data/cookies';
export const dynamic = 'force-dynamic';

export default async function Game() {
    const highScore = await checkHighScoreCookie() ? await getHighScoreCookie() : undefined;
    const genInitialPlayers = async (initArray: PlayerInfo[], idList: number[]): Promise<PlayerInfo[]> => {
        if (initArray.length === 3) return initArray;

        const randId = idList[Math.floor(Math.random() * idList.length)];
        const playerStats = await getPlayer(randId)
        return await genInitialPlayers([...initArray, playerStats], idList.filter(id => id !== randId));
    }

    const initialPlayers = await genInitialPlayers([], playerIds);

    return (
        <main className='w-screen h-screen'>
            <GameComponent initialPlayers={initialPlayers} userHighScore={highScore} />
        </main>
    )
}
