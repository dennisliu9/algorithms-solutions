// eslint-disable-next-line no-unused-vars
function solution(s) {
  /*
  Keep track of starting index
  Check if next index is the same character
      If so, move to next index
      If not, slice up to that index (second parameter is not included in the sliced string)
          With sliced string, create new string with length and the first character (special case: length 1)
          Append to an output string
      If next index doesn't exist, go do the string length + character part once more
  return the output string
  */

  let startIdx = 0;
  let outputString = '';
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== s[i - 1]) {
      const subs = s.slice(startIdx, i);
      outputString += ((subs.length === 1) ? '' : String(subs.length)) + subs[0];
      startIdx = i;
    }
  }
  // Once more to capture the last group
  const lastSubs = s.slice(startIdx);
  outputString += ((lastSubs.length === 1) ? '' : String(lastSubs.length)) + lastSubs[0];

  return outputString;
}
