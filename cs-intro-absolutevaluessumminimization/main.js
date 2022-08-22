// eslint-disable-next-line no-unused-vars
function solution(a) {
  let smallestDifSum = a.map(x => Math.abs(x - a[0])).reduce((prev, cur) => prev + cur);
  let smallestDifSumNumber = a[0];
  for (let i = 1; i < a.length; i++) {
    const difSum = a.map(x => Math.abs(x - a[i])).reduce((prev, cur) => prev + cur);
    if (smallestDifSum > difSum) {
      smallestDifSum = difSum;
      smallestDifSumNumber = a[i];
    } else if (smallestDifSum === difSum) {
      smallestDifSumNumber = (smallestDifSumNumber > a[i]) ? a[i] : smallestDifSumNumber;
    }
  }
  return smallestDifSumNumber;

  // Forgot that the array was sorted. Saw this solution and realized the sorting means take the midway point.
  // return a[Math.ceil((a.length / 2) - 1)];
}
