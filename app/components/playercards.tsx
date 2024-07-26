'use client';
import React, { useState } from 'react'
import { PlayerInfo } from '../types'
import PlayerCard from './playercard'
import { useSearchParams } from 'next/navigation';

export default function PlayerCards({
    initialPlayers
}: {
    initialPlayers: PlayerInfo[];
}) {
    const [players, setPlayers] = useState(initialPlayers);
    const params = useSearchParams();
    const gameMode = params.has('gameMode') ? params.get('gameMode') as string : 'points';

    return (
        <div className='h-full w-[150%] flex'>
            <PlayerCard player={players[0]} type='known' gameMode={gameMode} />
            <PlayerCard player={players[1]} type='unknown' knownPlayer={players[0]} gameMode={gameMode} />
            <PlayerCard player={players[2]} type='next' gameMode={gameMode} />
        </div>
    )
}
