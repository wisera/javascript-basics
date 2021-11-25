// The syntax for if statements in JS is like:

// if (condition) {
//    statement
// }
// else if (condition) {
//    statement
// }
// else if (condition) {
//   statement
// }
// else
//   statement

// The condition goes inside paratheses and the statement goes inside curly braces
// If you are using a single statement you can ommit the curly braces
// example:

// You have a given hour
// If the hour is between 6am and 12pm: Good Morining!
// If the hour is between 12pm and 6pm: Good Afternoon!
// Otherwise : Good evening!

let hour = 20

if (hour >= 6 && hour < 12)
    console.log('Good morning');
else if (hour >= 12 && hour < 18)
    console.log('Good Afternoon!')
else
    console.log('Good evening!')