import { COLUMNS, getValidMoves, isSolved } from "../utils/boardUtils";

describe("boardUtils tests", () => {
  test("isSolved detects a solved board", () => {
    const solvedBoard = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(isSolved(solvedBoard)).toBe(true);
  });

  test("isSolved detects a non solved board", () => {
    const notSolvedBoard = [2, 3, 1, 4, 6, 5, 7, 8];
    expect(isSolved(notSolvedBoard)).toBe(false);
  });

  test("getValidMoves returns correct moves for a top-left corner index", () => {
    const validMoves = [1, COLUMNS]; // Hö & ner
    expect(getValidMoves(0)).toEqual(validMoves);
  });

  test("getValidMoves does not include invalid moves", () => {
    const validMoves = getValidMoves(1);
    expect(validMoves).not.toContain(3); // indexposition 3 ska inte vara en valid move från indexposition 1.
  });
});
