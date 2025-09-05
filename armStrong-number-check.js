// check number is armsrong number or not

let num = 94; // try any number
let temp = num;
let sum = 0;

let digits = num.toString().length;

while (temp > 0) {
  let remainder = temp % 10;
  sum += remainder ** digits; // power of total digits
  temp = Math.floor(temp / 10);
}

if (num === sum) {
  console.log(`${num} is an Armstrong number`);
} else {
  console.log(`${num} is not an Armstrong number`);
}
