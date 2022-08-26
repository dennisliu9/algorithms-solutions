// eslint-disable-next-line no-unused-vars
function solution(inputArray, k) {
  // This solution is too slow, has nested loops making it O(n^2)

  // let maxSum = 0;
  // for (let i = 0; i + (k-1) < inputArray.length; i++) {
  //     const curSum = inputArray.slice(i, i + k).reduce((prev, cur) => prev + cur);
  //     // maxSum = (maxSum < curSum) ? curSum : maxSum;
  //     maxSum = Math.max(curSum, maxSum);
  // }
  // return maxSum;

  // Help from: https://stackoverflow.com/questions/66202105/how-do-i-get-arraymaxconsecutivesum-from-codesignal-more-efficient
  // Instead, reduce the nested loop by using a running sum
  // Calculate each new sum by subtracting out the element that is no longer in the sequence (index i - 1)
  // and adding in the next element in the sequence (i + k - 1, which is current index + k spaces and then -1 to account for index 0)
  // If this is bigger than the largest sum seen so far, keep it
  let lastSum = inputArray.slice(0, k).reduce((prev, cur) => prev + cur);
  let maxSum = lastSum;
  for (let i = 1; i <= inputArray.length - k; i++) {
    lastSum = lastSum + inputArray[i + k - 1] - inputArray[i - 1];
    maxSum = Math.max(maxSum, lastSum);
  }
  return maxSum;
}
