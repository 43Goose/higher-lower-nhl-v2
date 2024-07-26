import React from 'react'
import { PlayerInfo } from '../types'
import Image from 'next/image'
import { ThemeProvider } from '@mui/material';
import { mainTheme } from '../themes';
import Button from './site-button';

type Props = {
    player: PlayerInfo;
    gameMode: string;
}

type ConditionalProps =
    | {
        type: 'known' | 'next';
        knownPlayer?: never;
    }
    | {
        type: 'unknown';
        knownPlayer: PlayerInfo;
    };

export default function PlayerCard(props: Props & ConditionalProps) {
    return (
        <div className='relative h-full w-1/3'>
            <div className='absolute top-0 h-full overflow-hidden'>
                <Image loader={() => props.player.imageURL} src={props.player.imageURL} width={0} height={0} alt={props.player.name} unoptimized className='h-full w-auto bg-white object-cover' />
                <div className='absolute top-0 h-full w-full bg-black bg-opacity-50'></div>
            </div>
            {props.type === 'known' ? <KnownUI player={props.player} gameMode={props.gameMode} /> :
                props.type === 'unknown' ? <UnknownUI player={props.player} knownPlayer={props.knownPlayer} gameMode={props.gameMode} /> :
                    <NextUI player={props.player} />}
        </div>
    )
}

function KnownUI({ player, gameMode }: { player: PlayerInfo; gameMode: string; }) {
    return (
        <div className='absolute top-0 h-full w-full flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold'>{player.name}</h1>
            <h2 className='text-lg font-bold'>has</h2>
            <h1 className='text-5xl font-bold text-sec'>{player[gameMode]}</h1>
            <h2 className='text-lg font-bold'>{'career ' + gameMode}</h2>
        </div>
    )
}

function UnknownUI({ player, knownPlayer, gameMode }: { player: PlayerInfo; knownPlayer: PlayerInfo; gameMode: string; }) {
    return (
        <ThemeProvider theme={mainTheme}>
            <div className='absolute top-0 h-full w-full flex flex-col justify-center items-center'>
                <h1 className='text-3xl font-bold'>{player.name}</h1>
                <h2 className='text-lg font-bold'>has</h2>
                <div className='w-80 my-2'>
                    <Button variant='outlined'>HIGHER</Button>
                </div>
                <div className='w-80 my-2'>
                    <Button variant='outlined'>LOWER</Button>
                </div>
                <h2 className='text-lg font-bold'>{'career ' + gameMode + ' than ' + knownPlayer.name}</h2>
            </div>
        </ThemeProvider>
    )
}

function NextUI({ player }: { player: PlayerInfo; }) {
    return (
        <div className='absolute top-0 h-full w-full flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold'>{player.name}</h1>
            <h2 className='text-lg font-bold'>has</h2>
        </div>
    )
}