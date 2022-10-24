// eslint-disable-next-line no-unused-vars
function solution(code) {
  /*
  Assuming code is a valid binary string (the length is a multiple of 8)

  Loop through code, slicing 8 characters at a time and incrementing the iterator by 8
      Add slices to an array

  (function to convert 8 binary bits to a character)
  Split bit string into an array of 8 bit elements
  Using map( (x, index) => ... ), multiply each element by (2^(7 - index))
  Then use reduce() to sum up the multiply values
  Return String.fromCharcode(...[array of summed])

  Apply function to each element in the array of slices
  Join all the characters together and return result
  */

  function bitsToChar(bitString) {
    const bitArray = bitString.split('');
    console.log(bitArray)
    const asciiCode = bitArray
      .map((x, idx) => x * 2**((bitString.length - 1) - idx)) // bitString.length - 1 can be replaced with 7 if 8 bit strings are always supplied
      .reduce((prev, cur) => prev + cur);
    console.log(asciiCode)
    return String.fromCharCode(asciiCode)
  }

  const charsAsBits = [];
  for (let i = 0; i <= code.length - 8; i += 8) {
    charsAsBits.push(code.slice(i, i + 8))
  }

  return charsAsBits.map(x => bitsToChar(x)).join('');
}
