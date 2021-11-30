// The syntax for wirting for loops in JS is the following
// for (InitialExpression; condition; incremetExpression) {statement}
// the initialExpression is where you initialize a variable
// the condition is where you use a condition w/ your variable
// the incrementExpression is so that it doen't get stuck in a inifinite loop
// the statement is the action that you want to have according to the condition
//ex.:

for (let i=0; i < 5; i++) {
    console.log('Hello World');
};

// this loop will dispaly Hello World 5 times
// another example

for (let i= 0; i < 5; i++) {
    if (i % 2 == 0) console.log(i)
}

// this last example has an if statement inside the curly braces

// antoher example

for (let i = 0; i <=5; i++) {
    if (i % 2 !== 0) console.log(i);
}

// in this example it will display odd numbers
// you can write the same logic w/ a while loop
// the key difference is that w/ while loop you put the variable outside the initial expression
// only the condition goes inside the paratnheses
// example:

let i = 0;
while (i <=5) {
    if ( i % 2 !== 0) console.log(i);
    i++;
};

// Theres also the do-while loop
// do-whiule loops are always executed at least once
// the difference is that first you execute an action
// then comes the while condition
// example:

let j = 0;
do {
    if (j % 2 !== 0) console.log(j)
    j++;
}
while (j <=5);

// There's also for-in loops
// for-in is sued to loop through objects or arrays
// example

const person = {
    name : 'Luan',
    age : 24
}

for (let key in person)
    console.log(key);

// this example will display the key names
// to dispaly thje values do this

for (let key in person)
    console.log(person[key])

// you can also loop through arrays

colors = ['blue', 'red', 'yellow']

for (i in colors)
    console.log(i)

// this will loop through the index of colors
// to display the value of the index in the array do this

for ( i in colors)
    console.log(colors[i])

// for-of loops will display the values of the array automatically
//example:

for ( i of colors)
    console.log(i)

// You can also use break and continue in the logic of your loops
// break will stop the loop
// continue will go back to the beggining of the loop
// example:

let u = 0;

while  ( u <= 10) {
    if (u == 5) {
        break;
    }
    console.log(u);
    u++;
}

// this example will display until 4 then stop
// example of continue

let k = 0;

while  ( k <= 10) {
    if ( k % 2 == 0) {
        k++;
        continue;
    }
    console.log(k);
    k++;
}

// in this case it will display only odd numbers
