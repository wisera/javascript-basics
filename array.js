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

// Finding primitive elements in an array //
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

// Finding Reference Types in an array //
// Rememeber reference types (objects) are: arrays, objects //
// To find reference types in an array you must use the .find()
// The syntax for this method is ARRAY.find(function(element)) return element === 'OBJECT-YOU-WANT'
// the word function is part of the syntax for calling the .find method, its the argument of the method, you are passing a function as an argument
// the word element is like a place holder for comparing the object you are looking for in the body of the function
// then return will return whatever condition you set up
// If there's no matching element you will get an undefined
// The method returns the value of the first element in the array that statisfies the criteria
// examples:

const courses = [ // this is an array holding 2 elements, these 2 elements are two objects holding two key value pairs
    {id: 1, name: 'a'}, 
    {id: 2, name:'b'}
];

const course = courses.find(function(course) { // you save this method in a variable so the result can be called later
    return course.name === 'a'; // course means element, so this is element w/ name key equal to 'a'
});

const course2 = courses.find(function(course) { 
    return course.name === 'x'; // in this example there's no matching criteria
});

console.log(course) // outputs the complete course object
console.log(course2) // outputs undefined

// another example using find method, but now looking for primitives

let array1 = [5, 12, 8, 130, 44]; 

let found = array1.find(function(element){ // this function will return the first matching element 
    return element > 10 // in this case it will return 12 because it is the first one
});

console.log(found); // returns 12

// You can also use the method .findIndex to return the objects index
// example:

const school = [ 
    {id: 1, name: 'math'}, 
    {id: 2, name:'science'}
];

const schoolCourse = school.findIndex(function(element) {
    return element.name === 'science'
})

console.log(schoolCourse) // returns index of 'science' of the object inside the school array

// This syntax w/ the .find() method can be different
// Instead of using the predicate function inside as an argument you can write an arrow function
// arrow funciton syntax is like this
// (argument) => {function_body}
// you ommit the workd function
// ex.:

const foods = [ 
    {id: 1, name: 'apple'}, 
    {id: 2, name:'banana'}
];

const food = foods.find((fruit) => { // in this case you are calling an arrow functio inside the .find() method
    return fruit.name === 'apple' // in this case fruit is the argument, like element above
})

console.log(food)

// In reality since the arrow function above has only one argument, and one line in the function body you can rewrite it like this

const foods2 = [ 
    {id: 1, name: 'apple'}, 
    {id: 2, name:'banana'}
];

const food2 = foods2.find(fruit => fruit.name === 'banana') // w/ one argument you can get rid of the ()
// and w/ one line in the function body, you can get rid of the return and the {}

console.log(food2) // returns the full matching object

// Removing elements from an array //
// Here are some ways of removing elemetns form an array

// Remove the last element of an array //

const numeros = [1, 2, 3, 4] // array w/ 4 elements
console.log(numeros) // outut will be array

const last = numeros.pop() // the method pop() will remove the last element of the array, you can assign that element to a variable
console.log(numeros) // the output is the array w/ out the last original element
console.log(last) // the last element of the array

// Removing the first elelement of an array //

const newnumbers = [1, 2, 3, 4]
console.log(newnumbers)

const first = newnumbers.shift() // the unshift() method will remove the first element of the array, you can assign it to a variable
console.log(newnumbers) // the output will be the arary w/ out the first original element
console.log(first) // the output is the original first element

// Remove an element in the middle //

const numerosNovo = [1, 2, 3, 4];
console.log(numerosNovo);

numerosNovo.splice(2, 1) // This method takes the first argument as the index position to start, the second argument is the number of elements to start deleting
console.log(numerosNovo) // output will be the array w/out the third element (index 2)

// You can delete multiple elements
numerosNovo.splice(0, 2) // will delete 2 elements starting from index 0
console.log(numerosNovo) 