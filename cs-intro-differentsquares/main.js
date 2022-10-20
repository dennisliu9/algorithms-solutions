// eslint-disable-next-line no-unused-vars
function solution(matrix) {
  /*
  Loop through matrix, from i = 0 to i = matrix.length - 2
      Loop through inner array, from j = 0 to j = innerArray.length - 2
      Assemble square matrix as a string (elements a, b, c, d => 'abcd')
      Store string in an array if new, otherwise move on
          (Compare string equivalency of new strings against array's strings or use array.includes())
  return length of the array
  */

  const uniqueStrings = [];
  for (let i = 0; i < matrix.length - 1; i++) {
    const innerArray = matrix[i];
    const nextInner = matrix[i + 1];
    for (let j = 0; j < innerArray.length - 1; j++) {
      const squareStr = String(innerArray[j]) + String(innerArray[j + 1]) + String(nextInner[j]) + String(nextInner[j + 1]);
      if (!uniqueStrings.includes(squareStr)) {
        uniqueStrings.push(squareStr);
      }
    }
  }
  return uniqueStrings.length;
}
