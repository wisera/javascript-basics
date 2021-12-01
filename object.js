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