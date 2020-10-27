const mapMovesToSquares = (moves) => {
  let squares = ['', '', '', '', '', '', '', '', ''];
  for (const move of moves) {
    if (move.player === 2) {
      squares[move.cellIndex] = 'o';
    } else {
      squares[move.cellIndex] = 'x';
    }
  }
  return squares;
};
export default mapMovesToSquares;
