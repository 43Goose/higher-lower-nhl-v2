'use client';
import React from 'react'
import { Divider } from "@mui/material";
import Image from "next/image";

export default function PlayerCard({ playerStats }: { playerStats: { [key: string]: any } }) {
    return (
        <div className="w-min text-lg">
            <div className="p-2 flex items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                    <Image loader={() => playerStats.imageURL} src={playerStats.imageURL} width={0} height={0} alt={playerStats.name} unoptimized className='h-full w-auto bg-white object-contain' />
                </div>
                <h1 className='ml-4'>{playerStats.name}</h1>
            </div>
            <Divider />
            <div className="p-2 flex">
                <h2 className="mr-8 text-nowrap">Points: {playerStats.points}</h2>
                <h2 className="mr-8 text-nowrap">Goals: {playerStats.goals}</h2>
                <h2 className="mr-8 text-nowrap">Assists: {playerStats.assists}</h2>
            </div>
        </div>
    )
}
