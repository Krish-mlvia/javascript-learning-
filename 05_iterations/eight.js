// reduce is a method that takes an array and reduces it to a single value by applying a function to each element in the array.
// it takes a callback function and an initial value as parameters, the callback function takes four parameters, the first parameter is the accumulator, the second parameter is the current value, the third parameter is the current index and the fourth parameter is the array itself, the initial value is optional and if it is not provided then the first element of the array will be used as the initial value and the iteration will start from the second element of the array.

const numbers = [1, 2, 3, 4, 5]

// const total =numbers.reduce(function(acc,currval) {
//     console.log(`accumulator: ${acc}, current value: ${currval}`);
//     return acc + currval;
// },0) // 0 is the initial value of the accumulator
// console.log(total); // 15 because the reduce method is adding all the elements of the array and returning the total

const myTotal = numbers.reduce((acc,curr) => acc+curr, 0)
console.log(myTotal); // 15 because the reduce method is adding all the elements of the array and returning the total, in this case we are using an arrow function as the callback function and we are also providing the initial value of the accumulator as 0 so it is adding all the elements of the array starting from 0 and returning the total

const shoppingCart = [
    {item: "laptop", price: 1000},
    {item: "phone", price: 500},
    {item: "tablet", price: 300},
    {item: "monitor", price: 200},
    {item: "keyboard", price: 100}


]
const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price, 0)
console.log(priceToPay); // 2100 because the reduce method is adding the price of all the items in the shopping cart and returning the total price to pay




