import { useState } from "react";
import "./App.css";

const ROWS = 4;
const COLUMNS = 4;

const createRandomBoard = (): number[] => {
  const totalTiles = ROWS * COLUMNS;
  const tiles = Array.from({ length: totalTiles }, (_, i) => i + 1);
  console.log("UNshuffled tiles: ", tiles);

  for (let i = tiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
  }
  console.log("Shuffled tiles", tiles);

  return tiles;
};

function App() {
  const [board, setBoard] = useState(createRandomBoard());

  return (
    <>
      <div className="container">
        <div className="tile-grid">
          {board.map((tile) => (
            <div
              key={tile}
              className={`tile ${tile === 16 ? "empty-tile" : ""}`}
            >
              {tile !== 16 && tile}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
