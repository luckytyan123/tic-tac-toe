import React, { useEffect } from "react";
import SvgO from "../../assets/o.svg";
import SvgX from "../../assets/x.svg";
import styles from "./GameCell.module.css"
type GameCellProps = {
    rowIndex: number,
    colIndex: number,
    onCellClick: (rowIndex: number, colIndex: number) => void;
    value: string
    cellSize: string
    winCoordinate: boolean
}

const GameCell: React.FC<GameCellProps> = ({
    rowIndex,
    colIndex,
    onCellClick,
    value,
    cellSize,
    winCoordinate
}) => {
       return (
        <div className={winCoordinate ? styles.gameCellWin : styles.gameCell} style={{ width: cellSize }} onClick={() => {
            if (!value) {
                onCellClick(rowIndex, colIndex);
            }
        }}>
            <div className={styles.cellContent}>
                    {value === "X"
                        ? <img className={styles.icon } src={SvgX} alt="X" />
                        : value === "O"
                            ? <img className={styles.icon} src={SvgO} alt="O" />
                            : " "}
            </div>
        </div>
    )
}
export default GameCell;