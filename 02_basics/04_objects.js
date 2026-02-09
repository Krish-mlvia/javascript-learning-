//object singleton

//const tinderUser = new Object()
const tinderUSer = {}
tinderUSer.id = "143"
tinderUSer.name = "samaira bhatt"
tinderUSer.isLoggedIn = false

//console.log(tinderUSer);

const regularUser = {
    email: "sam@gmail.com",
    fullname: {
        firstname: "krish",
        lastname: "malvia"
    }
}
console.log(regularUser.fullname.firstname);

//we can also create objects inside objects and we can also create functions inside objects

const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"a", 4:"b"}

// const obj3 = Object.assign({},obj1,obj2) // use Object.assign() to merge two objects, it takes the target object as the first parameter and the source objects as the next parameters, it returns the target object with the properties of the source objects merged into it, if there are properties with the same name in the source objects, the value of the property in the last source object will overwrite the value of the property in the previous source objects, if there are properties with the same name in the target object and the source objects, the value of the property in the last source object will overwrite the value of the property in the target object
// console.log(obj3)

const obj3 ={...obj1, ...obj2} //use this widely for better production level readability and better performance, it is called spread operator, it is used to spread the properties of the objects into a new object, it takes the source objects as parameters and returns a new object with the properties of the source objects merged into it, if there are properties with the same name in the source objects, the value of the property in the last source object will overwrite the value of the property in the previous source objects
console.log(obj3);

const users = [
    {
        id: 1,
        name: "harish"
    },
    {
        id: 2,
        name: "aniket"
    },
    {
        id: 3,
        name: "manoj"
    }
]
users[1].name
console.log(tinderUSer);

console.log(Object.keys(tinderUSer)); // Object.keys() is used to get the keys of the object, it takes an object as a parameter and returns an array with the keys of the object as its elements

console.log(Object.values(tinderUSer)); // Object.values() is used to get the values of the object, it takes an object as a parameter and returns an array with the values of the object as its elements

console.log(Object.entries(tinderUSer)); // Object.entries() is used to get the key-value pairs of the object, it takes an object as a parameter and returns an array with the key-value pairs of the object as its elements, each element in the array is an array with two elements, the first element is the key and the second element is the value

console.log(tinderUSer.hasOwnProperty("name")); // hasOwnProperty() is used to check if the object has a property with the given name, it takes a string as a parameter and returns true if the object has a property with the given name and false if it does not have a property with the given name

const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "jahesh malvia"
}

//course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor); // this is called object destructuring, it is used to extract the values of the properties from the object and assign them to variables with the same name as the properties, it takes an object as a parameter and returns the values of the properties in the object as variables with the same name as the properties