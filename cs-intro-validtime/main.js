// eslint-disable-next-line no-unused-vars
function solution(time) {
  /*
  Split time string on :
  Check if first element (converted to number) is between 0 and 24 (not inclusive) and second element is between 0 and 60 (not inclusive)
  */
  const hAndM = time.split(':').map(x => Number(x));

  // Assuming we will never see a negative hours or minutes time, the latter two conditions can be removed
  return (hAndM[0] < 24 && hAndM[1] < 60 && hAndM[0] >= 0 && hAndM[1] >= 0);
}
