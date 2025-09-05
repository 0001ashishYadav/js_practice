// difference beetween const or arrow function and regular function -

const a = 13;
const b = 7;

// if i use const or arrow function
console.log(sum(a, b)); // output --> ReferenceError: Cannot access 'sum' before initialization

// if i use regular function
console.log(sum(a, b)); // output --> 20

// const or arrow function
const sum = (a, b) => {
  return a + b;
};

// regular function
function sum(a, b) {
  return a + b;
}
