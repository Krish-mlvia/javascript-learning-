const coding = ["js", "cpp", "java", "python", "ruby", "go", "rust"]

const values =coding.forEach( (item) => {
    console.log(item);
    return item;
})
console.log(values); 
//undefined because forEach does not return anything it just iterates through the array and executes the callback function for each element in the array but it does not return anything so the value of values is undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums =myNums.filter( (num) => num > 4 )
console.log(newNums); // [5, 6, 7, 8, 9, 10] because filter method returns a new array with all the elements that pass the test implemented by the provided function, in this case the test is num > 4 so it returns all the numbers that are greater than 4 in the new array

const newNums1 =myNums.filter( (num) => {num > 4} )
console.log(newNums1); // [] because the callback function is not returning anything so it is returning undefined and undefined is falsy value so it is not passing the test implemented by the provided function and it is not adding any element to the new array so the new array is empty

const newNums2 =myNums.filter( (num) => {return num > 4} )
console.log(newNums2); // [5, 6, 7, 8, 9, 10] because the callback function is returning the value of num > 4 so it is returning true for all the numbers that are greater than 4 and it is adding those numbers to the new array so the new array is not empty and it contains all the numbers that are greater than 4


const newNums3 = []

myNums.forEach( (num) => {
    if (num>4){
        newNums.push(num)
    }
})
console.log(newNums3); // [5, 6, 7, 8, 9, 10] because we are using forEach to iterate through the array and we are using an if condition to check if the number is greater than 4 and if it is greater than 4 then we are pushing that number to the newNums3 array so the newNums3 array is not empty and it contains all the numbers that are greater than 4