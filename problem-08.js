/*
 *
 * https://projecteuler.net/problem=8
 *
 * The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.

   73167176531330624919225119674426574742355349194934
   96983520312774506326239578318016984801869478851843
   85861560789112949495459501737958331952853208805511
   12540698747158523863050715693290963295227443043557
   66896648950445244523161731856403098711121722383113
   62229893423380308135336276614282806444486645238749
   30358907296290491560440772390713810515859307960866
   70172427121883998797908792274921901699720888093776
   65727333001053367881220235421809751254540594752243
   52584907711670556013604839586446706324415722155397
   53697817977846174064955149290862569321978468622482
   83972241375657056057490261407972968652414535100474
   82166370484403199890008895243450658541227588666881
   16427171479924442928230863465674813919123162824586
   17866458359124566529476545682848912883142607690042
   24219022671055626321111109370544217506941658960408
   07198403850962455444362981230987879927244284909188
   84580156166097919133875499200524063689912560717606
   05886116467109405077541002256983155200055935729725
   71636269561882670428252483600823257530420752963450

 * Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?
 *
 */

 function findLargestProduct(inpNum, adjacentNumbers) {
   let number = String(inpNum);
   let beginningIndex = 0;
   let biggestProduct = 0;

   while (beginningIndex + adjacentNumbers <= number.length - 1) {
     let currentProduct = 1;
     for (let index = beginningIndex; index < beginningIndex + adjacentNumbers; index++) {
       currentProduct *= Number(number[index]);
     }
     if (currentProduct > biggestProduct) {
       biggestProduct = currentProduct;
     }
     beginningIndex += 1;
   }

   return biggestProduct;

 }

 console.log(findLargestProduct('731671765313306249192251196744265747423553491949349698352031277450632623957831801698480186947885184385861560789112949495459501737958331952853208805511125406987471585238630507156932909632952274430435576689664895044524452316173185640309871112172238311362229893423380308135336276614282806444486645238749303589072962904915604407723907138105158593079608667017242712188399879790879227492190169972088809377665727333001053367881220235421809751254540594752243525849077116705560136048395864670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450', 13)); // Answer = 23514624000
