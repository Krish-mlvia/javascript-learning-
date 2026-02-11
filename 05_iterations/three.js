//for of loop => it is used to iterate over the elements of an iterable object like array, string, map, set etc.
// ["", "" , ""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr){
    console.log(num);

}

const greetings = "hello world!"
for (const greet of greetings) {
    console.log(`value of ${greet}`);
}


// maps
//maps => it is a collection of key-value pairs where the keys can be of any data type and the values can be of any data type, 
// it is similar to an object but it has some differences like it maintains the order of the elements, 
// it has a size property that returns the number of elements in the map, 
// it has a set method that is used to add elements to the map, 
// it has a get method that is used to get the value of a key in the map, 
// it has a delete method that is used to delete an element from the map, 
// it has a clear method that is used to clear all the elements from the map, 
// it has a has method that is used to check if a key is present in the map or not

const map = new Map()
map.set("IN", "India")
map.set("US", "United States")
map.set("UK", "United Kingdom")

console.log(map);

for (const [key, value] of map) {
    console.log(key,':-', value);
    
}

const myObject = {
    'game': 'NFS',
    'game2': 'FIFA'
}
for (const [key, value] of myObject) {
    console.log(key,':-', value);
}













