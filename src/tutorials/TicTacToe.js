import React, { useState } from "react";

// Helper function to calculate winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function TicTacToe() {
  // TODO: Initialize board state (array of 9 items)
  const [board, setBoard] = useState(Array(9).fill(null));

  // TODO: Initialize current player turn state ('X' or 'O')
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    // TODO: Handle square click, check winner/occupied, update state
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext((prev) => !prev);
  };

  const handleReset = () => {
    // TODO: Reset board and player turn
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const winner = calculateWinner(board);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      {/* Game Status */}
      <div id="statusArea" style={{ marginBottom: "10px", fontWeight: "bold" }}>
        {
          /* Render "Winner: X" or "Next Player: X/O" */
          winner ? "Winner: " + winner : "Next Player: " + (isXNext ? "X" : "O")
        }
      </div>

      <button onClick={handleReset} style={{ marginBottom: "15px" }}>
        Reset
      </button>

      {/* 3x3 Board Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 60px)",
          gap: "5px",
        }}
      >
        {board.map((square, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: "60px",
              height: "60px",
              fontSize: "24px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {square}
          </button>
        ))}
      </div>
    </div>
  );
}
