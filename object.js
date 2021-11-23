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