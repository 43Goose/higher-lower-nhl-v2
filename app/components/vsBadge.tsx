'use client';
import { motion } from 'framer-motion';
import { fugaz } from '../fonts';
import React, { useEffect, useState } from 'react'

export default function VsBadge({
    roundState
}: {
    roundState: 'def' | 'win' | 'lose';
}) {
    const [circleColor, setCircleColor] = useState('bg-transparent');

    useEffect(() => {
        if (roundState === 'win') setCircleColor('bg-cyan-500');
        else if (roundState === 'lose') setCircleColor('bg-red-500');
    }, [roundState]);

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (delay: number) => {
            return {
                pathLength: 1,
                opacity: 1,
                transition: {
                    pathLength: { delay, type: "spring", duration: 0.5, bounce: 0 },
                    opacity: { delay, duration: 0.01 },
                },
            };
        },
    };

    function CheckMark() {
        return (
            <div className='w-full h-full flex flex-center absolute top-0 left-0'>
                <motion.svg width="80" height="80" viewBox="0 0 80 80" initial="hidden" animate="visible">
                    <motion.line x1="20" y1="45" x2="35" y2="60" strokeWidth="8px" strokeLinecap="round" stroke="#fff" variants={draw} custom={0.1} />
                    <motion.line x1="35" y1="60" x2="55" y2="20" strokeWidth="8px" strokeLinecap="round" stroke="#fff" variants={draw} custom={0.2} />
                </motion.svg>
            </div>
        );
    }

    function XMark() {
        return (
            <div className='w-full h-full flex flex-center absolute top-0 left-0'>
                <motion.svg width="80" height="80" viewBox="0 0 80 80" initial="hidden" animate="visible">
                    <motion.line x1="25" y1="25" x2="55" y2="55" strokeWidth="8px" strokeLinecap="round" stroke="#fff" variants={draw} custom={0.1} />
                    <motion.line x1="25" y1="55" x2="55" y2="25" strokeWidth="8px" strokeLinecap="round" stroke="#fff" variants={draw} custom={0.2} />
                </motion.svg>
            </div>
        );
    }

    return (
        <div className='absolute w-20 h-20 top-0 bottom-0 left-0 right-0 m-auto rounded-full overflow-hidden'>
            <div className='flex items-center justify-center w-full h-full bg-white'>
                <h1 className={`${fugaz.className} text-black text-3xl font-bold`}>VS</h1>
            </div>
            <ColorCircle
                color={circleColor}
                roundState={roundState}
            />
            {roundState === 'win' ? <CheckMark /> : roundState === 'lose' ? <XMark /> : null}
        </div>
    )
}

function ColorCircle({ color, roundState }: { color: string; roundState: 'def' | 'win' | 'lose'; }) {
    return (
        <div className={`${color} absolute transition-[top] duration-300 w-full h-full ${roundState === 'def' ? 'top-full' : 'top-0'}`}></div>
    )
}
