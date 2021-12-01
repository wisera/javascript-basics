// Objects in JS are like dictionaries in python
// for example:

let person =  {
    name: 'luan',
    age: 24
};

// objects are variables defined w/ curly braces
// and inside the curly braces you put key value pairs

// to access proeprties inside objects you can use dot notation or bracket notation

// for example:

// Dot notation:

person.name = 'Ronaldo'

// in this case I reassignred the value for the key name
// to access the value just call a console.log

console.log(person.name);

// Bracket notation:

person[name] = 'Julian'
console.log(person[name])

// you can also reassign the value w/ another variable
// for example:

let selection = 'name'

person[selection] = 'Romario'

console.log(person[selection])

// this only works w/ bracket notation
// if you try w/ dot notation it won't work

// In an object you can have another object inside of it, even functions
// example:

const circle = {
    redius: 1,
    location: { // location is the key and its value is key x and key y both w/ values
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() { // the key draw is a function 
        console.log('draw') // the function calls a console.log
    }
};

circle.draw(); // this is a call for the draw method of the circle object

// the syntax for having a function inside an object is
// the key is the name of the function
// the value is function() {}, so the function call and the body

// But there's a better way of creating the circle object
// Because if you want to create a similar one, you then would have to copy and paste the same code
// That would not be the best practice
// The better weay would be w/ Factory Function

// FACTORY FUNCTION: //
function createCircle(radius, x, y) {
    return { // here's the main difference, the function return an object, so you can create multiple objects of the same "type"
        radius, // from here it's just like the object above, its key value pairs
        location: {
            x,
            y
        },
        isVisible: true,
        draw() { // here's a better way of SYNTAX when creating a method the key is the name of the function/method w/ ()  and the {}
            console.log('draw')
        }
    }

}

// So you create a function that returns an object
// Thats why the name is factory, beacause w/ this type of function you can make stuff, 
// its like a factory, you fabricate objects w/ this fucntion

const circle1 = createCircle(5, 2, 2) // now you create a const based on the factory function, and you give your desired arguments

console.log(circle1) // way of calling the object and see its properties
console.log(circle.isVisible) // returns the value of isVisible property
circle1.draw(); // way of calling the method

// another way of writing this function is Constructor Function
// 3 main differences:
// you don't call return isnide the body of the function
// you use this. instead
// to call this new object you must use new
// and you use Pacal Notation (OneTwoThree) opposed to Camel Case (oneTwoThree)
// example:

function CircleMake(radius,x, y) {
    this.radius = radius // example of this. instead of return{}
    this.x = x
    this. y = y
    this.location = {
        x,
        y
    }
    this.isVisible = true
    this.draw = function() { // way of creating a method this.METHOD_NAME = function() {}
        console.log('draw'); // basically you assign a function to a variable
    }
}

const circle2 = new CircleMake(10, 4, 4); // way of assigning a variable to the constructor function

console.log(circle2); // shows properties of the new var associated to the function created
console.log(circle2.radius); // shows the given property
console.log(circle2.draw()); // calls the method

// Another thing to remember form objects in JS is that they are dynamic in nature
// meaning you can add properties outside the object definition
// ex.:

const square = { // object square created
    length: 4
};

console.log(square) // square object properties so far
console.log(square.length) // call to lenght property of sqaure object

square.width = 4 // dinamically adding width property to square object
square.name = 'luan' // notice how dinamically is adding outside the original square object call
console.log(square.width) // call to new property added
console.log(square.name) // again
console.log(square) // now you see the new dinamically added properties in the original sqaure object

delete square.name; // you can also delete dinamically a specific given proeprty of the object
console.log(square) // now you see that the deleted proeprty is not part of the object anymore

// REMEMBER//
// Every object has a .constructor property
// that property references the function that was used to create that object
// thats why the name is contructor, because it shows who constructed/built/made it
// example

console.log(square.constructor) // this references to the Object constructor function because it was made by a factory function
console.log(circle2.constructor) // this outputs the constructor function

// let x = {} is the same as ----> let x = new Object();
// there's also new String() for creating strings, but you just write a string w/ ''
// the same goes for Boolean(), Number()

// How to show all properties of a object
// Here are some methods

const myCircle = {
    radius:1,
    draw() {
        console.log('Hello')
    }
}

for (let key in myCircle) // this way you use a for loop to loop through keys
    console.log(key, myCircle[key])

for (let key of Object.keys(myCircle)) // this way you loop through the function Object w/ the keys method w/ your object as the argument
    console.log(key)

for (let value of Object.values(myCircle)) // this way you loop through the function Object w/ the values method w/ your object as the argument
    console.log(value)

for (let entry of Object.entries(myCircle)) // this way you loop through the Object function w/ entries method w/ your object as the arg
    console.log(entry) // this outputs the lenght of properties and the key value pairs stored in arrays so, (2) ['radius', 1] and (2) ['draw', f] f means function

if ('radius' in myCircle) console.log('yes') // this checks if there's a given proeperty in the created object
else console.log('no')

console.log(('color' in myCircle) ? 'yes':'no') // same thing as above but w/ a condition operator

// HOW TO COPY/CLONE ALL THE PROPERTIES OF AN OBJECT //

const myCircle2 = {
    radius:1,
    draw() {
        console.log('Hello')
    }
}

// The old school way Populating w/ a for loop

const another = {}; // first you create an empty object

for (key in myCircle2) // then you call a for loop to populate the empty object
    another[key] = myCircle2[key]; // the logic is that you copied all of its contents

console.log(another)

// Using the Object.assign method w. the Object() function

const another2 = Object.assign({}, myCircle2) // this method takes in an empty object as its first argument and an object that you want to copy the properties from

console.log(another2)

// The more sophisticated way, using the spread operator

const another3 = {...myCircle2}  // the spread operator copies all the properties of an object, you call this operator inside an empty object and you assign it to a const



