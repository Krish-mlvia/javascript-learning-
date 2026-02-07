let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33 ,easily conerted to number
// "33abc" => NaN, not a number, because its not a pure number
// true => 1;  false => 0;

let isloggedIn = "krish"

let booleanIsloggedIn = Boolean(isloggedIn);
console.log(booleanIsloggedIn);

// 1 => true; 0 => false;
//"" => false; "krish" => true 

let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber);




/*never rely on js to convert the string to number because it will give you NaN,
if the string is not a pure number but,
if you want to extract the number from the string you can use parseInt or parsefloat*/ 

// *********************** Operations ************************ //

let value = 3
let negValue = -value
//console.log(negValue);

// console.log(2-2);
// console.log(2+2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2); //remainder

let str1 ="hello"
let str2 = " krish"

let str3 = str1 + str2
console.log(str3);

console.log(1 + 2); //3
console.log("1" + 2);  //12
console.log(1 + "2");  // 12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2");  //32

console.log( (3 + 4) * 5 % 2);

console.log(+true);  // +true => 1
console.log(+false); // +false => 0
console.log(+"");  //+"" => 0

let num1,num2,num3
num2 = num2 = num3 = 2 + 2

let gamCounter = 100
++gamCounter;
console.log(gamCounter);
