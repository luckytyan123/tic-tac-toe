export * from "./interface";

export type Player = "X" | "O" | " ";
export type BoardType = Array<Array<string>>;

export type checkGameWinnerType = {
    boardValues: BoardType
    currentPlayer?: Player
}

export type WinCoordinates = {
    winType: string,
    index: number
}