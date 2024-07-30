'use client';
import React, { Suspense, useState } from 'react'
import { PlayerInfo } from '../types';
import PlayerCards from './playercards';
import VsBadge from './vsBadge';
import { waitForSeconds } from '../game/utils';
import EndGameScreen from './endgame-screen';
import Scorebar from './scorebar';
import { setHighScoreCookie } from '../data/cookies';

export default function GameComponent({
    initialPlayers,
    userHighScore,
}: {
    initialPlayers: PlayerInfo[];
    userHighScore?: number;
}) {
    const [score, setScore] = useState(0);
    const [roundState, setRoundState] = useState<'def' | 'win' | 'lose'>('def');
    const [gameOver, setGameOver] = useState(false);
    const [highScore, setHighScore] = useState(userHighScore !== undefined ? userHighScore : undefined);

    const handleRoundResult = async (res: boolean) => {
        if (res) {
            setScore(score + 1);
            if (highScore !== undefined && (score + 1) > highScore) {
                setHighScore(score + 1);
            }

            setRoundState('win');
            await waitForSeconds(1000);
            setRoundState('def');
        } else {
            if (highScore !== undefined && score === highScore) {
                await setHighScoreCookie(highScore);
            }

            setRoundState('lose');
            await waitForSeconds(1000);
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
                {gameOver && <EndGameScreen score={score} highScore={highScore} />}
            </div>
            <Scorebar score={score} highscore={highScore} />
        </div>
    )
}
