// eslint-disable-next-line no-unused-vars
function solution(cell) {
  /*
  Convert letter to number

  Possibilities to check
  +1 +2
  +1 -2
  +2 +1
  +2 -1
  -1 +2
  -1 -2
  -2 +1
  -2 -1

  Hard code these and loop through each possibility, checking if the result is a valid chess square
      If it is, increment a counter by one
  return the counter

  */

  const letToNum = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8
  };

  const moves = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, 2],
    [1, -2],
    [2, 1],
    [2, -1]
  ];

  function isValidChessCoord(coord) {
    return (coord >= 1 && coord <= 8);
  }

  const letCoord = Number(letToNum[cell[0]]);
  const numCoord = Number(cell[1]);

  let possibleMoves = 0;
  for (let i = 0; i < moves.length; i++) {
    if (isValidChessCoord(letCoord + moves[i][0]) && isValidChessCoord(numCoord + moves[i][1])) {
      possibleMoves++;
    }
  }

  return possibleMoves;
}
