/*
 *
 * https://projecteuler.net/problem=12
 *
 * The sequence of triangle numbers is generated by adding the natural numbers.
 * So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:
 *
 * 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
 *
 * Let us list the factors of the first seven triangle numbers:
 *
 *  1: 1
 *  3: 1,3
 *  6: 1,2,3,6
 * 10: 1,2,5,10
 * 15: 1,3,5,15
 * 21: 1,3,7,21
 * 28: 1,2,4,7,14,28
 * We can see that 28 is the first triangle number to have over five divisors.

 * What is the value of the first triangle number to have over five hundred divisors?
 *
 */

 function findNextTriangleNumber(index) {
   let triangleNumber = 0;
   for (index; index >= 1; index--) {
     triangleNumber += index;
   }
   return triangleNumber;
 }

function findNumberOfDivisors(number) {
  let divisorCount = 0;

  // Only need to go to the square root of the number.
  for (let div = 1; div <= Math.sqrt(number); div++) {
    if (number % div === 0){
      // Divisor has been found, it must be in a pair so add 2 to the counter
      divisorCount += 2;
    }
  }
  return divisorCount;
}

/*
 * This has some extra functionality to allow
 * for you to change how many divisors if you so wish
 */
function findTriangleNumber(divisorNumber) {
  let divisorCount = 1;
  let currentTriangleNumber = 1;
  for (let index = 2; divisorCount < divisorNumber; index++) {
    currentTriangleNumber = findNextTriangleNumber(index);
    divisorCount = findNumberOfDivisors(currentTriangleNumber);
  }
  return currentTriangleNumber;
}

console.log(findTriangleNumber(500)); // Answer = 76576500
