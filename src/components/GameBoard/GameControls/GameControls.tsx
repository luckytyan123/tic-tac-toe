import React from "react";
import styles from "./GameControls.module.css";
import { GameControlsProps } from "../../../types";

const GameControls: React.FC<GameControlsProps> = ({ resetMatch, newGame }) => {
    return (

        <div className={styles.gameControlsContainer}>
            <div className={styles.flexContainer}>
                <div className={styles.buttonContainer}>
                    <button className={styles.btnPrimary} onClick={() => newGame()}>New Game</button>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.btnSecondary} onClick={() => resetMatch()}>Reset Match</button>
                </div>
            </div>
        </div>
    )
}

export default GameControls;