/*
 *
 * https://projecteuler.net/problem=1
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 *
*/

function addMultiples(n1, n2, below) {
  let sum = 0;
  for (let number = 0; number < below; number++) {
    if (number % n1 === 0 || number % n2 === 0) {
      sum += number;
    }
  }
  return sum;
}

console.log(addMultiples(3, 5, 1000)) // Answer: 233168
