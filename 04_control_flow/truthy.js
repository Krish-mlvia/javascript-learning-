const userEmail = []

if (userEmail){
    console.log("email is present");
}else{
    console.log("email is not present");
}
// is there is value in the variable then it will be considered as true and 
// if there is no value in the variable then it will be considered as false
//if there is [ ] in the variable then also it will be considered as true because there is a value in the variable


// falsy values in js => 0, "", null, undefined, false, NaN, -0, BigInt(0n) 

//Truthy values in js => all the values except falsy values are considered as truthy values in js
// "0", " ", [], {}, function(){}, true, 1, -1, Infinity, -Infinity, BigInt(1n) are all truthy values in js


if (userEmail.length === 0){
    console.log("email is not present");

}

const emptyObj ={}

if (Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

// nullish coalescing operator => ??

let val1;
//val1 = 5??10
//val1 = null ?? 10
//val1 = undefined ?? 10
val1 =null ?? 10 ??15
console.log(val1); // 5 because val1 is undefined and undefined is a falsy value in js so it will return the right side value which is 10 but if we use nullish coalescing operator then it will return the left side value which is 5 because nullish coalescing operator only considers null and undefined as falsy values in js and all other falsy values are considered as truthy values in js


// so even if we have 0 or "" or false as the value of val1 it will return the left side value which is 5 because nullish coalescing operator only considers null and undefined as falsy values in js and all other falsy values are considered as truthy values in js

// terniary operator => it is a shorthand for if else statement and it takes three operands, the first operand is a condition, the second operand is the value to be returned if the condition is true and the third operand is the value to be returned if the condition is false

//condition ? true = 100

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");










