const str = "my name is mitchel";

let str2 = str.split("").reverse().join(""); // output ---> lehctim si eman ym

const arr = str.split(" ").reverse();
console.log("arr --> ", arr); // arr ->  [ 'mitchel', 'is', 'name', 'my' ]

const arr1 = str.split(" ");

const revArr = arr1.map((chr) => {
  return chr.split("").reverse().join("");
});

console.log(revArr);
