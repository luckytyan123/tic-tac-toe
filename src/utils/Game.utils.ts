
import { checkGameWinnerType } from "../types";

export const checkGameWinner = ({ boardValues, currentPlayer }: checkGameWinnerType) => {

    //Check Row
    const rowWin = boardValues.some((row) => row.every((cell) => cell === currentPlayer))
    if (rowWin) {
        const rowIndex = boardValues.findIndex((row) => row.every((cell) => cell === currentPlayer));
        return {
            hasWinner: true,
            winType: "row",
            index: rowIndex
        }
    }


    //Check Column
    const colWin = boardValues[0].some((_, i) => boardValues.every((row) => row[i] === currentPlayer));
    if (colWin) {
        const colIndex = boardValues[0].findIndex((_, i) => boardValues.every((row) => row[i] === currentPlayer));
        return {
            hasWinner: true,
            winType: "col",
            index: colIndex
        }
    }


    // Check Diagonals
    const topBottomDiag = boardValues.every((row, i) => row[i] === currentPlayer);
    if (topBottomDiag) {
        return {
            hasWinner: true,
            winType: "topBotDiag",
            index: 0
        }
    }
    const bottomTopDiag = boardValues.every((row, i) => row[row.length - 1 - i] === currentPlayer);
    if (bottomTopDiag) {
        return {
            hasWinner: true,
            winType: "botTopDiag",
            index: 0
        }
    }

    return {
        hasWinner: false,
        winType: "",
        index: 0

    }
}

export const checkGameBoardIsFull = ({ boardValues }: checkGameWinnerType) => {
    return boardValues.every((row) => row.every((col) => col !== null));
}


export const secondstoHoursMinutes = (totalSeconds: number) => {
    var hours = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    var seconds = totalSeconds - (hours * 3600) - (minutes * 60);
    return { hours, minutes, seconds };
}