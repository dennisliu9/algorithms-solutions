// eslint-disable-next-line no-unused-vars
function solution(n) {
  /*
  Help from: https://www.youtube.com/watch?v=-tgIgH-ZY2U
  My initial solution using help from the video filled out all numbers except the last.
  My (ugly) solution was to simply run another iteration but only alter a value if it hadn't been changed yet (otherwise break out of the loop).

  There will be n arrays in the output array
  Each array will have n elements

  Prepopulate n x n matrix with 0's
  Set the value of the elements from left-to-right, then top-to-bottom, then right-to-left, then bottom-to-top
      Then repeat without overlapping previous rows and columns
  Create variables to keep track of the boundaries
  At the end of an iteration through a row/column, update the appropriate boundary variable
  On each iteration, check that the iterator has not exceeded the boundary
  While the boundaries have not overlapped each other, there are still values to populate
  */

  const outMatrix = [];
  for (let i = 0; i < n; i++) {
    outMatrix[i] = new Array(n).fill(0);
  }

  let cellNum = 1;

  // define variables that indicate which rows/columns are available to populate
  let topRow = 0;
  let bottomRow = n - 1;
  let rightCol = n - 1;
  let leftCol = 0;
  // once the row boundaries are on top of/cross over each other, we should be done
  while (topRow <= bottomRow && leftCol <= rightCol) {
    // Start with LtR
    // c is column index
    for (let c = leftCol; c < n; c++) {
      if (outMatrix[topRow][c] !== 0) break;
      outMatrix[topRow][c] = cellNum;
      cellNum++;
    }
    // Once we reach here, LtR is over and a top row is populated so update the boundary
    topRow++;

    // Then do TtB
    // r is row index
    for (let r = topRow; r < n; r++) {
      // console.log('r: ', r);
      // console.log('outMatrix: ', outMatrix)
      if (outMatrix[r][rightCol] !== 0) break;
      outMatrix[r][rightCol] = cellNum;
      cellNum++;
    }
    rightCol--;

    // Then do RtL
    for (let c = rightCol; c >= leftCol; c--) {
      if (outMatrix[bottomRow][c] !== 0) break;
      outMatrix[bottomRow][c] = cellNum;
      cellNum++;
    }
    bottomRow--;

    // Then do BtT
    for (let r = bottomRow; r >= topRow; r--) {
      if (outMatrix[r][leftCol] !== 0) break;
      outMatrix[r][leftCol] = cellNum;
      cellNum++;
    }
    leftCol++;
  }

  return outMatrix;
}
