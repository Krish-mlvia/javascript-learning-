const marvel_heros = ["spiderman", "ironman", "thor"];
const dc_heros = ["superman", "batman", "flash"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); 
// this will add the dc_heros array as an element in the marvel_heros array

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
// this will return a new array with the elements of both the arrays but it will not change the original marvel_heros array

//spread
const allNewHeros = [...marvel_heros,...dc_heros]
console.log(allNewHeros);
// this will also return a new array with the elements of both the arrays but 
// it is more efficient than the concat method because 
// it does not create a new array and then copy the elements of both the arrays into it, 
// it directly adds the elements of both the arrays into the new array without creating a new array first.

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5]]]
const realAnotherArr = anotherArr.flat(Infinity)     
// flat method is used to flatten the nested arrays into a single array, it takes a parameter which is the depth of the nested arrays to be flattened, if we pass infinity as a parameter then it will flatten all the nested arrays regardless of their depth
console.log(realAnotherArr);

console.log(Array.isArray('krish')) // isArray method is used to check if the given value is an array or not, it returns true if the given value is an array and false if it is not an array

console.log(Array.from('krish')) // from method is used to create a new array from a string or an array-like object, it takes a string or an array-like object as a parameter and returns a new array with the elements of the string or the array-like object as its elements

console.log(Array.from({name : "krish"})) // this will return an empty array because the object is not an array-like object, it does not have a length property and it does not have indexed elements, so it cannot be converted into an array using the from method

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

