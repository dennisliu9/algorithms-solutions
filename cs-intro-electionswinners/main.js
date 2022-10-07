// eslint-disable-next-line no-unused-vars
function solution(votes, k) {
  /*
  Find the max of the array
  Find the number of elements in votes that are > (max - k)

  If there are no votes left (k=0) and there is one leader, that one is the winner (force a 1)
  If there are no votes left and there are multiple leaders, then return 0 as usual
  */

  const currentLeader = Math.max(...votes);
  let potentialWinners = 0;
  let numOfCurrentLeaders = 0;
  for (let i = 0; i < votes.length; i++) {
    if (votes[i] > (currentLeader - k)) {
      potentialWinners++;
    }
    if (votes[i] === currentLeader) {
      numOfCurrentLeaders++;
    }
  }
  if (potentialWinners === 0 && numOfCurrentLeaders === 1) {
    return 1;
  }
  return potentialWinners;
}
