// var is function-scoped
// let is block-scoped

// Use let over var to minimise unintended usage of variables outside of their defined blocks

function example() {
  if (true) {
    var x = 10;
    let y = 20;
  }
  console.log(x); // Output: 10 (var is function-scoped)
  console.log(y); // Output: Error: y is not defined (let is block-scoped)
}