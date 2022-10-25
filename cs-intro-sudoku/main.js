// eslint-disable-next-line no-unused-vars
function solution(grid) {
  /*
  After reviewing the top JavaScript answer, I would modify my code to check
  that product of numbers is 362880 instead of doing string comparisons. May be
  slightly more "optimal."

  Loop from indexes 0 to 8 (i)
      Check if array at index i ("row at i") is valid
      Check if elements at index i ("column at i") is valid
  Extract out 3x3 grids and check validity
      first grid is 0 to 2, 0 to 2
      second is 3 to 5, 0 to 2
      third is 6 to 8, 0 to 2
      (find all combinations of 0-2, 3-5, 6-8)

  (Check Validity)
      Extract out all elements into an array
      sort, then join
      Check that joined string equals '123456789'
  */

  // check row and column
  for (let i = 0; i < 9; i++) {
    // Check i-th row and i-th element of each row (i-th "column")
    if (grid[i].slice().sort().join('') !== '123456789' || grid.map(x => x[i]).sort().join('') !== '123456789') {
      return false;
    }
  }

  // check 3x3 grids
  // input data size is expected to be the same, problem is constant time
  for (let x = 0; x < 9; x += 3) {
    for (let y = 0; y < 9; y += 3) {
      const gridArray = [];
      for (let i = y; i < y + 3; i++) {
        gridArray.push(grid[i].slice(x, x + 3));
      }
      if (gridArray.flat().sort().join('') !== '123456789') {
        return false;
      }
    }
  }

  return true;
}
