'use client';
import React, { useState } from 'react'
import { playerIds } from '../data/playerids';
import PlayerCard from './playercard';
import { PlayerInfo } from '../types';
import { Button, ThemeProvider } from '@mui/material';
import { mainTheme } from '../themes';

export default function PlayerGenerator({ getPlayerFn, initialPlayer }: { getPlayerFn: Function; initialPlayer: PlayerInfo }) {
    const [playerList, setPlayerList] = useState([...playerIds]);
    const [currentPlayer, setCurrentPlayer] = useState<PlayerInfo>(initialPlayer);

    const getNewPlayer = async () => {
        const newList = playerList.filter(i => i !== currentPlayer.id);
        setCurrentPlayer(await getPlayerFn(newList[Math.floor(Math.random() * newList.length)]));
        setPlayerList(newList);
    }

    return (
        <ThemeProvider theme={mainTheme}>
            <div className='min-h-96 flex flex-col justify-center items-center'>
                <PlayerCard playerStats={currentPlayer} />
                <Button
                    variant='outlined'
                    color='secondary'
                    size='large'
                    onClick={getNewPlayer}
                    className='mt-8'
                >New Player</Button>
            </div>
        </ThemeProvider>
    )
}
