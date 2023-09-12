import React from "react";
import { PlayerProps } from "../../../types";
import styles from "./Player.module.css";

const PlayerComponent: React.FC<PlayerProps> = ({ player, score }) => {
    return (
        <div className={styles.item}>
            <p className={styles.player}>Player {player}</p>
            <p className={styles.score}>{score}</p>
        </div>
    )
}

export default PlayerComponent;