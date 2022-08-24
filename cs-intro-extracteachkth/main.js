// eslint-disable-next-line no-unused-vars
function solution(inputArray, k) {
  return inputArray.filter((element, index) => (index + 1) % k !== 0);
}
