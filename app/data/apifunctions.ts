'use server';

import { PlayerInfo } from "../types";

export async function getPlayer(id: number) {
    const player = await fetch(`https://api-web.nhle.com/v1/player/${id}/landing`).then(res => res.json());
    let stats: PlayerInfo = {
        id: player.id,
        name: `${player.firstName.default} ${player.lastName.default}`,
        goals: 0,
        assists: 0,
        points: 0,
        imageURL: player.heroImage
    }

    try {
        stats.goals = Object.keys(player.careerTotals.regularSeason).includes('goals') ? player.careerTotals.regularSeason.goals : 0;
        stats.assists = Object.keys(player.careerTotals.regularSeason).includes('assists') ? player.careerTotals.regularSeason.assists : 0;
        stats.points = Object.keys(player.careerTotals.regularSeason).includes('points') ? player.careerTotals.regularSeason.points : 0;
    } catch (error) {
        console.log(`${player.firstName.default} ${player.lastName.default}`);
    }

    return stats;
}