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

// There are also Logical Operators
// There's the Logical 'and' and the Logical 'or' operator
// Logical and is represented by &&
// Logical or is represented by ||

// Logical AND (&&) returns true if both operands are TRUE
// for example:

console.log( true && true);

// if either of the operands is false then it evaluate to false
x = 2
console.log(x > 2 && x == 2); // false and true evaluates to false

// Logical OR (||) returns true if at least one condition is met
// for example:

console.log(true || false); // true or false evaluates to true
x = 2
console.log(x > 2 || x == 2); // false or true evaluates to true

// There's also the NOT (!) operator
// represented by exaclamation mark

// REMEMBER //

// The result of a logical expression does not always return a boolean (true or false)
// It depends on the value of the operands
// for example:

console.log(false || 'luan') // returns 'luan'

// 'luan' gets interpreted as true
//'luan' is a truthy value

// Falsy (false) values
// undefined
// null
// 0
// Nan
// '' (empty string)
// false

// Anything not Falsy -> Truthy

// An example of using the Logical OR w/ non boolean values is providing default values
// ex.:

let userColor = 'red';
let defaultColor = 'green';
let currentColor = userColor || defaultColor
console.log(currentColor)

// In this case the currentColor will be the selected userColor

// But if the userColor is undefined, the currentColor will be defaultColor


let userColor = undefined;
let defaultColor = 'green';
let currentColor = userColor || defaultColor
console.log(currentColor)

// Logic is: false or true = true
// In this case userColor is false and currentColor is true

// In a case of a condition w/ 3 non boolean values, the first true value gets chosen
// ex.:

console.log( null || undefined || 'luan' || false || true);

// in this case it will return 'luan' because it is the first true value









































