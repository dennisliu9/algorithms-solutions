let iterations = 0;

// eslint-disable-next-line no-unused-vars
function solution(n) {
  if (n < 10) return iterations;

  iterations++;
  const newN = String(n).split('').map(element => Number(element)).reduce((prev, cur) => prev + cur);
  return solution(newN);
}
