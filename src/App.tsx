import { useEffect, useState } from "react";
import {
  getValidMoves,
  getRandomBoard,
  isSolved,
  ROWS,
  COLUMNS,
} from "./utils/boardUtils";
import "./App.css";

function App() {
  const [board, setBoard] = useState<number[]>(getRandomBoard());
  const [solved, setSolved] = useState<boolean>(false);

  useEffect(() => {
    if (isSolved(board)) {
      setTimeout(() => {
        setSolved(true);
      }, 100);
    }
  }, [board]);

  const handleTileClick = (index: number) => {
    const emptyIndex = board.indexOf(ROWS * COLUMNS);
    const validMoves = getValidMoves(emptyIndex);

    if (validMoves.includes(index)) {
      const newBoard = [...board];
      [newBoard[emptyIndex], newBoard[index]] = [
        newBoard[index],
        newBoard[emptyIndex],
      ];
      setBoard(newBoard);
    }
  };

  return (
    <>
      <div className="container">
        <div
          className="tile-grid"
          style={{
            gridTemplateColumns: `repeat(${COLUMNS}, 1fr)`,
            gridTemplateRows: `repeat(${ROWS}, 1fr)`,
          }}
        >
          {board.map((tile, index) => (
            <div
              key={tile}
              className={`tile ${tile === ROWS * COLUMNS ? "empty-tile" : ""}`}
              onClick={() => handleTileClick(index)}
            >
              {tile !== ROWS * COLUMNS && tile}
            </div>
          ))}
        </div>
        <button
          className="reshuffle-btn"
          onClick={() => setBoard(getRandomBoard())}
        >
          Reshuffle
        </button>
        {solved && (
          <div className={`success-toast ${solved ? "visible" : ""}`}>
            Congratulations!
            <br />
            You did it!
            <button
              onClick={() => {
                setBoard(getRandomBoard());
                setSolved(!solved);
              }}
              className="success-toast_btn"
            >
              Play again
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
