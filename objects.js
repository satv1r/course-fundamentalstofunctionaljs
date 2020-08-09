// Arrays are passed by reference
let array = ["h", "i"];

let changedArray = array;
changedArray.push("!");

// console.log(array);

// Arrays are objects!!!
// [] is used because 0, 1, 2, can't be used with . notation
let person = ["haha", "looool"];
// You can add your own custom properties
person.name = "Satvir";
// person[0] is just a way of saying person.0 legally
console.table(person);
/*
┌─────────┬──────────┐
│ (index) │  Values  │
├─────────┼──────────┤
│    0    │  'haha'  │
│    1    │ 'looool' │
│  name   │ 'Satvir' │
└─────────┴──────────┘
*/

// [ ] takes an sort of expression
// . coerces whatever follows as a string
// person.name works for assignment, whereas person[name] wont.
// This can be fixed with adding quotes: person["name"]

// Basically . notation coerces it into a string as
// long as it's not unusual like a number.

// Array's behave uniquely with their numerical indices
// y = [];
// console.log(y.length);
// y[0] = "hello";
// console.log(y.length);
// y[20] = "bye";
// console.log(y.length); // Prints 21, fills 1 through 19 with empty values

// console.table(y);
/*
┌─────────┬─────────┐
│ (index) │ Values  │
├─────────┼─────────┤
│    0    │ 'hello' │
│   20    │  'bye'  │
└─────────┴─────────┘
*/
