//Ändra antal rows/columns här.
export const ROWS = 3;
export const COLUMNS = 5;

export const getValidMoves = (emptyIndex: number): number[] => {
  const validMoves: number[] = [];
  const row = Math.floor(emptyIndex / COLUMNS);
  const col = emptyIndex % COLUMNS;

  if (col > 0) validMoves.push(emptyIndex - 1); // left
  if (col < COLUMNS - 1) validMoves.push(emptyIndex + 1); // right
  if (row > 0) validMoves.push(emptyIndex - COLUMNS); // up
  if (row < ROWS - 1) validMoves.push(emptyIndex + COLUMNS); // down

  return validMoves;
};

export const getRandomBoard = (): number[] => {
  const totalTiles = ROWS * COLUMNS;
  const tiles: number[] = Array.from({ length: totalTiles }, (_, i) => i + 1);
  let emptyIndex = totalTiles - 1;

  //Ändra det andra uttrycket (i < "X") till ett lägre/högre värde. Ju lägre värde desto lättare pussel.
  for (let i = 0; i < 30; i++) {
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

export const isSolved = (board: number[]): boolean => {
  for (let i = 0; i < board.length; i++) {
    if (board[i] !== i + 1) {
      return false;
    }
  }
  return true;
};
