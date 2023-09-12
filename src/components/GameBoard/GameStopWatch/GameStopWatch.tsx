import React, { useEffect } from "react";
import { useStopwatch } from "react-timer-hook";
import styles from "./GameStopWatch.module.css";
import { StopWatch } from "../../../types";

const GameStopWatch: React.FC<StopWatch> = ({ updateTotalPlaytime, resetTime, hasWinner }) => {
    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: true });

    useEffect(() => {
        if (hasWinner) {
            pause();
            updateTotalPlaytime(totalSeconds);
        }

    }, [hasWinner])

    useEffect(() => {
            reset();
    }, [resetTime])
    return (
        <div className={styles.stopWatchContainer}>
            <span>
                {hours.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
            </span>:
            <span>
                {minutes.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
            </span>:
            <span>{seconds.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
            </span>
        </div>
    )
}

export default GameStopWatch;