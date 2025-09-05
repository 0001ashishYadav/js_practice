const str = "arjra";

let isPalindrom = true;

for (let i = 0; i <= str.length / 2; i++) {
  let a = str[i];
  let b = str[str.length - 1 - i];

  if (a !== b) {
    console.log("a -->", a, "", "b-->", b);
    isPalindrom = false;
    console.log(isPalindrom);
    return;
  }
  return console.log(`${str} is a palindrom ${isPalindrom}`);
}

// const ab = str.split("").filter((val, ind) => {
//   let a = str[ind];
//   let b = str[str.length - 1 - ind];

//   console.log("a-->", a, " ", "b-->", b);
// });
