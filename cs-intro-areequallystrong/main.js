// eslint-disable-next-line no-unused-vars
function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  const yourArms = [yourLeft, yourRight].sort();
  const friendsArms = [friendsLeft, friendsRight].sort();

  return !!((yourArms[0] === friendsArms[0] && yourArms[1] === friendsArms[1]));
}
