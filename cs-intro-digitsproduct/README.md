# CodeSignal - Intro - 56. digitsProduct

## Problem

Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

## Example

For product = 12, the output should be
solution(product) = 26;
For product = 19, the output should be
solution(product) = -1.


## Input/Output

[execution time limit] 4 seconds (js)

[input] integer product

Guaranteed constraints:
0 ≤ product ≤ 600.

[output] integer

## Personal Notes

Top solutions are worth studying:

```js
// devsnaked
function solution(p, f = []) {
    if(p === 0) return 10;
    if(p === 1) return 1;
    for(let i = 9; i > 1; i--){
        while(p%i === 0){
            f.unshift(i)
            p /= i;
        }
    }
    return p > 1 ? -1 : parseInt(f.join(''))
}

// jenna_s
function solution(product) {

    if(product === 0) return 10;
    if(product === 1) return 1;

    let factors = [];

    for(let factor = 9; factor > 1; factor--){
        while(product % factor === 0){
            factors.push(factor);
            product /= factor;
        }
    }

    if(product > 1){
        return -1;
    } else {
        return parseInt(factors.reverse().join(''));
    }
}
```
