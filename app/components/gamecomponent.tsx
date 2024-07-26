'use client';
import React from 'react'
import { PlayerInfo } from '../types';
import PlayerCards from './playercards';

export default function GameComponent({
    initialPlayers,
}: {
    initialPlayers: PlayerInfo[];
}) {
    return (
        <div className='w-full h-full overflow-x-hidden'>
            <PlayerCards initialPlayers={initialPlayers} />
        </div>
    )
}
