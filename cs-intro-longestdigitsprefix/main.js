// eslint-disable-next-line no-unused-vars
function solution(inputString) {
    // Find the index (if there is one) of the first letter (.match() finds the first match)
    var outVal = inputString.slice(0, inputString.match('([a-zA-Z])')?.index) ?? '';
    // If the found prefix is all numbers, return it, otherwise the prefix is not only digits and there is no valid prefix
    return (!!outVal.match('^\\d*$')) ? outVal : '';

    // Top solution, directly returns the all digits prefix from the start
    // return inputString.match(/^\d*/)[0]
}
