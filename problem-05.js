/*
 *
 * https://projecteuler.net/problem=5
 *
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 *
 */

/*
 * TODO: This function does not work or work as expected.
 */
function smallestMultiple() {

  let number = 2521;

  let isAllDivisible = false;

  while(isAllDivisible === false) {

    let count = 0;

    for(let div = 1; div <= 20; div++) {
      console.log('Number % Div = ' + number % div);
      if(number % div === 0) {
        count += 1;
      } else {
        break;
      }
    }

    console.log('Number: ' + number + ' valid for ' + count + ' out of 20');

    if (count === 20) {
      isAllDivisible = true;
      return number;
    } else {
      number += 1;
    }

  }

}

console.log('This is the answer: ' + smallestMultiple()); // Answer = CURRENTLY UNKNOWN
