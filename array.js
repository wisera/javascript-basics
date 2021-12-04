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

// Remove ALL/empty an array //

// Solution 1//
// preferred //

let fruits = ['apple','banana','orange','green apple'];
console.log(fruits)

let otherFruits = fruits; // references another variable to the original array
console.log(otherFruits)

fruits = []; // This method removes only the original array, any other references survive
console.log(fruits) 
console.log(otherFruits)

// Solution 2 //
// preferred //

let fruits2 = ['apple','banana','orange','green apple'];
console.log(fruits2)

let otherFruits2 = fruits2; // references another variable to the original array
console.log(otherFruits2)

fruits2.length = 0; // this method removes all copies of the original array
console.log(fruits2) 
console.log(otherFruits2) // both are empty

// Solution 3 //
// noisy //

let animals = ['tiger', 'giraffe', 'human']
console.log(animals)

let otherAnimals = animals;
console.log(otherAnimals)

animals.splice(0, animals.length) // this method removes the amount of the length of the array starting from index 0
console.log(animals) // no elements
console.log(otherAnimals) // both w/ no elements

// Solution 4 //
// noisy //

let animals2 = ['tiger', 'giraffe', 'human']
console.log(animals2)

let otherAnimals2 = animals2;
console.log(otherAnimals2)

while (animals2.length > 0) animals2.pop() // this method creates a loop w/ the pop method, removing elements until length is 0
console.log(animals2) // no elements
console.log(otherAnimals2) // both w/ no elements

// Combining and Slicing arrays //

const firstA = [1, 2, 3];
console.log(firstA)

const second = [4, 5, 6];
console.log(second)

const combined = firstA.concat(second) // the concat() method takes an array as an argument and concatenates it ('adds the arrays')
console.log(combined) // its output will be the concatenated array
console.log(firstA) // it won't affect the array the method was called on

// You can slice the array //
console.log(combined)
const slice =combined.slice(2,4) // this method takes the first argument as the index to start slicing (including) and the second arg is the index to stop (excluding)
console.log(slice) // the output is an array w/ the sliced elements, starting from index 2 and stopping and exclduing at index 4
console.log(combined) // it doens'nt affect the array the method was called on

const slice2 = combined.slice(2) // w/ just one arg, the array is sliced starting from the index until the end
console.log(slice2)

const slice3 = combined.slice() // w/ out arguments it creates a copy of the array
console.log(slice3)

// Remember if you use reference types the object is not hard copied, it is only referenced //
//example

const firstB = [{id: 2}];
console.log(firstB)

const secondA = [4,5,6]
console.log(secondA)

const combined2 = firstB.concat(secondA)
console.log(combined2) // outputs the combined two arrays

firstB[0].id = 10 // changes a value of the object in the original array
console.log(firstB)
console.log(combined2) // now the combined array gets automitically changed, because its reference is copied over not its actual value because it is a reference type

// SPREAD OPERATOR //
// you can achieve the same result of slice and concat w/ the spread operator (...)
// example

const list = [1, 2, 3, 4]
const list2 = [5, 6, 7]

// Instead of using concat to combine 2 arrays, use spread operator

const combination = [...list, ...list2] // the spread operator returns all of its elements individually, so it adds all the elements from the first list w/ the second
console.log(combination)

// you can also insert other elements in the middle 
// example

const combination2 = [...list, 'oi', 'ola', ...list2, 'jovem']
console.log(combination2)

// Instead of using the empty slice() method to create a copy of an array, you can use the spread operator (...)

copyCombination = [...combination]
console.log(copyCombination)

// Iterating an array //

// you can use a for loop //
// example

list3 = ['a', 'b', 'c']

for (let indexEachElement in list3) // for in loop iterates the index of each element
    console.log(indexEachElement)

for (let eachElement of list3) // for of loop iterates each element
    console.log(eachElement)

// .forEach() method //

list3.forEach(function(element) { // this method takes in a callback function as an argument
    console.log(element)
})

// that means you can do arrow function

list3.forEach(element => console.log(element)) // the first argument is the element
list3.forEach((element, index) => console.log(index, element)) // the second argument is the index

// Joining the elements of an array into one element //

const games = ['cod', 'bf', 'cs'];
console.log(games);

const joined = games.join(','); // combines all the elements of the array into a single element
console.log(joined);
console.log(typeof joined) // its a string

// Useful for converting strings into a single string
// for example converting a title of a website into a url
// example

const message2 = '2023 is here! almost'
console.log(message2)

const parts = message2.split(' ') // this string method splits its elements into an array
console.log(parts)

joined2 = parts.join('-')
console.log(joined2)

// Sorting arrays //
// the sort method converts the elements into strings and compares their UTF values, the default order is ascending

const otherNumbers = [4, 6, 8, 1, 50, 22]
console.log(otherNumbers)
otherNumbers.sort()
console.log(otherNumbers) // its in ascending UTF order

otherNumbers.reverse() // this method reverses the current order of the list
console.log(otherNumbers)

const lessons = ['node','javascript']

lessons.sort()
console.log(lessons) // its in alphabetical order

// Using sort() w/ reference types //
// w/ objects you use a callback function as an argument
// in this function the first argument is the first element of the array, the second arg is the second
// w/ these two args you can compare their values

const lessons2 = [
    {id: 1, name: 'math'},
    {id: 2, name: 'english'}
]

lessons2.sort((firstElement,secondElement) => { 
    if (firstElement.name < secondElement) return -1 // the logic here is, if the the first argument is smaller then don't call a sort() method (-1)
    if (firstElement > secondElement) return 1 // if the first element is bigger then call a sort() method (1)
    return 0;
});
console.log(lessons2) // the sort() method is called because the first element is smaller than the second

// ATTENTION //
// This is case sensitive, if the strings are upper case it will have a different output //
// to avoid confusion convert the strings to lowercase or uppercase before comparing them //
// example:

lessons3 = [
    {id : 1, name: 'Node'},
    {id: 2, name: 'javaScript'}
]

lessons3.sort((firstElement,secondElement) => { 
    const first = firstElement.name.toLowerCase(); // by converting to lower case the logic works again
    const second = secondElement.name.toLowerCase();

    if (first < second) return -1;
    if (first > second) return 1
    return 0;
});

console.log(lessons3);

// REMEMBER //
// Its not in alphabetical order, its in ascending order corresponding to their UTF value

// Testing elements of an array //
// There are two new methods every() and some()

// every() method tests if every element of the array matches the following criteria, returns boolean
// ex.:

const myNumbers = [1, 0, 44, -22, 3]

allPositive = myNumbers.every(element => element >= 0) // this method takes in a callback function as an argument and the frist arg of the function is the element of the array
console.log(allPositive) // because not every element of the array matches the following condition, the output is false

// some() method compares if at least one element of the array matches the following condition, returns boolean
// ex.:

somePositive = myNumbers.some(element => element >= 0)
console.log(somePositive) // outputs true because at least one element matches the criteria

// REMEMBER //
// These two methods are new to JS
// For this reason it may not work on some older browsers

// Filter elements of an array //
// you can use filter() method to return an array of filtered elements given a specific condition //
// example:

const myNumbers2 = [1, -1, 2, 3]
console.log(myNumbers2)

const filteredNumbers = myNumbers2
.filter(element => element >= 0) // the first argument of this callback function is the element of the array
.map(element => (`Hello ${element}`) + 2)
console.log(filteredNumbers) // outputs all the elements matching the condition inside a new array

// Mapping an array //
// use map() method to map an array //
// the map() method compare

