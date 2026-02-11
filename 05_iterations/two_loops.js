// while loop => it is used to execute a block of code repeatedly as long as the condition is true
let index = 0
while(index < 10){
    console.log(`value of index is ${index}`);
    index = index + 2

}

// while loop for array

let myArray = ["flash", "superman", "batman"]

let arr = 0
while(arr < myArray.length){
    console.log(`value is ${myArray[arr]}`);
    arr = arr + 1
}


// do while loop => it is used to execute a block of code at least once and then repeatedly as long as the condition is true

let score = 1
do {
    console.log(`score is ${score}`);
    score = score + 1
    
} while (score <= 10);


let game = 6
do {
    console.log(`game is ${game}`);
    game++
    
} while (game <= 5);