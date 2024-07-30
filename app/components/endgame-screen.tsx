'use client';
import React from 'react';
import Button from './site-button';

export default function EndGameScreen({ score, highScore }: { score: number; highScore?: number }) {
    const handleClick = () => {
        window.location.reload()
    }

    return (
        <div className='absolute w-10/12 h-min py-8 px-8 top-0 bottom-0 left-0 right-0 m-auto bg-pri text-center rounded-lg md:w-1/3'>
            <h1 className='text-3xl text-red-500 font-bold mb-4'>GAME OVER</h1>
            <div className={`text-lg font-bold md:text-xl md:px-8 ${highScore ? 'flex justify-between' : null}`}>
                <h1 className='mb-4'>{'Score: ' + score}</h1>
                {highScore ? <h1 className='mb-4'>{'Highscore: ' + highScore}</h1> : null}
            </div>
            <div className='flex flex-col gap-4'>
                <Button variant='contained' onClick={handleClick} >RESTART</Button>
                <Button variant='contained' href='/' >HOME</Button>
            </div>
        </div>
    )
}
