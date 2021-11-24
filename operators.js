// In JS you have the same artihmetic operators like in Python for example

let x = 10
let y = 2

console.log(x + y); // addition
console.log(x - y); // subtraction
console.log(x * y); // multiplication
console.log(x / y); // division
console.log(x % y); // remainder of division
console.log(x ** y); // exponentiation

// But in JS you also have increment
// for example:

console.log(x++) // this will output the value of x, but next time you call x it will be incremented by one
console.log(x) // output will be incremented

// but if you increment like this

console.log(++x) // this will output the value of x incremented already

// same goes for decrement (--x) or (x--)

// you also have assignment operators

let x = 10;

x = x + 5 // the = is the assignment operator
x += 5 // you can also do this way, which is shorter, in this case += is the assignment operator

// a comparison operator will give you a boolean as a result
// here are some comparison operators

// relational

console.log(x > 2)
console.log(x < 2)
console.log(x <= 1)
console.log(x >= 10)

// you also have equality operators
// there's two types
// loose equality and strict
// for example:

// strict ( value + type) ===

console.log(1 === 1);
console.log(1 !== 1);
console.log('1' === 1);

//strict equality checks if the value and types are the same

//here's an example of loose equality (==)

console.log('1' == 1);
console.log( true == 1);

// w/ loose equality it automatically converts the second value to the same type of the first value

// loose equality you use double equal signs == !=
// strict equality you use triple equal signs === or !==

// There's also Ternary operators
// In a ternary operator you test a condition and give two possible outcomes
// one for the result of the condition being true, and one for being false
// Here's how you write it

// For example:

// If a customer has more tan 100 points, they are gold customer, otherwise, they are silver

let points = 110;
let type = points > 100 ? 'gold' : 'silver';

// So, the value of type depends on the value of points.
// If points is bigger than 100 than it would be 'gold' otherwise 'silver'

// It's like a short way of writing an if statement
// first you write the condition, in the example is, points > 100
// then you write a question mark
// after the question mark you write first what you want if it evaluates to true
// after you write : and then what you want for false
// so it's like
// condition ? 'true' : 'false'



















