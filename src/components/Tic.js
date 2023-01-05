import React, { useState } from 'react';
import Button from '@mui/material/Button';

const Tic = () => {
    const [grid, setGrid] = useState([    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameOver, setGameOver] = useState(false);

  const handleClick = (rowIndex, colIndex) => {
    // Return if game is over or grid cell is not empty
    if (gameOver || grid[rowIndex][colIndex] !== '') {

      return;
    }

    // Update grid with current player's symbol
    const newGrid = [...grid];
    newGrid[rowIndex][colIndex] = currentPlayer;
    setGrid(newGrid);

    // Check for winner
    if (checkForWinner()) {
      setGameOver(true);
      return;
    }

    // Switch to other player
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  }

  const checkForWinner = () => {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (grid[i][0] !== '' && grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2]) {
        alert(`Player ${grid[i][0]} wins!`);
        return true;
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (grid[0][i] !== '' && grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i]) {
        alert(`Player ${grid[0][i]} wins!`);
        return true;
      }
    }

    // Check diagonals
    if (grid[0][0] !== '' && grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) {
        alert(`Player ${grid[0][0]} wins!`);
      return true;
    }
    if (grid[0][2] !== '' && grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]) {
        alert(`Player ${grid[0][2]} wins!`);
      return true;
    }

    return false;
  }
  const resetGame = () => {
    setGrid([      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]);
    setCurrentPlayer('X');
    setGameOver(false);
  }

  const renderGrid = () => {
    return grid.map((row, rowIndex) => {
      return (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => {
            return (
              <div key={colIndex} className="cell" onClick={() => handleClick(rowIndex, colIndex)}>
                {cell}
              </div>
            );
          })}
       
        </div>
      );
    });
  }

  return (
    <div className='container'>
    <div className="tic-tac-toe">
      {renderGrid()}
    </div>
    <Button onClick={resetGame} sx={{ marginTop:"2%", padding: '10px' }} variant="contained" >RESET GAME</Button>
  </div>
  )
  }
export default Tic