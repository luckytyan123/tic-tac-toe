import React, { useEffect, useState } from "react";
import { Stats } from "../GameStats";
import styles from "./MatchHistory.module.css"
import { Statistics } from "../../../types";

interface CircleProps {
    i: number
}
const MatchHistory: React.FC<Statistics> = ({ matchStats }) => {
    const FullMatch = Array(9).fill(null);
    console.log(matchStats);
    const RenderCircle: React.FC<CircleProps> = ({ i }) => {
         return <span className={i < matchStats.length ? styles.circleFill : styles.circle}></span>
    }
    const RenderWinner: React.FC<CircleProps> = ({ i }) => {
         return <span className={styles.matchBox}>{i < matchStats.length ? `${matchStats[i]}` : " "}</span>
    }

    return (
        <div className={styles.item} style={{flexGrow: 2}}>
            <div className={styles.matchHistoryContainer}>
                <p className={styles.title}>Played Games</p>
                <div className={styles.circleContainer}>
                    {FullMatch.map((value: any, index: number) => (
                        <RenderCircle key={index} i={index} />
                    ))}
                </div>
            </div>
            <div> <p className={styles.title}>Games History</p>
                <div className={styles.circleContainer}>
                    {FullMatch.map((value: any, index: number) => (
                        <RenderWinner key={index} i={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MatchHistory;