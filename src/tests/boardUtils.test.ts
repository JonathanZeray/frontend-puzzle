import { isSolved } from "../utils/boardUtils";

describe("boardUtils tests", () => {
  test("isSolved detects a solved board", () => {
    const solvedBoard = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(isSolved(solvedBoard)).toBe(true);
  });

  test("isSolved detects a non solved board", () => {
    const notSolvedBoard = [1, 3, 2, 4, 5, 6, 7, 8];
    expect(isSolved(notSolvedBoard)).toBe(false);
  });
});
