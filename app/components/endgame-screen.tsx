'use client';
import React from 'react';
import Button from './site-button';

export default function EndGameScreen({ score }: { score: number }) {
    const handleClick = () => {
        window.location.reload()
    }

    return (
        <div className='absolute w-1/3 h-min py-8 px-8 top-0 bottom-0 left-0 right-0 m-auto bg-pri text-center rounded-lg'>
            <h1 className='text-3xl text-red-500 font-bold mb-4'>GAME OVER</h1>
            <Button variant='contained' onClick={handleClick} >RESTART</Button>
        </div>
    )
}
