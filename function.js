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

//



