// eslint-disable-next-line no-unused-vars
function solution(inputString) {
  const plusOneArray = [];
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === 'z') {
      plusOneArray.push('a'.charCodeAt(0));
      continue;
    }
    const currentCharCode = inputString.charCodeAt(i);
    plusOneArray.push(currentCharCode + 1);
  }
  return String.fromCharCode(...plusOneArray);
}
