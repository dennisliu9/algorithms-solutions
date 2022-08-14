// eslint-disable-next-line no-unused-vars
function solution(n) {
  return String(n).split('').every(element => Number(element) % 2 === 0);
}
