let x = 10
if (x > 5) {
  console.log(`That's a big number!`)
} else if (x <= 5) {
  console.log(`That's a small number!`)
} else {
  console.log(`That's an invalid number!`)
}

let colour = `Blue`
switch (colour.toLowerCase()) {
  case "blue":
    console.log("Great choice")
    break;
  default:
    console.log("That ain't it")
}

let isBirthday = true
const greeting = isBirthday
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith.";

console.log(greeting)