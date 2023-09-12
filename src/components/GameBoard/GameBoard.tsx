import React, { useEffect, useState } from "react";
import GameCell from "../GameCell/GameCell";
import { checkGameBoardIsFull, checkGameWinner } from "../../utils/Game.utils";
import GameStats from "../GameStats/GameStats";
import { GameBoardProps, Player, WinCoordinates } from "../../types";
import styles from "./GameBoard.module.css";
import PlayerComponent from "./Player/PlayerComponent";
import GameControls from "./GameControls/GameControls";
import GameStopWatch from "./GameStopWatch/GameStopWatch";



const GameBoard: React.FC<GameBoardProps> = ({ boardSize, updateMatchHistory, updateTotalTime }) => {
    const [boardValues, setBoardValues] = useState<string[][]>([]);
    const [boardWinValues, setBoardWinValues] = useState<boolean[][]>([]);
    const [matchHistory, setMatchHistory] = useState<string[]>([]);
    const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
    const [hasWinner, setHasWinner] = useState<boolean>(false);
    const [player1Score, setPlayer1Score] = useState<number>(0);
    const [player2Score, setPlayer2Score] = useState<number>(0);

    const [totalPlayTime, setTotalPlayTime] = useState(0);
    const [resetTime, setResetTime] = useState(false);
    const [gameSet, setGameSet] = useState<boolean>(false);


    useEffect(() => {
        setBoardValues(Array(boardSize).fill(null).map(e => Array(boardSize).fill(null)))
        setBoardWinValues(Array(boardSize).fill(false).map(e => Array(boardSize).fill(false)));
        onNewGame();
    }, [boardSize])


    const initializeGame = () => {
        setPlayer1Score(0);
        setPlayer2Score(0);
        setMatchHistory([]);
        updateMatchHistory(null);
        setTotalPlayTime(0);
        updateTotalTime(0);
        setGameSet(false);
        onNewGame();

    }

    const onNewGame = () => {
        setBoardValues(Array(boardSize).fill(null).map(e => Array(boardSize).fill(null)));
        setBoardWinValues(Array(boardSize).fill(false).map(e => Array(boardSize).fill(false)));
        setCurrentPlayer("X");
        setHasWinner(false);
        setResetTime(!resetTime);
    }


    const setBoardWinCoordinates = (winDetails: WinCoordinates) => {
        let currentBoard = boardWinValues;
        switch (winDetails.winType) {
            case "row":
                currentBoard[winDetails.index].fill(true);
                break;
            case "col":
                currentBoard.forEach((row, i) => currentBoard[i][winDetails.index] = true)
                break;
            case "topBotDiag":
                currentBoard.every((row, i) => currentBoard[i][i] = true);
                break;
            case "botTopDiag":
                currentBoard.every((row, i) => currentBoard[i][row.length - 1 - i] = true);
                break;
        }
        setBoardWinValues(currentBoard);
    }
    
    
    const handleCellClick = (rowIndex: number, colIndex: number) => {
        let currentBoard = boardValues;

        currentBoard[rowIndex][colIndex] = currentPlayer;

        setBoardValues(currentBoard);

        const winDetails = checkGameWinner({ boardValues, currentPlayer });
        if (winDetails.hasWinner) {
            setHasWinner(true);
            setGameWinner(currentPlayer);
            setBoardWinCoordinates(winDetails);
            updateMatchHistory(matchHistory.toString());

        }
        else {

            const boardIsFull = checkGameBoardIsFull({ boardValues });
            if (boardIsFull) {
                setGameWinner(" ");
                setHasWinner(true);
                updateMatchHistory(matchHistory.toString());
            }
            else {
                if (currentPlayer === "X") {
                    setCurrentPlayer("O");
                }
                else {
                    setCurrentPlayer("X");
                }
            }
        }
    }

    const setGameWinner = (currentPlayer: Player) => {
        let currentMatchHistory = matchHistory;

        let player1CurrentScore = player1Score;
        let player2CurrentScore = player2Score;
        if (currentPlayer === "X") {
            player1CurrentScore += 1;
            setPlayer1Score(player1CurrentScore);
            currentMatchHistory.push("P1")
        }
        else if (currentPlayer === "O") {
            player2CurrentScore += 1
            setPlayer2Score(player2CurrentScore);
            currentMatchHistory.push("P2");
        }
        else currentMatchHistory.push("D")
        setMatchHistory(currentMatchHistory);
        if (player1CurrentScore === 5) {
            alert("Game Set!!\n\nCongratulations to Player 1!");
            setGameSet(true);
        }

        else if (player2CurrentScore === 5) {
            alert("Game Set!!\n\nCongratulations to Player 2!");
            setGameSet(true);
        }

        //Check Game Count
        if (currentMatchHistory.length === 9) {
            setGameSet(true);
            if (player1CurrentScore > player2CurrentScore) {
                alert("Game Set!!\n\nCongratulations to Player 1!");
            }
            else if (player1CurrentScore > player2CurrentScore) {
                alert("Game Set!!\n\nCongratulations to Player 2!");
            }
            else {
                alert("Game Set!!\n\nDraw!");
            }
        }


    }

    const RenderGameBoard: React.FC = () => {
        return (
            <div className={`${styles.item} ${styles.board}`}>
                <div className={styles.boardBorder}>
                    {boardValues.map((row, rowIndex) => (
                        <div key={rowIndex} className={styles.boardRow} >
                            {row.map((value, colIndex) => (
                                <GameCell
                                    rowIndex={rowIndex}
                                    colIndex={colIndex}
                                    key={`${rowIndex}-${colIndex}`}
                                    onCellClick={!hasWinner ? handleCellClick : () => { }}
                                    value={value}
                                    winCoordinate={boardWinValues[rowIndex][colIndex]}
                                    cellSize={`${100 / boardSize}%`}
                                />
                            ))}
                        </div>
                    ))
                    }
                </div>
            </div>
        )
    }


    const onPlaytimeUpdate = (playtime: number) => {
        const currentPlayTime = totalPlayTime + playtime;
        setTotalPlayTime(currentPlayTime);
        updateTotalTime(currentPlayTime);
    }

    return (
        <div className="tic-tac-toe">
            <div className={`${styles.gameBoardContainer} container box`}>
                <div className={styles.flexContainer}>
                    <PlayerComponent player="1" score={player1Score} />
                    <RenderGameBoard />
                    <PlayerComponent player="2" score={player2Score} />

                </div>
                <GameStopWatch updateTotalPlaytime={onPlaytimeUpdate} resetTime={resetTime} hasWinner={hasWinner} />
                <GameControls resetMatch={initializeGame} newGame={gameSet ? initializeGame : onNewGame} />
            </div >
        </div>
    )
}

export default GameBoard;