/*
 *
 * https://projecteuler.net/problem=7
 *
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 *
 * What is the 10 001st prime number?
 *
 */

 function isPrimeNumber(number) {
   for(let div = 2; div <= Math.sqrt(number); div++) {
     if(number % div === 0) {
       return false;
     }
   }
   return true;
 }

 function findPrimeNumber(position = 1) {
   let numberOfPrimesFound = 1;
   let currentNumber = 2;

   while(numberOfPrimesFound !== position) {
     if(numberOfPrimesFound !== position) {
       currentNumber += 1;
     }
     if(isPrimeNumber(currentNumber) === true) {
       numberOfPrimesFound += 1;
     }
   }

   return currentNumber;

 }

 console.log(findPrimeNumber(10001)); // Answer = 104743
