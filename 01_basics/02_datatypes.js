"use strict"; //treats all js code as newer version of js


//alert(3 + 3)   // we cacnt use alert like this we are using node js ,not browser js

console.log(3 + 3) 

console.log("krish")   // never write console in same line of othet code it will create a problem in future

let name = "krsih"
let age = 21
let isloggedIn = false



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

console.log(typeof undefined) // output is undefined

//when we use typeof null it will return object but it is not an object it is a bug in js but we have to live with it 