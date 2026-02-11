const user = {
    username: "krish",
    price: 999,

    welcomeMessage: function(){
        console.log(`welcome ${this.username} to the website`); // this is used to access the properties of the object, it refers to the object itself
        console.log(this); // this will refer to the user object
    }
}

user.welcomeMessage();
user.username = "sam"
user.welcomeMessage();
//console.log(this); // this will refer to the global object in non-strict mode and will be undefined in strict mode
// we can also write the above function in a shorter way using arrow function, but we cannot use this keyword in arrow function because it does not have its own this, it takes the this from the surrounding scope



// function chai(){
//     console.log(this.username); // this will refer to the global object in non-strict mode and will be undefined in strict mode
// }
// chai()


// const chai = function(){
//     let username = "krish"
//     console.log(this.username); // this will refer to the global object in non-strict mode and will be undefined in strict mode
// }
// chai()

// const chai = () => {
//     let username = "krish"
//     console.log(this.username);

// }
// chai() // this will refer to the global object in non-strict mode and will be undefined in strict mode, because arrow function does not have its own this, it takes the this from the surrounding scope which is the global scope in this case

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(5,10));

// if we have only one parameter in the function we can omit the parentheses
const addOne = num => num + 1
console.log(addOne(5));

// if we have only one line of code in the function we can omit the curly braces and the return statement, it will return the value automatically   













