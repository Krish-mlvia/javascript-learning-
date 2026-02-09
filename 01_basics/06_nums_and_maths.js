const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length); //toString() converts the number to string and then we can find the length of the string
console.log(balance.toFixed(1)); //toFixed() is used to round the number to the specified number of decimal places and it returns a string

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)); //toPrecision() is used to round the number to the specified number of significant digits and it returns a string

const hundreds =10000000
console.log(hundreds.toLocaleString("en-IN")); //toLocaleString() is used to convert the number to a string with a language sensitive representation and it takes the locale as an argument, in this case we are using "en-IN" for Indian numbering system 

// +++++++++++++++++++++++++++++++++MATHS IN JS ++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); //abs() is used to find the absolute value of a number
console.log(Math.round(4.6)); //round() is used to round the number to the nearest integer,we'll be using this most of the time 
console.log(Math.ceil(4.2)); //ceil() is used to round the number up to the nearest integer,top value only
console.log(Math.floor(4.9)); //floor() is used to round the number down to the nearest integer, bottom value only
console.log(Math.min(4,6,2,8)); //min() is used to find the minimum value among the given numbers
console.log(Math.max(4,6,2,8)); //max() is used to find the maximum value among the given numbers
console.log(Math.random()); //random() is used to generate a random number between 0 and 1
console.log(Math.random() * 10); //to generate a random number between 0 and 10 we can multiply the random number by 10
console.log((Math.random() * 10) + 1); //to generate a random number between 1 and 10 we can multiply the random number by 10 and then add 1 to it
console.log(Math.floor(Math.random() * 10)); //to generate a random integer between 0 and 9 we can use floor() to round down the random number multiplied by 10

const min =10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //to generate a random integer between min and max we can use the formula Math.floor(Math.random() * (max - min + 1)) + min








