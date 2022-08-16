// eslint-disable-next-line no-unused-vars
function solution(name) {
  const regexPat = /^[a-zA-z]{1}[\w]*$/;
  return !!name.match(regexPat);
}
