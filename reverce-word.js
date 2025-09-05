let fname = "anuj";

let revFname = "";

const fnameArr = [];

// for loop on fname string .............

for (let i = 0; i < fname.length; i++) {
  fnameArr.push(fname[i]);
}

const loopTime = Math.floor(fnameArr.length / 2);

// for loop for reverse the word position ...................

for (let i = 0; i < loopTime; i++) {
  let a = fnameArr[i];
  let b = fnameArr[fnameArr.length - 1 - i];
  let c = a;

  a = b;
  b = c;

  fnameArr[i] = a;
  fnameArr[fnameArr.length - 1 - i] = b;
}

for (let i = 0; i < fnameArr.length; i++) {
  revFname[i] == fnameArr[i];
}

console.log(revFname);
