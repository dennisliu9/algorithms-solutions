// eslint-disable-next-line no-unused-vars
function solution(deposit, rate, threshold) {
  // deposit * (1 + (rate/100))^x >= threshold (round up to next integer year)
  // (1 + (rate/100))^x >= threshold/deposit
  // log of both sides
  // x * log(1+(rate/100)) = log(threshold/deposit)
  // x = log(threshold/deposit) / log(1+(rate/100))
  return Math.ceil(Math.log(threshold / deposit) / Math.log(1 + (rate / 100)));
}
