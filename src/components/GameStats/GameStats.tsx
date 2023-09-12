import React, { useEffect, useState } from "react";
import styles from "./GameStats.module.css"
import VictoryPercentage from "./VictoryPercentage/VictoryPercentage";
import PlayedGames from "./MatchHistory/MatchHistory";
import TotalPlayTime from "./TotalPlayTime/TotalPlayTime";

export interface Stats {
    matchStats: string | null
    totalPlayTime: number
}

const GameStats: React.FC<Stats> = ({ matchStats, totalPlayTime }) => {

    const statistics = matchStats !== null ? matchStats.split(",") : [];
    return (
        <div className={`${styles.statsContainer} container box`}>
            <h2 className={styles.sectionTitle}>Stats</h2>
            <div className={styles.contentContainer}>
                <div className={styles.flexContainer} >
                    <VictoryPercentage matchStats={statistics} />
                    <PlayedGames matchStats={statistics} />
                </div>
                <div className={styles.totalPlayTimeContainer} >
                    <TotalPlayTime totalPlaytime={totalPlayTime} />
                </div>
            </div>
        </div>
    )
}
export default GameStats