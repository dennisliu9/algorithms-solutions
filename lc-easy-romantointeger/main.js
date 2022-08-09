/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanGuide = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let i = 0;
  let outSum = 0;
  const strLength = s.length;
  while (i < strLength) {
    let currentNumber = romanGuide[s[i]];
    const nextNumber = romanGuide[s[i + 1]];
    if (currentNumber < nextNumber) {
      // the current number/digit should be inclusive of the next one as well (IX is "one digit")
      currentNumber = nextNumber - currentNumber;
      // double increment
      i++;
    }
    outSum += currentNumber;
    i++;
  }
  return outSum;
};
