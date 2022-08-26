// eslint-disable-next-line no-unused-vars
function solution(s) {
  const seenChars = [];
  for (let i = 0; i < s.length; i++) {
    if (!seenChars.includes(s[i])) {
      seenChars.push(s[i]);
    }
  }
  return seenChars.length;
}
