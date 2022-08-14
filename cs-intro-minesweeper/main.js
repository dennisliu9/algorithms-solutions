// eslint-disable-next-line no-unused-vars
function solution(matrix) {
  // Naive solution
  const outMatrix = [];
  const offsets = [-1, 0, 1];
  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
    const newRow = [];
    for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx++) {
      let mineCount = 0;
      for (let rowOffsetIdx = 0; rowOffsetIdx < offsets.length; rowOffsetIdx++) {
        for (let colOffsetIdx = 0; colOffsetIdx < offsets.length; colOffsetIdx++) {
          if (offsets[rowOffsetIdx] === 0 && offsets[colOffsetIdx] === 0) {
            continue;
          }
          if (rowIdx + offsets[rowOffsetIdx] < 0 || colIdx + offsets[colOffsetIdx] < 0) {
            continue;
          }
          if (rowIdx + offsets[rowOffsetIdx] >= matrix.length || colIdx + offsets[colOffsetIdx] >= matrix[rowIdx].length) {
            continue;
          }
          if (matrix[rowIdx + offsets[rowOffsetIdx]][colIdx + offsets[colOffsetIdx]]) {
            mineCount++;
          }
        }
      }
      newRow.push(mineCount);
    }
    outMatrix.push(newRow);
  }
  return outMatrix;
}
