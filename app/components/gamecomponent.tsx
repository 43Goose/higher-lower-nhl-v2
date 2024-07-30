'use client';
import React, { Suspense, useState } from 'react'
import { PlayerInfo } from '../types';
import PlayerCards from './playercards';
import VsBadge from './vsBadge';
import { waitForSeconds } from '../game/utils';
import EndGameScreen from './endgame-screen';

export default function GameComponent({
    initialPlayers,
}: {
    initialPlayers: PlayerInfo[];
}) {
    const [score, setScore] = useState(0);
    const [roundState, setRoundState] = useState<'def' | 'win' | 'lose'>('def');
    const [gameOver, setGameOver] = useState(false);

    const handleRoundResult = async (res: boolean) => {
        if (res) {
            setRoundState('win');
            await waitForSeconds(1000);
            setRoundState('def');
        } else {
            setRoundState('lose');
            await waitForSeconds(600);
            setGameOver(true);
        }
    }

    return (
        <div className='relative w-full h-full overflow-hidden'>
            <Suspense>
                <PlayerCards initialPlayers={initialPlayers} roundEndFn={handleRoundResult} />
            </Suspense>
            <VsBadge roundState={roundState} />
            <div className={`transition ${gameOver ? 'opacity-100' : 'opacity-0'}`}>
                {gameOver && <EndGameScreen score={score} />}
            </div>
        </div>
    )
}
