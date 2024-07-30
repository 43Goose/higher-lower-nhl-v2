'use client';
import React, { useEffect, useState } from 'react'

export default function VsBadge({
    roundState
}: {
    roundState: 'def' | 'win' | 'lose';
}) {
    const [circleColor, setCircleColor] = useState('bg-transparent');

    useEffect(() => {
        if (roundState === 'win') setCircleColor('bg-green-500');
        else if (roundState === 'lose') setCircleColor('bg-red-500');
    }, [roundState]);


    return (
        <div className='absolute w-20 h-20 top-0 bottom-0 left-0 right-0 m-auto rounded-full overflow-hidden'>
            <div className='w-full h-full bg-white'></div>
            <ColorCircle
                color={circleColor}
                roundState={roundState}
            />
        </div>
    )
}

function ColorCircle({ color, roundState }: { color: string; roundState: 'def' | 'win' | 'lose'; }) {
    return (
        <div className={`${color} absolute transition-[top] duration-300 w-full h-full ${roundState === 'def' ? 'top-full' : 'top-0'}`}></div>
    )
}
