/* eslint-disable no-unused-vars */
// global variable to append to, important because solution() will be called recursively
var outDigits = '';

function solution(product) {
  /*
  Each digit is from 2 to 9, so product needs to be broken down into factors of these
      0 would make any set of digits a 0 product, so it can be excluded (unless product = 0, in which case the answer is 10)
      1 doesn't change the product of a set of digits, so it can be excluded (unless product = 1, in which case the answer is 1)
      (If product is between 1 and 9, return the number itself)
  To make the smallest integer, smallest digits go into the largest places (i.e. they are the first digits of the number like 234 rather than 432)
  Create an empty string or array to store the digits as they are determined
  Loop from 2 to 9
      Get remainder (%) of product and the loop number
          If remainder is not 0, move to next number in loop
          If remainder is 0
              Add the loop number to the array/string of digits
              check if (product / loopNumber) has more than one digit (>9)
                  If so, loop through 2-9 again for (product / loopNumber) until there are only single digit factors left (recursion)
                  If not, add that number to the array/string of digits
                      Consolidate 2's and 3's
                      return the "number-fied" version of the string/array of digits

  */
  // Special cases
  if (product === 0) {
    return 10;
  }
  if (product < 10) {
    return product;
  }

  for (let i = 2; i <= 9; i++) {
    if (product % i !== 0) {
      continue;
    }

    outDigits += String(i);

    const remainder = product / i;
    if (remainder > 9) {
      // if remainder has more than one digit, call the process again
      return solution(remainder);
    } else {
      // if remainder is a single digit, we've reached the end
      outDigits += String(remainder);
      return Number(consolidate(outDigits).join(''));
    }
  }
  // If loop is exhausted, cannot be divided by any single digits, return -1
  return -1;
}

function consolidate(numString) {
  // Function to consolidate multiples of 2 and 3 into single digits where possible
  // reduce 3's into 9's
  // reduce 3x 2's into 8's
  // reduce 3 and 2's into 6's
  // reduce 2x 2's into 4's

  // Change string to array to use array methods
  const numArray = numString.split('');

  while (numArray.filter(x => x === '3').length >= 2) {
    numArray.splice(numArray.indexOf('3'), 2, 9).sort();
  }

  while (numArray.filter(x => x === '2').length >= 3) {
    numArray.splice(numArray.indexOf('2'), 3, 8).sort();
  }

  while (numArray.filter(x => x === '2').length >= 1 && numArray.filter(x => x === '3').length >= 1) {
    numArray.splice(numArray.indexOf('2'), 1);
    numArray.splice(numArray.indexOf('3'), 1, 6).sort();
  }

  while (numArray.filter(x => x === '2').length >= 2) {
    numArray.splice(numArray.indexOf('2'), 2, 4).sort();
  }

  return numArray.sort();
}
