// STRING METHODS //
// Here are some useful builtin string methods
// Even though a string is a primitive, you have builtin methods from the String() object
// Because we declare strings in a literal way
// ex.: const name = 'luan' <-------- Literal
// const name = new String('luan') <--------------- constructor function
// same way of doing the same thing
// useful methods

let name = ' luan moreira  '
console.log(name.length) // outputs number of items
console.log(name[0]) // outputs letter of given index
console.log(name.includes('u')) // checks if there's the following string outputs boolean
console.log(name.startsWith('Lu')) // checks if starts w/ the following string outputs boolean
console.log(name.startsWith('lu')) 
console.log(name.endsWith('an')) // checks if ends w/ the following string outputs boolean
console.log(name.indexOf('more')) // outputs the index where the follwoing string starts
console.log(`The output is replaced ----> ${name.replace('luan', 'caio')}`) // replace the first argument by the seecond arg, outputs the replacement
console.log(name.toUpperCase()) // outputs converted to uppercase
console.log(name.trim()) // outputs all white space deleted
console.log(name.trimLeft()) // outputs deleted white space from left
console.log(name.trimRight()) // outputs deleted white space from right

// REMEMBER //
// these methods outputs the difference but it doesn't affect the orginal value of the variable
console.log(name) // still the same 

// if you want the output of a method to change the variable you must assign it to a new variable (let or const)
// example

let name2 = name.replace('luan', 'igor') // you assign the output of the string method to a new variable
console.log(name2) // outputs the method output

// REMEMBER TO ESCAPE CHARACTERS //
// ex.:

name = 'luan \nmoreira' // \n means new line
console.log(name) // outputs luan then moreira in a new line
console.log(name.split(' ')) // splits the string in every space and outputs this in an array
console.log(name.split('')) // splits the string every letter

// TEMPLATE LITERALS //
// template literals are a way of adding variables, or any other expression to strings
// all you have to do is use ` ` and encapsulate of it inside
// to add a variable or any other expression use ${EXPRESSION}
// example

let firstName = 'luan'
let lastName = 'moreira'
console.log(`Hello ${firstName.charAt(0).toUpperCase() + firstName.slice(1)} ${lastName.charAt(0).toUpperCase() + lastName.slice(1)},
How are you?
The result of two plus two is ${2+2}
`)

// In the example above 3 variables are added: the  first and last name variables w/ methods and a simple mathematical expression
// The methods used for the name variables were:
// .chartAt(INDEX) where you select a letter from a string
// toUpperCase()
// plus .slice(INDEX) where the index represents the part of the string to start, ignoring the rest of the string
// in this case the index selected was 1 that represents 'o', so the output is oreira
// Because of that the output is Luan Moreira
// it converts the first letter to Upper Case