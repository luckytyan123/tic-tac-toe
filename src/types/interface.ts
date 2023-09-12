export interface BoardSizeProps {
    changeBoard: (boardSize: number) => void,
    boardSize: number
}

export interface GameBoardProps {
    boardSize: number,
    updateMatchHistory: (matchHistory: string | null) => void;
    updateTotalTime: (time: number) => void;
    
}

export interface GameControlsProps {
    resetMatch: () => void
    newGame: () => void
}

export interface PlayerProps {
    player: string
    score: number
}

export interface Statistics {
    matchStats: Array<string>
}

export interface StopWatch {
    updateTotalPlaytime: (totalSeconds: number) => void
    resetTime: boolean
    hasWinner: boolean
}

export interface TotalPlayTimeProps {
    totalPlaytime: number
}