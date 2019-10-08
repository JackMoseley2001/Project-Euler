/*
 *
 * https://projecteuler.net/problem=4
 *
 * A palindromic number reads the same both ways.
 * The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 *
*/

function palindromeProduct(min = 0, max =1000) {
  let largestNumber = 0;
  for (let i = min; i<max; i++) {
    for (let j = min; j<max; j++) {
      let multipliedNumber = i * j;
      let flippedNumber = flipNumber(multipliedNumber);
      if (multipliedNumber === flippedNumber) {
        if (flippedNumber > largestNumber) {
          largestNumber = flippedNumber;
        }
      }
    }
  }
  return largestNumber;
}

function flipNumber(number) {
  let strNumber = String(number);
  let outputNumber = "";
  for (let i = strNumber.length - 1; i >= 0; i--) {
    outputNumber += strNumber[i];
  }
  return Number(outputNumber);
}

console.log(palindromeProduct(0,1000)); // Answer = 906609
