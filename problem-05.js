/*
 *
 * https://projecteuler.net/problem=5
 *
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 *
 */
 
function smallestMultiple(lowest, highest) {

  let number = 1;
  let numberFound = false;

  while (numberFound === false) {
    if (isAllDivisible(number, lowest,highest) === true) {
      return number;
    } else {
      number += 1;
    }
  }

}

function isAllDivisible(number, lowest, highest) {
  for (let div = lowest; div <= highest; div++) {
    if (number % div !== 0) {
      return false;
    }
  }
  return true;
}

console.log(smallestMultiple(1,20)); // Answer = 232792560
