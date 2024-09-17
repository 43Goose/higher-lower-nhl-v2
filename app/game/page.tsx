import React, { Suspense } from 'react'
import { PlayerInfo } from '../types';
import { playerIds } from '../data/playerids';
import GameComponent from '../components/gamecomponent';
import { getPlayer } from '../data/apifunctions';
import { checkHighScoreCookie, getHighScoreCookie } from '../data/cookies';
import GameLoading from '../components/fallbacks/game-loading';
export const dynamic = 'force-dynamic';

export default async function Game() {


    return (
        <main className='w-screen h-dvh'>
            <Suspense fallback={<GameLoading />}>
                <GameShell />
            </Suspense>
        </main>
    )
}

async function GameShell() {
    const highScore = await checkHighScoreCookie() ? await getHighScoreCookie() : undefined;
    const genInitialPlayers = async (initArray: PlayerInfo[], idList: number[]): Promise<PlayerInfo[]> => {
        if (initArray.length === 3) return initArray;

        const randId = idList[Math.floor(Math.random() * idList.length)];
        const playerStats = await getPlayer(randId)
        return await genInitialPlayers([...initArray, playerStats], idList.filter(id => id !== randId));
    }

    return (
        <GameComponent initialPlayers={await genInitialPlayers([], playerIds)} userHighScore={highScore} />
    )
}
