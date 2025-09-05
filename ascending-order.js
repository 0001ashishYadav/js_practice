// arrange value in Ascending Order of given Array ............

const numArr = [1, 34, 23, 45, 13, 98, 67, 53, 88, 99, 2, 5, 16, 30];

let x;
let y;

for (let i = 0; i < numArr.length; i++) {
  for (let j = i + 1; j < numArr.length; j++) {
    x = numArr[i];
    y = numArr[j];

    if (numArr[i] > numArr[j]) {
      numArr[i] = y;
      numArr[j] = x;
    }
  }
}

console.log(numArr);

console.log(numArr.length);

// find highest and second highest value in this array ..............

console.log("highest number in given array : - " + numArr[numArr.length - 1]);

console.log(
  "second highest number in this array : - " + numArr[numArr.length - 2]
);
