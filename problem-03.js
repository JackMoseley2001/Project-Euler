/*
 *
 * https://projecteuler.net/problem=3
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143?
 *
*/

function findPrimeFactors(number) {
  let primes = [];
  let div = 2;
  let sqrtNumber = Math.sqrt(number);

  while (number !== 0 && div <= sqrtNumber) {
    while (number % div === 0) {
      number = number / div;
      primes.push(div);
    }
    div += 1;
  }

  return primes;

}

function largestNumberInArray(arr) {
  let largest = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > largest){
      largest = arr[index];
    }
  }
  return largest
}

let primes = findPrimeFactors(600851475143);
console.log(largestNumberInArray(primes)); // Answer = 6857
