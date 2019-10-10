/*
 *
 * https://projecteuler.net/problem=16
 *
 * 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 *
 * What is the sum of the digits of the number 2^1000?
 *
 */

function addDigits(num) {
  let strNumber = String(BigInt(num));
  let sum = 0;
  for (let index = 0; index < strNumber.length; index++) {
    sum += Number(strNumber[index]);
  }
  return sum;
}

let number = Math.pow(2,1000);
console.log(addDigits(number));
