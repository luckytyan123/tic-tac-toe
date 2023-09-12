import React from "react";
import styles from "./TotalPlayTime.module.css"
import { TotalPlayTimeProps } from "../../../types";
import { secondstoHoursMinutes } from "../../../utils/Game.utils";

const TotalPlayTime: React.FC<TotalPlayTimeProps> = ({ totalPlaytime }) => {
    const { hours, minutes, seconds } = secondstoHoursMinutes(totalPlaytime);

    return (
        <div className={styles.playTimeContainer} >
            <h3>Total play time</h3>
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

export default TotalPlayTime;