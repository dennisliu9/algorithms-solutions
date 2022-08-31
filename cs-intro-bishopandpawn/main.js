// eslint-disable-next-line no-unused-vars
function solution(bishop, pawn) {
  return Math.abs(bishop.charCodeAt(0) - pawn.charCodeAt(0)) === Math.abs(Number(bishop[1]) - Number(pawn[1]));
}
