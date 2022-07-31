// eslint-disable-next-line no-unused-vars
function solution(inputArray) {
  // Sort inputArray
  // Note: Sorting is not numerical! 1000 comes after 10 but before 20!
  // Pass a comparison function as an argument. Return >0 means return a AFTER b, <0 means return a BEFORE b, 0 means keep order
  // Loop through from i = 2 to inputArray.max() (or index -1 since it's sorted)
  // if i is not in inputArray and if no numbers are divisible by i
  // return i
  // if no numbers below inputArray.max() work, return the max + 1

  const sortedArray = inputArray.sort((a, b) => (a < b) ? -1 : 1);
  for (let i = 1; i < sortedArray.slice(-1)[0]; i++) {
    if (!sortedArray.includes(i)) {
      if (!sortedArray.reduce((previousValue, currentValue) => previousValue || (currentValue % i === 0), false)) {
        return i;
      }
    }
  }
  return sortedArray.slice(-1)[0] + 1;
}
