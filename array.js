// arrays in JS re like arrays in python
// you use index to access the values 
// for example

let selectedColors = [ 'red', 'blue']
console.log(selectedColors[0]);

// you can also expand arrays like this

selectedColors[2] = 'purple'

console.log(selectedColors[2]);

console.log(selectedColors.length)

console.log('The amount of items is ' + selectedColors.length)

// Manipulating Arrays //

// Here are some ways of adding elements to an array

const numbers = [3,4]

// Add elements to the end of the array
numbers.push(5,6) // this method automatically adds the arguments to the back to the array
console.log(numbers)

// Add elements to the beginning of the array
numbers.unshift(1,2) // this method automatically adds the arguments to the start of the array
console.log(numbers)

// Add elements to the middle of the array
numbers.splice(2,0,'a','b') // the first argument is to select an index point, the second argument is the number of elements to delete, if 0, the next arguments are inserted into the index position
console.log(numbers)

// Finding elements w/ primitives //
// Remember primitives are: numbers, strings, booleans
// examples:

const numbers2 = [1, 2, 3, 1, 4]

// Get index of an element //
// This method returns the index of a an element
console.log(numbers2.indexOf(1,2)) // The first argument is the element you are looking for, the second argument is index where you want to start from
// this returns 3

// Get last index of a given element //
// This method return the last index of a given element
console.log(numbers2.lastIndexOf(1)) // returns 3 

// If the element you are looking for is not in the array it will return -1
console.log(numbers2.indexOf('a'))

// Check if there's a specific element in the array
console.log(numbers2.includes('f')) // returns boolean





