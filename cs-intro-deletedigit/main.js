// eslint-disable-next-line no-unused-vars
function solution(n) {
  /*
  There are at most 7 digits, so looping through each digit should be performant enough
  Convert number to string
  Loop through characters in string
  Remove character and convert resulting string back to number
  If this number is larger than the previous largest number, set to this new number
  return largest number
  */

  const nStr = String(n);
  let outNum;

  for (let i = 0; i < nStr.length; i++) {
    const slicedNum = Number(nStr.slice(0, i) + nStr.slice(i + 1));
    outNum = (outNum < slicedNum || outNum === undefined) ? slicedNum : outNum;
  }

  return outNum;
}
