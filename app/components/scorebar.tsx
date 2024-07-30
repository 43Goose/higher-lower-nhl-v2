import React from 'react'

export default function Scorebar({ score, highscore }: { score: number; highscore?: number | undefined }) {
    return (
        <div className='absolute top-0 w-full flex justify-between px-8 py-4 md:bottom-0'>
            <h1 className='text-xl font-bold'>{'Score: ' + score}</h1>
            <h1 className='text-xl font-bold'>{highscore !== undefined ? 'Highscore: ' + highscore : ''}</h1>
        </div>
    )
}
