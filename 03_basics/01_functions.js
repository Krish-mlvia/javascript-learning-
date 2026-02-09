// functions : functions are reusable blocks of code that perform a specific task, 
// they can take parameters and return values, 
// they can be defined using function declaration or function expression, 
// they can also be defined using arrow functions

function sayMyName(){
    console.log("samaira bhatt");
}
sayMyName(); // this will call the function and execute the code inside the function, it will print "samaira bhatt" in the console

function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}
const result = addTwoNumbers(3, 4); 
console.log(result); // this will call the function and execute the code inside the function, it will print 7 in the console, but it will also return undefined because we are not returning anything from the function, we are just printing the result in the console, if we want to return the result from the function we need to use the return keyword
addTwoNumbers(3, 4); // this will call the function and execute the code inside the function, it will print 7 in the console

function loginUserMessage(username){
    return `welcome back, ${username}`
}
console.log(loginUserMessage("samaira bhatt")); // this will call the function and execute the code inside the function, it will return "welcome back, samaira bhatt" in the console, we are using template literals to concatenate the string and the variable, template literals are enclosed by backticks (`) and they can contain placeholders for variables and expressions, the placeholders are indicated by the dollar sign ($) followed by curly braces ({}), inside the curly braces we can put any valid JavaScript expression, the expression will be evaluated and its result will be included in the string

function loginUser(username){
    if(username === undefined){
        console.log("please enter a username");
        return; // this will return undefined and exit the function, it is used to stop the execution of the function if the username is not provided
    }
    return `welcome back, ${username}`
}
console.log(loginUser());

function log(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return; // this will return undefined and exit the function, it is used to stop the execution of the function if the username is not provided
    }
    return `welcome back, ${username}`
}
console.log(log());


function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500)) 
// this will return an array with the values [200, 400, 500], 
// the rest operator (...) is used to collect all the remaining arguments passed to the function into an array, 
// it is used when we don't know how many arguments will be passed to the function, 
// it must be the last parameter in the function definition, we can only have one rest parameter in a function

function calculateCartPrice1(val1, val2,...num1){
    return num1
}
console.log(calculateCartPrice1(200,400,500))

const user ={
    username: "hitesh",
    price: 900,
}
function handleObject(obj){
    console.log(`username is ${obj.username} and price is ${obj.price}`);

}
console.log(handleObject(user));


const myNewArray = [200, 400, 100, 234]
function returnSecondvalue(getArray){
    return getArray[1]
}
console.log(returnSecondvalue(myNewArray));


























