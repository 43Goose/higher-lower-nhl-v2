import React from 'react'

export default function PlayercardLoading({ unknown }: { unknown?: boolean }) {
    return (
        <div className='relative h-1/3 w-full md:h-full md:w-1/3'>
            <div className='absolute w-full h-full top-0'></div>
            {unknown ? <UnknownContent /> : <DefContent />}
        </div>
    )
}

function DefContent() {
    return (
        <div className='absolute top-0 h-full w-full flex flex-col justify-center items-center gap-2 bg-slate-800'>
            <div className='w-56 h-9 rounded-lg animate-pulse bg-slate-700' />
            <div className='w-8 h-7 rounded animate-pulse bg-slate-700' />
            <div className='w-20 h-12 rounded-lg animate-pulse bg-slate-700' />
            <div className='w-32 h-7 rounded animate-pulse bg-slate-700' />
        </div>
    )
}

function UnknownContent() {
    return (
        <div className='absolute top-0 h-full w-full flex flex-col justify-center items-center gap-2 bg-slate-900'>
            <div className='w-56 h-9 rounded-lg animate-pulse bg-slate-700' />
            <div className='w-8 h-7 rounded animate-pulse bg-slate-700' />
            <div className='w-80 flex flex-col justify-center gap-2'>
                <div className='w-full h-[48px] font-bold p-3 text-center text-slate-600 rounded-full animate-pulse bg-slate-700' />
                <div className='w-full h-[48px] font-bold p-3 text-center text-slate-600 rounded-full animate-pulse bg-slate-700' />
            </div>
            <div className='w-64 h-7 rounded animate-pulse bg-slate-700' />
        </div>
    )
}
