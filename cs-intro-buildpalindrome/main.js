// eslint-disable-next-line no-unused-vars
function solution(st) {
  /*
  Check if it's a palindrome
      If it's length 1, return the string (it's a palindrome already)
      If it's even length, split in half, reverse one of the halves, and check equality
      If it's odd length, exclude the middle character and repeat
  If not, see if adding 1 character makes it a palindrome
  If not, see if adding 2 characters makes it a a palindrome
      Each time, add from the end of the string
  Continue until you add all the characters to make it a palindrome (this will always be a palindrome)

  abcdc -> abcdc(ba)
  ababab -> ababab(a)
  abba -> abba
  abaa -> abaa(ba)
  aaaaba -> aaaaba(aaa)
  abc -> abc(ba)
  kebab -> kebab(ek)

  Two/three extreme cases
  1. Add a single character and it's a palindrome
  2. Add all characters (reversed) and it's a palindrome
  3. (It's already a palindrome)

  Write code that goes from scenario 1 to scenario 2.

  */

  function isPalindrome(str) {
    if (str.length === 1) {
      return true;
    } else if (str.length % 2 === 0) {
      return str.substring(0, str.length / 2) === str.substring(str.length / 2).split('').reverse().join('');
    } else if (str.length % 2 === 1) {
      return str.substring(0, Math.floor(str.length / 2)) === str.substring(Math.ceil(str.length / 2)).split('').reverse().join('');
    } else {
      return false;
    }
  }

  if (isPalindrome(st)) {
    return st;
  }
  for (let i = 0; i < st.length; i++) {
    const stringToAppend = st.substring(0, i + 1).split('').reverse().join('');
    const candidateString = st + stringToAppend;
    if (isPalindrome(candidateString)) {
      return candidateString;
    }
  }
}
