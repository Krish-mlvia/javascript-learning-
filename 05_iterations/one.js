// for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
}
// in for loop we have three parts => initialization, condition and increment/decrement

// initialization => it is the first part of the for loop where we initialize the variable that we want to use in the loop
// condition => it is the second part of the for loop where we specify the condition that we want to check before executing the loop
// increment/decrement => it is the third part of the for loop where we specify how we want to change the value of the variable that we initialized in the first part of the for loop after each iteration of the loop

// for of loop => it is used to iterate over the elements of an iterable object like array, string, map, set etc.

for (let i=0;i<10;i++){
    const element = i;
    if(element == 5){
        console.log("element is 5");
    }
    console.log(element);
}
//console.log(element);

for (let i=0;i<=10;i++){
    console.log(`outer loop value: ${i}`);
    for (let j = 0; j <=10; j++) {
        //console.log(`inner loop value: ${j}`);
        console.log(1 + `*` + j + `=` + i*j);
        
        
    }
}

let myArray = ["flash", "superman", "batman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}
//  js doesnt have out of bound ,exceptions 


// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log("index is 5");
        break; // break is used to exit the loop when the condition is met, it will stop the execution of the loop and move to the next line of code after the loop
    }
    console.log(`value of index is ${index}`);
    
}


for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log("index is 5");
        continue; // continue is used to skip the current iteration of the loop when the condition is met, it will move to the next iteration of the loop
    }
    console.log(`value of index is ${index}`);
    
}