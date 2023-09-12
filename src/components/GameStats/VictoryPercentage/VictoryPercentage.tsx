import React, { useEffect, useState } from "react";
import { Stats } from "../GameStats";
import styles from "./VictoryPercentage.module.css"
import { Statistics } from "../../../types";


const VictoryPercentage: React.FC<Statistics> = ({ matchStats }) => {
    const player1Win = matchStats.filter(player => player == "P1").length / matchStats.length * 100;
    const player2Win = matchStats.filter(player => player == "P2").length / matchStats.length * 100;

    return (
        <div className={styles.item}>
            <p className={styles.title}>Victories %</p>
            <div className={styles.flexContainer}>
                <div className={styles.item}>
                    <p className={styles.player}>Player 1</p>
                    <div className={styles.flexContainer}>
                        <div className={styles.item}>
                            <div className={styles.circle}>
                                <span className={styles.winRate}>{player1Win ? player1Win.toFixed(2) : "0"}%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <p className={styles.player}>Player 2</p>
                    <div className={styles.flexContainer}>
                        <div className={styles.item}>
                            <div className={styles.circle}>
                                <span className={styles.winRate}>{player2Win ? player2Win.toFixed(2) : "0"}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default VictoryPercentage;