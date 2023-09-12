import React from "react";
import styles from "./GameBoardSize.module.css";
import { BoardSizeProps } from "../../types";


const GameBoardSize: React.FC<BoardSizeProps> = ({ changeBoard, boardSize }) => {
    return (
        <div className={`${styles.gameBoardContainer} container box`}>
            <h2 className={styles.sectionTitle}>Game Board Size</h2>
            <div className={styles.flexContainer}>
                <div className={styles.radioItem}>
                    <input name="board-size" type="radio" value={3} checked={boardSize === 3} onChange={() => changeBoard(3)} /> 3 x 3
                </div>
                <div className={styles.radioItem}>
                    <input name="board-size" type="radio" value={6} checked={boardSize === 6} onChange={() => changeBoard(6)} /> 6 x 6
                </div>
                <div className={styles.radioItem}>
                    <input name="board-size" type="radio" value={9} checked={boardSize === 9} onChange={() => changeBoard(9)} /> 9 x 9
                </div>
            </div>
        </div>
    )
}

export default GameBoardSize;