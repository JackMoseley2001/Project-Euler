/*
 *
 * https://projecteuler.net/problem=14
 *
 * The following iterative sequence is defined for the set of positive integers:
 *
 * n → n/2 (n is even)
 * n → 3n + 1 (n is odd)
 *
 * Using the rule above and starting with 13, we generate the following sequence:
 *
 * 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
 * It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
 * Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
 *
 * Which starting number, under one million, produces the longest chain?
 *
 * NOTE: Once the chain starts the terms are allowed to go above one million.
 *
 */

function findLargestCollatzSequence() {

  // I'm using an object here as it keeps all the related variables together
  let largestChain = {
    startNumber: 13,
    chainLength: 10
  };

  // This stays the same until a new chain is needed
  let currentStartNumber = 13;
  // This changes until the last chain number = 1
  let chainNumber = currentStartNumber;
  let currentNumberOfTerms = 0;

  while (currentStartNumber < 1000000) {

    // This ASSUMES that each chain of Collatz Sequence ends with 1...
    if (chainNumber === 1) {
      // If the chain has more than the longest current one
      if (currentNumberOfTerms > largestChain.chainLength) {
        largestChain.startNumber = currentStartNumber;
        largestChain.chainLength = currentNumberOfTerms;
      }
      // Get the next starting number
      currentStartNumber += 1;
      // Reset all the other variables to the beginning
      currentNumberOfTerms = 0;
      chainNumber = currentStartNumber;
    } else {
      // If the current chain number is even
      if (chainNumber % 2 === 0) {
        // Divide it by two
        chainNumber /= 2;
        // Increase the number of terms in the sequence
        currentNumberOfTerms += 1
      }
      // The current chain number is odd
      else {
        // Multiply the chain number by 3 and add 1 (should make the number even)
        chainNumber = 3 * chainNumber + 1;
        // Increase the number of terms in the sequence
        currentNumberOfTerms += 1
      }
    }

  }

  return largestChain;
}

console.log(findLargestCollatzSequence().startNumber); // Answer = 837799
