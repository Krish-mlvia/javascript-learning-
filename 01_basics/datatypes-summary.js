// primitive data types 

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, Bigint

const score = 100
const scoreValue =100.1

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigInt = 476336424235235326453264526458n




// non-primitive datatypes (reference types)

//Array, Objects, Functions

const heros = ["spiderman", "ironman", "thor"];

let myObj ={
    name: "krish",
    age: 21,
}

const myFunction = function(){
    console.log("krish malvia");   // syntax : function(parameters){code to be executed}
}

console.log(typeof outsideTemp); //object,because null is a bug in js but we have to live with it

console.log(typeof myFunction); //function, because its a function

//all non primitive dataypes are of type objects in js ,but function is a speacial type of object that is why it has its own type function in js 





//these are PRIMITIVE DATATYPES IN JS 
//number => 2 to pwr 53 
//bigint => used for larger numbers 
//string =>. use "" ,its prefered in that
//boolean => true or false
//null => standalone value that represents nothing
//undefined => variables that are declared but not assigned any value,so they are undefined
//symbol => used to craete unique identifers for objects

//object => 
console.log(typeof null)    //typeof is used to find the type of data

console.log(typeof null) //output is object

console.log(typeof undefined) // output is undefined, because its a type of undefined 

//when we use typeof null it will return object but it is not an object it is a bug in js but we have to live with it 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// MEMORY IN JAVASCRIPT

// stack(primitive) ,Heap(non-primitive)

// primitive datatypes are store in stack and non primitive datatypes are store in heap

let myName = "krish"

let anotherName = myName
anotherName = "hello"

console.log(myName);
console.log(anotherName);
// in stack we get a copy of a value 

let userOne ={
    email : "user@gmail.com",
    upi: "upi@123"
}
let userTwo = userOne

userTwo.email = "user2@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
//in heap we geta refernce of the value