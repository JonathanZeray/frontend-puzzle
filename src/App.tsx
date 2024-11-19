import { useState } from "react";
import "./App.css";

const ROWS = 4;
const COLUMNS = 4;

const generateSolvedBoard = () => {
  const totalTiles = ROWS * COLUMNS;
  return Array.from({ length: totalTiles }, (_, i) => i + 1);
};

function App() {
  const [board, setBoard] = useState(generateSolvedBoard());

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
      ;
    </>
  );
}

export default App;
