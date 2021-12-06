// function in JS are declared like this, ex.:

function greet() {

}

// in Python you use def, in JS you use fucntion to declare
// after function you put a name of your choice with parantheses after
// inside the parantheses go your parameters
// after that you put curly braces, and the body of the fcuntion goes inside of it

function greeting() {
    console.log('Hello World')
}

// after creating your function you must call it
// like this:

greeting();

// to call your function just type the name of it and parantheses

// you can add paramenters inside the parantheses

function message(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName)
}

// now to execute this function you must add arguments to the parametes name and lastName

message('Luan','Moreira')

// you can also use variables as arguments

myName = 'Romario'
myLastName = 'Nazario'

message(myName, myLastName)

// These were all functions that performed a task
// But there are also functions taht calculates a value
// for examaple

function square(number) {
    return number * number;
}

console.log(square(2))

// the return inside the function returns a value when you call the function

// There are two ways of caling a function
// Factory function and Constructor function

// Function Expression //
// function expression is when you assign a var to a function
// You can ommit, or not the function name

let run = function() { 
    console.log('run'); 
};

let move = run; 

run();
move();

// The difference between a function declaration and a function expression is that you CAN'T call a a function expression before it is written
// it's treated like a variable
// Where a function declaration CAN be called before its written
// That is because JS when it reads a file it automatically moves all function to the top of the page
// That is called hoisting

// Function Arguments //
// every function has a special object called arguments
// this object shows the number of arguments a function has
// its also an iterator, so you can call a loop on it
// ex.:
 
function hello() {
    total = 0
    for (let arg of arguments) // loops through arguments object, which holds all args called in a function
        total += arg
    return total
}


console.log(hello(1,2,3)) // adds all args 

// Rest Operator //
// There's a better way of accessing all arguments in a function
// The rest operator puts all arguments in an array
// W/ the rest operator you can write a function and use it as a parameter to indicate any number of arguments
// The rest operator must be the last parameter in a funciton
// ex.:

sum = (...args) => { // the arrow function sum takes the rest operator as an argument, meaning all args, rest of args
    return args.reduce((accumulator, elements) => accumulator + elements) // calculates the number of args using the reduce method on the array reated by the rest operator
}

console.log(sum(90, 4, -10))

// Get methods and Set methods //
// A Get method is a function inside an object, that let's you access properties
// So when a get method gets called outside outside the function, it's actually treated like a method
// The set method let's you set/change/mutate properties
// ex.:

const person = {
    first :'Luan',
    last : 'Moreira',
    get fullName() { // w/ get you can access this method like a property
        return ` Hello ${person.first} ${person.last}`
    },
    set fullName(input) { // w/ set you can change properties of an object, the argument of set is the value of the property, in this case the value for fullName
        const parts = input.split(' ') //the split method creates an array w/ the input for fullName
        this.first = parts[0] // assigns each part to a proeprty of the object
        this.last = parts[1]
    }
}

console.log(person.fullName) // access it like a property instead of like a method

person.fullName = 'Roberto Vila' // dynamically set properties of an object w/ a set method
console.log(person.fullName)

// Error Handling //
// To handle exceptions in JS use throw and catch
//ex.:

const car = {
    type :'truck',
    maker : 'chevrolet',
    get fullCar() { 
        return ` Hello ${car.type} ${car.maker}`
    },
    set fullCar(input) { 
        if (typeof input !== 'string') // condition to throw exception
            throw new Error('must be a string my friend'); // the syntax is keyword throw then new Error() which is a constructor function, the parameters is your error message
        const parts = input.split(' ') 
        this.type = parts[0] 
        this.maker = parts[1]
    }
}

console.log(car.fullCar)

try { // for the exception to work/ be catched it must be placed insde a try block and afet it a catch block so it does someting w/ the error
    car.fullCar = 12
}
catch (e) { // the syntax is keyword catch and the argument is e as an error which is the parameter set above in new Error()
    console.log(e)
}

