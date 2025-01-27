import React, { useEffect, useState } from "react";

const emojis = ["🌸", "🌺", "🍄", "🌼", "🌹"];

const MiniGame = () => {
  const [gameBoard, setGameBoard] = useState<string[]>(Array(16).fill(""));
  const [selectedCell, setSelectedCell] = useState<number | null>(null);
  const [isWinner, setIsWinner] = useState(false);

  useEffect(() => {
    if (gameBoard.every(cell => cell !== "")) {
      setIsWinner(true);
    }
  }, [gameBoard]);

  const handleCellClick = (index: number) => {
    if (gameBoard[index]) return;

    const newBoard = [...gameBoard];
    newBoard[index] = emojis[Math.floor(Math.random() * emojis.length)];
    setGameBoard(newBoard);

    if (selectedCell === null) {
      setSelectedCell(index);
    } else {
      if (newBoard[selectedCell] === newBoard[index]) {
        setSelectedCell(null);
      } else {
        setTimeout(() => {
          const clearedBoard = [...newBoard];
          clearedBoard[selectedCell] = "";
          clearedBoard[index] = "";
          setGameBoard(clearedBoard);
          setSelectedCell(null);
        }, 500);
      }
    }
  };

  const resetGameBoard = () => {
    setGameBoard(Array(16).fill(""));
    setIsWinner(false);
  };

  return (
    <div>
      {isWinner && (
        <p className="text-center text-[#00ff9d] text-sm mb-4">Congratulations! You&apos;ve matched all the pairs!</p>
      )}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {gameBoard.map((cell, index) => (
          <button
            key={index}
            onClick={() => handleCellClick(index)}
            className="w-16 h-16 bg-[#1a1a2f] border-2 border-[#00f0ff] rounded flex items-center justify-center text-2xl hover:bg-[#2a2a3f] transition-colors"
          >
            {cell}
          </button>
        ))}
      </div>
      <button
        onClick={resetGameBoard}
        className="w-2/5 float-start bg-[#00ff9d] text-[#0a0a0f] font-semibold p-2 mt-3 ms-3 rounded hover:bg-[#00e08d] transition-colors"
      >
        RESET
      </button>
    </div>
  );
};

export default MiniGame;
