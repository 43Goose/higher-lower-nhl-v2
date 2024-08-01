import React from 'react'
import PlayercardsLoading from './playercards-loading'
import { fugaz } from '@/app/fonts'

export default function GameLoading() {
    return (
        <div className='w-screen h-screen overflow-hidden'>
            <PlayercardsLoading />
            <div className='absolute flex items-center justify-center w-20 h-20 rounded-full animate-pulse top-0 bottom-0 left-0 right-0 m-auto bg-slate-700'>
                <h1 className={`${fugaz.className} text-3xl font-bold text-slate-600`}>VS</h1>
            </div>
        </div>
    )
}
