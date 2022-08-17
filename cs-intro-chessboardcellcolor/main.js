// eslint-disable-next-line no-unused-vars
function solution(cell1, cell2) {
  /*
    Get distance between letters using the difference in charCodeAt values
    If distance between letters + distance between numbers is even, they're the same color
    */
  const c1Coords = cell1.split('');
  const c2Coords = cell2.split('');
  c1Coords[0] = c1Coords[0].charCodeAt(0);
  c2Coords[0] = c2Coords[0].charCodeAt(0);

  return ((c2Coords[0] - c1Coords[0]) + (c2Coords[1] - c1Coords[1])) % 2 === 0;
}
