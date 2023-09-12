import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import GameBoardSize from './components/GameBoardSize/GameBoardSize';
import TicTacToe from './page/TicTacToe';

function App() {
  return (
    <div className="App">
      <TicTacToe />
    </div>
  );
}

export default App;
