/*
 *
 * https://projecteuler.net/problem=6
 *
 * The sum of the squares of the first ten natural numbers is,
 * 12 + 22 + ... + 102 = 385
 *
 * The square of the sum of the first ten natural numbers is,
 * (1 + 2 + ... + 10)2 = 552 = 3025
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
 *
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 *
 */

 function sumOfSquareDifference(upToNumber = 100) {
   let totalSumSquared = 0
   let totalNumberSquared = 0

   for(let i = 0; i<=upToNumber; i++) {
     totalNumberSquared += i * i;
   }

   for(let i = 0; i<=upToNumber; i++) {
     totalSumSquared += i;
   }

   return (totalSumSquared * totalSumSquared) - totalNumberSquared;
 }

 console.log(sumOfSquareDifference(100)); // Answer = 25164150
