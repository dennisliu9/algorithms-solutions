// eslint-disable-next-line no-unused-vars
function solution(address) {
  // Assuming address is a valid email address, the domain should be after the last @
  return address.split('@').slice(-1)[0];
}
