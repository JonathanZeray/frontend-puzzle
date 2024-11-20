import { useState } from "react";
import "./App.css";

const ROWS = 4;
const COLUMNS = 4;

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
  const tiles = Array.from({ length: totalTiles }, (_, i) => i + 1);
  let emptyIndex = totalTiles - 1;
  console.log("Initial Board:", tiles);
  console.log("Empty index", emptyIndex);

  for (let i = 0; i < 10; i++) {
    const possibleMoves = getValidMoves(emptyIndex);
    const randomMove =
      possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
    [tiles[emptyIndex], tiles[randomMove]] = [
      tiles[randomMove],
      tiles[emptyIndex],
    ];
    emptyIndex = randomMove;
    console.log("empty index shuffle: ", emptyIndex);
  }

  return tiles;
};

function App() {
  const [board, setBoard] = useState(getRandomBoard());

  const handleTileClick = (index: number) => {
    const emptyIndex = board.indexOf(ROWS * COLUMNS);
    const validMoves = getValidMoves(emptyIndex);
    console.log("EMPTY", emptyIndex);
    console.log("Possible moves: ", validMoves);

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
        <div className="tile-grid">
          {board.map((tile, index) => (
            <div
              key={tile}
              className={`tile ${tile === 16 ? "empty-tile" : ""}`}
              onClick={() => handleTileClick(index)}
            >
              {tile !== 16 && tile}
            </div>
          ))}
        </div>
        <button
          className="reshuffle-btn"
          onClick={() => setBoard(getRandomBoard())}
        >
          Reshuffle
        </button>
      </div>
    </>
  );
}

export default App;
