// eslint-disable-next-line no-unused-vars
function solution(upSpeed, downSpeed, desiredHeight) {
  // This one didn't work out

  // const wholeDays = Math.floor(desiredHeight / (upSpeed - downSpeed));
  // return (desiredHeight % (upSpeed - downSpeed) <= downSpeed) ? wholeDays : wholeDays + 1;

  // Top solution on CodeSignal
  // return upSpeed > desiredHeight ? 1 : Math.ceil((desiredHeight - upSpeed) / (upSpeed - downSpeed)) + 1;

  // Simple approach, loop through
  let currentHeight = 0;
  let currentDays = 0;
  for (let i = 0; i < Math.ceil(desiredHeight / (upSpeed - downSpeed)); i++) {
    currentDays++;
    currentHeight += upSpeed;
    if (currentHeight >= desiredHeight) return currentDays;
    currentHeight -= downSpeed;
  }
}
