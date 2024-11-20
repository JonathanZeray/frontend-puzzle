import { useEffect, useState } from "react";
import "./App.css";

const ROWS = 2;
const COLUMNS = 2;

const getValidMoves = (emptyIndex: number): number[] => {
  const validMoves: number[] = [];
  const row = Math.floor(emptyIndex / COLUMNS);
  const col = emptyIndex % COLUMNS;

  if (col > 0) validMoves.push(emptyIndex - 1); // left
  if (col < COLUMNS - 1) validMoves.push(emptyIndex + 1); // right
  if (row > 0) validMoves.push(emptyIndex - COLUMNS); // up
  if (row < ROWS - 1) validMoves.push(emptyIndex + COLUMNS); // down

  return validMoves;
};

const getRandomBoard = (): number[] => {
  const totalTiles = ROWS * COLUMNS;
  const tiles: number[] = Array.from({ length: totalTiles }, (_, i) => i + 1);
  let emptyIndex = totalTiles - 1;

  //change i < 10 below to a lower/higher value to get an easier or harder shuffle.
  for (let i = 0; i < 10; i++) {
    const possibleMoves = getValidMoves(emptyIndex);
    const randomMove =
      possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
    [tiles[emptyIndex], tiles[randomMove]] = [
      tiles[randomMove],
      tiles[emptyIndex],
    ];
    emptyIndex = randomMove;
  }
  return tiles;
};

const isSolved = (board: number[]) => {
  for (let i = 0; i < board.length; i++) {
    if (board[i] !== i + 1) {
      return false;
    }
  }
  return true;
};

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
