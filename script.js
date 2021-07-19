var max = -Infinity;
console.log(max);
var sum = 4 + 5; // adding two numbers
var difference = 9 - 4; // subtracting two numbers
var product = 4 * 5; // multiplying two numbers
var quotient = 20 / 4;

console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);
console.log(4 + undefined);
var remainder = 9 % 2;
console.log(remainder);


function addOne(num) {
  return num + 1;
}

var incremented = addOne(6); // this line calls the function with an "argument" of 6, and assigns the value returned to `incremented`
console.log(incremented);