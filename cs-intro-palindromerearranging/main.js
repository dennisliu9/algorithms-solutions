// eslint-disable-next-line no-unused-vars
function solution(inputString) {
  /*
  If length of inputString is even
      Every character must be present in inputString an even number of times
  If length of inputString is odd
      Only one character can be odd
  */

  const inputObj = {};
  for (let i = 0; i < inputString.length; i++) {
    const currentChar = inputString[i];
    if (!inputObj[currentChar]) {
      inputObj[currentChar] = 1;
    } else {
      inputObj[currentChar]++;
    }
  }

  if (inputString.length % 2 === 0) {
    // even number of chars
    let outputBool = false;
    for (const keys in inputObj) {
      if (inputObj[keys] % 2 !== 0) {
        return outputBool;
      }
    }
    outputBool = true;
    return outputBool;
  } else if (inputString.length % 2 !== 0) {
    // odd number of chars
    let outputBool = false;
    let oddCounter = 0;
    for (const keys in inputObj) {
      if (inputObj[keys] % 2 !== 0) {
        oddCounter++;
      }
      if (oddCounter > 1) {
        return outputBool;
      }
    }
    outputBool = true;
    return outputBool;
  }
}
