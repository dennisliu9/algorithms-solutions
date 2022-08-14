// eslint-disable-next-line no-unused-vars
function solution(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map(element => (element === elemToReplace) ? substitutionElem : element);
}
