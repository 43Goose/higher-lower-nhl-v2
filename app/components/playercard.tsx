import React from 'react'
import { Divider } from "@mui/material";
import Image from "next/image";

export default function PlayerCard() {
    return (
        <div className="w-min m-auto">
            <div className="p-2 flex">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                    <Image src={''} alt="yo" className='h-full object-contain' />
                </div>
                <h1>TEST</h1>
            </div>
            <Divider />
            <div className="p-2 flex">
                <h2 className="">Points: 0</h2>
                <h2>Goals: 0</h2>
                <h2>Assists: 0</h2>
            </div>
        </div>
    )
}
