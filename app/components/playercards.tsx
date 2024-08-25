'use client';
import React, { useState } from 'react'
import { PlayerInfo } from '../types'
import PlayerCard from './playercard'
import { useSearchParams } from 'next/navigation';
import { waitForSeconds } from '../game/utils';
import { getPlayer } from '../data/apifunctions';
import { playerIds } from '../data/playerids';

export default function PlayerCards({
    initialPlayers,
    roundEndFn
}: {
    initialPlayers: PlayerInfo[];
    roundEndFn: Function;
}) {
    const [players, setPlayers] = useState(initialPlayers);
    const [playerList, setPlayerList] = useState(playerIds)
    const [animate, setAnimate] = useState(false);
    const [countup, setCountup] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const params = useSearchParams();
    const gameMode = params.has('gameMode') ? params.get('gameMode') as string : 'points';

    const handleRoundEnd = async () => {
        // Runs player card animations and triggers the games round end function
        if (gameOver) {
            roundEndFn(false);
            return;
        }
        roundEndFn(true);
        setAnimate(true);

        await waitForSeconds(300); // Wait for animations to finish

        const newPlayerList = playerList.filter(p => p !== players[0].id);
        const newPlayer = await getPlayer(newPlayerList[Math.floor(Math.random() * newPlayerList.length)]);

        setPlayerList(newPlayerList);
        setAnimate(false);
        setCountup(false);
        setPlayers([...players.slice(1), newPlayer]);
    }

    const handleInput = (input: 'higher' | 'lower') => {
        // Runs countup animation and checks if the users input was correct
        setCountup(true);
        switch (input) {
            case 'higher':
                if (players[0][gameMode] > players[1][gameMode]) {
                    setGameOver(true)
                }
                break;

            case 'lower':
                if (players[0][gameMode] < players[1][gameMode]) {
                    setGameOver(true);
                }
                break;

            default:
                break;
        }
    }

    return (
        <div className={`h-[150%] w-full flex flex-col md:w-[150%] md:h-full md:flex-row ${animate ? '-translate-y-1/3 transition-transform duration-300 delay-300 md:-translate-x-1/3 md:translate-y-0' : ''}`}>
            <PlayerCard player={players[0]} type='known' gameMode={gameMode} />
            <PlayerCard player={players[1]} type='unknown' knownPlayer={players[0]} countup={countup} countEndFn={handleRoundEnd} gameMode={gameMode} inputFn={handleInput} />
            <PlayerCard player={players[2]} type='next' gameMode={gameMode} />
        </div>
    )
}
