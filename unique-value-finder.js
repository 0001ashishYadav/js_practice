const arr = ["a", "b", "a", "w", "a", "s", "b", "z", "n", "w"];

const unique = [];

for (let i = 0; i < arr.length; i++) {
  let match = 0;
  for (let j = 0; j < unique.length; j++) {
    if (arr[i] === unique[j]) {
      match = 1;
      break;
    }
    // console.log("after return");
  }

  if (match == 0) {
    unique.push(arr[i]);
  }
}

console.log(unique);
