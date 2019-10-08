/*
 *
 * https://projecteuler.net/problem=9
 *
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

 * (a*a) + (b*b) = (c*c)
 * For example, (3*3) + (4*4) = 9 + 16 = 25 = (5*5).

 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 *
 */

 /*
  * TODO: This function does not work or work currently.
  */

function findPythagoreanTripletProduct() {
  // The number you want it to add to
  let totalSum = 1000;

  // A can only be a maximum of 1/3 of the equation
  for (let a = 1; a <= totalSum / 3; a++) {
    // B > A therefore start from a +1 - can only be a maximum of 1/2 of the equation
    for (let b = a + 1; b <= totalSum / 2; b++) {
      // C is whatever is left over from the total sum, a and b
      let c = totalSum - a - b;
      // If pythagoras works (a^2 + b^2 = c^2)
      if (a*a + b*b === c*c) {
        // Return the product
        return a*b*c;
      }
    }
  }

}

console.log(findPythagoreanTripletProduct()); // Answer = 31875000
