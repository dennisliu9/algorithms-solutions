// eslint-disable-next-line no-unused-vars
function solution(image) {
  /*
    If a number has 8 surrounding numbers, get the average of the 9
    If a number doesn't have 8 surrounding numbers, it will be removed

    All numbers in the first and last rows will be removed
    All numbers in the first and last columns (indices) will be removed

    Create an empty array to hold the rows
    for each rowIdx from 1 (2nd) to (length - 1)
        Create an array to hold the averages for this row
        for each colIdx from 1 (2nd) to (length - 1)
            Find the average of
                (rowIdx - 1, colIdx - 1), (rowIdx - 1, colIdx), (rowIdx - 1, colIdx + 1)
                (rowIdx, colIdx - 1), (rowIdx, colIdx), (rowIdx, colIdx + 1)
                (rowIdx + 1, colIdx - 1), (rowIdx + 1, colIdx), (rowIdx + 1, colIdx + 1)
            Push this value into the averages array
        Push this averages array into the encompassing array
    */

  const blurred = [];
  // iterate through rows
  for (let rowIdx = 1; rowIdx < image.length - 1; rowIdx++) {
    const rowAverages = [];
    for (let colIdx = 1; colIdx < image[rowIdx].length - 1; colIdx++) {
      let cellSum = 0;
      for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
        for (let colOffset = -1; colOffset <= 1; colOffset++) {
          cellSum += image[rowIdx + rowOffset][colIdx + colOffset];
        }
      }
      rowAverages.push(Math.floor(cellSum / 9));
    }
    blurred.push(rowAverages);
  }
  return blurred;
}
