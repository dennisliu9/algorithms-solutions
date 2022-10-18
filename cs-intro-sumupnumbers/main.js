// eslint-disable-next-line no-unused-vars
function solution(inputString) {
  /*
  Use regex to capture all continuous digit characters into an array
  Sum up values in the array with reduce()
  (In cases where no numbers are found, return 0 instead)
  */

  const foundNumbers = [...inputString.matchAll(/\d+/g)].map(x => Number(x[0]));
  return (foundNumbers.length === 0) ? 0 : foundNumbers.reduce((prev, cur) => prev + cur);
}
