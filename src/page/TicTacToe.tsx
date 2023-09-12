import React, { useState } from "react";
import GameBoardSize from "../components/GameBoardSize/GameBoardSize";
import GameBoard from "../components/GameBoard/GameBoard";
import GameControls from "../components/GameBoard/GameControls/GameControls";
import GameStats from "../components/GameStats/GameStats";

const TicTacToe: React.FC = () => {

    const [boardSize, setBoardSize] = useState(3);
    const [matchStats, setMatchStats] = useState<string | null>(null);
    const [totalPlaytime, setTotalPlaytime] = useState<number>(0);
    const onChangeBoard = (size: number) => {
        setBoardSize(size);
    }

    const onMatchUpdate = (history: string | null) => {
        setMatchStats(history);
    }

    const onTotalTimeUpdate = (time: number) => {
        setTotalPlaytime(time);
    }

    return (
        <div className="tic-tac-toe-container">
            <h1 className="game-title">Tic Tac Toe</h1>
            <GameBoardSize changeBoard={onChangeBoard} boardSize={boardSize} />
            <GameBoard boardSize={boardSize} updateMatchHistory={onMatchUpdate} updateTotalTime={onTotalTimeUpdate}/>
            <GameStats matchStats={matchStats} totalPlayTime={totalPlaytime}/>
        </div>
    )
}

export default TicTacToe;