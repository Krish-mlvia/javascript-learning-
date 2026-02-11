const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for loop => it is used to execute a block of code a certain number of times

// myNums.map((num)=> num + 10)
// console.log(newNums); // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20] because map method returns a new array with the results of calling a provided function on every element in the calling array, in this case the provided function is num + 10 so it is adding 10 to each element in the myNums array and returning a new array with the updated values

// myNums.map((num)=> { return num + 10})
// console.log(newNums);

const newNums = myNums 
.map((num)=> num + 10)
.map((num)=> num * 10)
.filter((num)=> num > 150)
console.log(newNums); // [160, 170, 180, 190, 200] because we are chaining the map and filter methods together so first we are adding 10 to each element in the myNums array and then we are multiplying each element by 10 and then we are filtering out the elements that are greater than 150 and returning a new array with the updated values