// eslint-disable-next-line no-unused-vars
function solution(inputArray) {
  /*
  While check is false, add one to n then check (incrementing moves)
      Changing it in place allows us to step through and keep track
  */

  let movesCounter = 0;

  for (let i = 1; i < inputArray.length; i++) {
    while (inputArray[i] <= inputArray[i - 1]) {
      inputArray[i]++;
      movesCounter++;
    }
  }

  return movesCounter;
}
