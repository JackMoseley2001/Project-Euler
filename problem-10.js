/*
 *
 * https://projecteuler.net/problem=10
 *
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 * Find the sum of all the primes below two million.
 *
 */

 function findAllPrimeNumbers(max = 100) {
   let primes = [];
   for (let currentNumber = 2; currentNumber <= max; currentNumber++) {
     if (isPrimeNumber(currentNumber) === true) {
       primes.push(currentNumber);
     }
   }
   return primes;
 }

 function addArrayNumbers(inpArray) {
   let total = 0;
   for (let i = 0; i < inpArray.length; i++) {
     total += inpArray[i];
   }
   return total;
 }

// Get all prime numbers below 2,000,000
 const allPrimeNumbers = findAllPrimeNumbers(2000000);
 console.log(addArrayNumbers(allPrimeNumbers)); // Answer = 142913828922
