// eslint-disable-next-line no-unused-vars
function solution(inputString) {
  /*
  Regex problem, match a pattern
  Any number or letter within A-F two times, followed by a hypen (5 times) and then any number or letter within A-F two times again
  Also indicate beginning and end of string
  (^[\dA-F]{2}[-]){5}[\dA-F]{2}$
  */

  const regex = /^([\dA-F]{2}[-]){5}[\dA-F]{2}$/g;
  return !!inputString.match(regex);
}
