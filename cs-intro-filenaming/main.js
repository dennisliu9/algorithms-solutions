// eslint-disable-next-line no-unused-vars
function solution(names) {
  /*
  Create empty output array
  Grab an element from names
  While the current element is in the output array, modify current element to have (k) appended
      When modified current element is no longer in the output array, add it
  Grab next element
  return output array
  */

  const outArray = [];

  for (let i = 0; i < names.length; i++) {
    let consideredName = names[i];
    let k = 1;

    while (outArray.includes(consideredName)) {
      consideredName = names[i].concat(`(${k})`);
      k++;
    }
    outArray.push(consideredName);
  }
  return outArray;
}
