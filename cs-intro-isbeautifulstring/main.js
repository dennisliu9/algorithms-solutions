// eslint-disable-next-line no-unused-vars
function solution(inputString) {
  // Simple method: iterate through string, put values into a dictionary (object)
  // then iterate through dictionary checking charCodes and counts
  // inputString is at most 50 characters long, so simple method should complete within 4 seconds

  const countsObj = {};
  for (let i = 0; i < inputString.length; i++) {
    const currentLetterCode = inputString[i].charCodeAt(0);
    if (Object.prototype.hasOwnProperty.call(countsObj, currentLetterCode)) {
      countsObj[currentLetterCode]++;
    } else {
      countsObj[currentLetterCode] = 1;
    }
  }

  const keysAsNumbers = Object.keys(countsObj).map(element => Number(element));
  const startingLetter = Math.min(...keysAsNumbers);

  // Needs to start with a, otherwise no other letter can exist in a beautiful string
  if (startingLetter !== 'a'.charCodeAt(0)) return false;

  for (let i = startingLetter + 1; i < Math.max(...keysAsNumbers) + 1; i++) {
    // If there is a gap between the starting letter and the last letter, false
    if (!countsObj[i]) return false;
    if (countsObj[i] > countsObj[i - 1]) return false;
  }
  return true;
}
