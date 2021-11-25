// To declare a variable use let ex.:

let name = 'Luan'

console.log(name)

// Basic variable exercise

let a = 'red';
let b = 'blue';

console.log(a);
console.log(b);

// The output will be red and blue

// Make the console log first blue and then red w/out changing the order of the console.log calls

let a = 'red';
let b = 'blue';
let c = a;
a = b;
b = c;

console.log(a);
console.log(b);