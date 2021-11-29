// Switch and case is a way of comparing values of variables
// It's very similar to if statements
// example:

let role;
role = 'guest'

switch (role) {
    case 'guest':
        console.log('Guest user')
        break;
    case 'admin':
        console.log('admin user')
        break;
    default:
        console.log('unknown user')
}

// Instead of having if and then a condition insiede the parantheses
// w/ switch and case you write switch and inside the parantheses you put a variable
// inside the curly braces you write case and the value that you want your variable to be compared to
// so in this case is comparing the variable role to the value 'guest'
// then the statement comes if there's a match, in this case a console.log
// default: is like the else statement

// you can write the exact same logic w/ if else statements
// example:
role = 'admin'
if (role === 'guest') 
    console.log('guest user'); 
else if (role === 'admin') 
    console.log('admin user'); 
else 
    console.log('unknown user');