// Arrays : the array is a data structure that can hold more than one value at a time. 
// It is a collection of values that are stored in a single variable. 
// The values in an array are called elements, and they can be of any data type.

//javascript me array ek data structure hai jo ek variable me ek se jyada value store kar sakta hai.
//associative array => array jisme hum index ke badle key use karte hai ,js me associative array nahi hota hai ,
// js me object hota hai jisme hum key value pair store kar sakte hai

//in javascript arrays are zero based index, which means the first element of the array is at index 0, 
// the second element is at index 1, and so on.

//in javascript the arrays is deep copied when we assign an array to another variable, 
// which means that the new variable will point to the same array in memory, 
// and any changes made to the array through either variable will affect both variables.

const myArr =[0,1,2,3,4,5]
const myHeros = ["ironman","spiderman","thor"]

const myArr2 = new Array(1,2,3,4) // this is another way to create an array in javascript but it is not recommended to use this way because it is less readable and less efficient than the literal way of creating an array
console.log(myArr[1]);


//array methods in js


myArr.push(6)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(-1) // unshift method is used to add an element at the beginning of the array
console.log(myArr);

myArr.shift() // shift method is used to remove the first element of the array
console.log(myArr);

myArr.splice(2,0,2.5) // splice method is used to add or remove elements from the array, it takes three parameters, the first parameter is the index at which we want to add or remove elements, the second parameter is the number of elements we want to remove, and the third parameter is the element we want to add
console.log(myArr);

myArr.splice(2,1) // this will remove one element at index 2
console.log(myArr);

myArr.splice(2,1,2.5) // this will remove one element at index 2 and add 2.5 at index 2
console.log(myArr);

myArr.reverse() // reverse method is used to reverse the order of the elements in the array
console.log(myArr);

myArr.sort() // sort method is used to sort the elements in the array in ascending order
console.log(myArr);

myArr.sort((a,b)=>b-a) // this will sort the elements in descending order
console.log(myArr);

myArr.sort((a,b)=>a-b) // this will sort the elements in ascending order
console.log(myArr);

myArr.join("-") // join method is used to join the elements of the array into a string, it takes a separator as an argument which is used to separate the elements in the string
console.log(myArr.join("-"));   

