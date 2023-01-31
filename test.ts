function BracketCombinations(num) {
  // By Doing sum search i found a formula that can achieve what this problem want
  // called Catalan number (Catalan Formula)
  // where catalan formula is ==> (2n!) / (n+1)! n!

  // first i will calculate the factorial of the num
  let factorial = (n) => {
    let k = 1;
    for(var i = n; i >= 1; i--){
      k *= i;
    }
    return k;
  }
  
  // formula going down
  const result = (factorial(2 * num)) / ((factorial(num + 1)) * (factorial(num)));
  return result; 
}
   
// keep this function call here 
console.log(BracketCombinations(readline()));
