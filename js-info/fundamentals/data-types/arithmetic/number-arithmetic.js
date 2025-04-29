// Floating point arithmetic is not always 100% accurate because most decimals don't have exact binary representations. E.g. 10^-2 needs to be represented as x^2y
let x = 0.2 + 0.1; 

// To solve the problem above, it helps to multiply and divide.
let y = (0.2 * 10 + 0.1 * 10) / 10;

console.log(x);
console.log(y);