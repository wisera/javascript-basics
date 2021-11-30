// Write a function that takes two numbers and returns theresult of them combined
function lets_add (a,b) {
    return a + b
}

console.log(lets_add(1,2))

// Write a function that takes two numbers and returns the maximum of the two
function max(a,b) {
    if (a>b)
        return a
    else 
        return b
}

// writing w/ a condition operator
function maximum(a,b) {
    return (a>b) ? a:b
}

console.log(max(2,4))
console.log(maximum(3,2))

function isLandscape(width, height) {
    return (width > height) // no need to write ? true:false because it automatically returns true or false
}

console.log(isLandscape(800,600))

// Write a funciton called fizzBuzz that receives an input
// if the input is divisible by 3 the funciton must return Fizz
// if the input is is divisible by 5 return Buzz
// iff the input is both divisble by 3 and 5 return FizzBuzz
// not divisible by or 5 reurn onput

function fizzBuzz(input) {
    if (input % 3 == 0 && input % 5 == 0) return 'FizzBuzz'
    else if (input % 3 == 0) return 'Fizz'
    else if (input % 5 == 0) return 'Buzz'
    else if (typeof input !== 'number') return 'Not a number'
    else return input 
}

console.log(fizzBuzz('s'))

// speed limit = 70
// 5 -> 1 point
// math.floor()
// 12 points -> suspended
// create a function that measures the speed
// speed limit is 70
// every 5km above 70 you get a point
// if you get 12 points you get suspended

function checkSpeed(speed) {
    speedLimit = 70
    kmPerPoint = 5
    if (speed < speedLimit + kmPerPoint) return console.log('ok')
    else {
        const points = (Math.floor(speed) - speedLimit) / kmPerPoint
        if (points >= 12) return console.log('Suspended')
        else console.log('Points', points)
    }
}

checkSpeed(75)

// write a function where it displays every number from 0 to your input and says if its even or odd

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        const message = ( i % 2 === 0) ? 'EVEN' : 'ODD'
        console.log(i, message)
    }
}

showNumbers(3)

// write a function that return the number of thruthy values from an array

const array = [0, null, undefined, '', 1, 2, 'hello'];

function countTruthy(array) {
    count = 0
    for (value of array)
        if (value)
            count++;
        return count
}

console.log(countTruthy(array))

// write a fucntion that takes in a object as an argument and returns all the properties of that object that are string type
// remember object in JS is like dictionary in python
// so you want all the values from the key value pairs that are strings

const movie = {
    title : 'a',
    year: 2000,
    author: 'b',
    rating: 90
}

function showProperties(obj) {
    for ( let key in obj)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key])
    }

showProperties(movie)

// write a function that takes a number and returns the sum of multiples of 3 and 5 w/in that number

function sum(limit) {
    sum = 0
    for (i = 0; i <= limit; i++)
        if (i % 3 == 0 || i % 5 == 0)
            sum += i;
    return sum;
}

console.log(sum(10))

// write a function that calculates the average from an array, and returns the corresponding letter grade

const marks = [80, 70, 90, 40]

function calculateGrade(marks) {
    const average = calculateAverage;
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}

function calculateAverage(array) {
    let sum =0;
    for ( let i of array)
        sum += value;
    return sum / array.lenght;
}

console.log(calculateGrade(marks))