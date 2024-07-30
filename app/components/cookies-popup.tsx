'use client';
import React, { useState } from 'react';
import Button from './site-button';
import { waitForSeconds } from '../game/utils';

export default function CookiesPopup({ clickFn }: { clickFn: Function }) {
    const [hidePopup, setHidePopup] = useState(false);

    const handleClick = async (input: boolean) => {
        setHidePopup(true);
        await waitForSeconds(150);
        clickFn(input);
    }

    return (
        <div className={`absolute w-10/12 h-min py-8 px-8 top-0 bottom-0 left-0 right-0 m-auto bg-pri text-center rounded-lg transition md:w-1/3 ${hidePopup ? 'opacity-0' : 'opacity-100'}`}>
            <h1 className='text-3xl text-sec font-bold mb-4'>COOKIES!</h1>
            <div className={`text-xl font-bold mb-4`}>
                <h2>This site uses cookies only to save your high score.</h2>
            </div>
            <div className='flex flex-col gap-4'>
                <Button variant='contained' onClick={() => handleClick(true)}>ACCEPT</Button>
                <Button variant='contained' onClick={() => handleClick(false)}>DELCINE</Button>
            </div>
        </div>
    )
}