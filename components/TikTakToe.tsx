// components/TicTacToe.tsx

import React, { useState } from 'react';

type SquareValue = 'X' | 'O' | null;

interface SquareProps {
  value: SquareValue;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => (
  <button
    className={`bg-white border border-solid border-gray-500 float-left text-3xl font-bold leading-10 h-12 w-12`}
    onClick={onClick}
  >
    {value}
  </button>
);

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<Array<SquareValue>>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const handleClick = (index: number) => {
    if (board[index] || calculateWinner(board)) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (index: number) => (
    <Square
      value={board[index]}
      onClick={() => handleClick(index)}
    />
  );

  const getStatus = (): string => {
    const winner = calculateWinner(board);
    if (winner) {
      return `Winner: ${winner}`;
    } else if (board.every((square) => square !== null)) {
      return 'It\'s a draw!';
    } else {
      return `Next player: ${xIsNext ? 'X' : 'O'}`;
    }
  };

  return (
    <div>
      <div
        className={`font-bold text-2xl mb-4`}
      >
        {getStatus()}
      </div>
      <div
        className={`inline-block`}
      >
        <div
          className={`table`}
        >
          <div
            className={`table-row`}
          >
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div
            className={`table-row`}
          >
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div
            className={`table-row`}
          >
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      </div>
    </div>
  );
};

const calculateWinner = (squares: Array<SquareValue>): SquareValue | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export default TicTacToe;
