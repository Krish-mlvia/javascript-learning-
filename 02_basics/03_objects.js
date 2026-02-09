//singleton object 
//Object.create()

//object literals 
const mySym = Symbol("key1") // symbol is a unique identifier that can be used as a key in an object, it is used to create unique keys in an object that cannot be accessed by any other key, it is also used to create private properties in an object that cannot be accessed by any other code outside the object
const jsUser = {
    name: "krish",
    "namee": "krish malvia",
    [mySym]: "key11",
    age: 21,
    location: "banglore",
    email: "krish@example.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],

}

//two ways to access the values in the object
console.log(jsUser.name) //dot notation
console.log(jsUser["namee"]) //bracket notation
console.log(jsUser[mySym])

jsUser.email = "krish@chatgpr.com"
//Object.freeze(jsUser)
console.log(jsUser);
// Object.freeze() is used to freeze the object, it prevents the modification of the object, it does not allow to add new properties to the object, it does not allow to delete properties from the object, it does not allow to change the values of the properties in the object, it does not allow to change the prototype of the object, it does not allow to change the extensibility of the object, it does not allow to change the configurability of the properties in the object, it does not allow to change the writability of the properties in the object, it does not allow to change the enumerability of the properties in the object, it does not allow to change the value of a property that is already defined in the object, it does not allow to change the value of a property that is already defined in the prototype of the object, it does not allow to change the value of a property that is already defined in any other object that is linked to the object through its prototype

jsUser.greeting = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(jsUser.greeting);  // output is undefined 
console.log(jsUser.greeting()) //samaira bhatt











