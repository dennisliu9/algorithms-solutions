// eslint-disable-next-line no-unused-vars
function solution(text) {
  /*
  Using regex, find all continuous groups of word characters
  str.matchall should return an array
  return longest word in array
  */

  // Use regex to find one or more letters, return just the matching strings
  const words = [...text.matchAll(/[a-zA-Z]+/g)].map(x => x[0]);
  const longestWord = words.reduce((prev, cur) => (prev.length < cur.length) ? cur : prev);
  return longestWord;
}
