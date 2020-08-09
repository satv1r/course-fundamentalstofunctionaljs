// Array Destructuring
const [first, second] = [true, false];
console.log(first, second); //prints, true, false

const [a, b, c] = [1, 2];
console.log(c); // undefined

// Object Destructuring
const { f, s } = { f: 0, s: 1 };

console.log(f, s); // 0, 1

// The name of the variable has to match a property in the object, otherwise it'll = to undefined.

// Challenge
const obj = { name: "Rusty", room: "kitchen", weapon: "candlestick" };

const { name, room, weapon } = obj;
console.log(name, room, weapon);

// Destructuring example
let i = 1;
let j = 2;

// instead of creating temp variables to swap their values, we can destructure.
[i, j] = [j, i];
console.log(i, j); // 2, 1
