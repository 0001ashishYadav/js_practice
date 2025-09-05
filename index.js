// ....................massege print on give number...................

const num = 15;
if (num % 3 === 0 && num % 2 === 0) {
  console.log("fizz buzz");
} else if (num % 2 === 0) {
  console.log("fizz");
} else if (num % 3 === 0) {
  console.log("buzz");
}

// ...........counting printing to given number ........................

const num1 = 10;
let sum = 0;
for (let i = 1; i <= num1; i++) {
  sum = sum + i;
}
console.log(sum);

// .............table printing of given number ................
const table = 5;
for (let i = 1; i <= 10; i = i + 1) {
  console.log(5 * i);
}
