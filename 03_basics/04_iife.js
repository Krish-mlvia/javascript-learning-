// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`db connected`);
})();

(() => {
    console.log(`db connected using arrow function`);
})()
// why we use IIFE => to avoid polluting the global scope, 
// to create a private scope for our code, 
// to execute the code immediately without having to call the function, 
// to create a closure and to avoid hoisting issues.

//we can also pass parameters to the IIFE
//also its not necessary to name the function in IIFE, we can also write it as an anonymous function

( (name) => {
    console.log(`name iife ${name}`);
} )("krish");









































