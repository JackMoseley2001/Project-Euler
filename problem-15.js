/*
 *
 * https://projecteuler.net/problem=15
 *
 * Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down,
 * there are exactly 6 routes to the bottom right corner.
 * How many such routes are there through a 20×20 grid?
 *
 */

 /*
  * I'll be honest and say I had no idea how to solve this...
  * I enlisted the help of Google in which I found a video which gave their idea
  * of putting this problem into binary...
  *
  * 0 = down
  * 1 = right
  *
  * This then means that the solution is to find every possible combination of 1's and 0's
  * called permutations: https://math.stackexchange.com/questions/286437/arrangement-of-binary-bits
  * by using the formular on this site (and so that there's some sort of challenge I'm going to create my own factorial function)
  * the solution can be found below
  *
  */

  function factorial(n) {
    if (n >= 1) {
      return n * factorial(n - 1);
    } else {
      return 1;
    }
  }

function findRoutes(gridSize) {
  // E.g. Rows = 2 -> Columns = 2 -> Grid Size = 4
  gridSize = gridSize * 2;
  let factorialOfHalf = factorial(gridSize / 2);
  return factorial(gridSize) / (factorialOfHalf * factorialOfHalf);
}

console.log(findRoutes(20));
