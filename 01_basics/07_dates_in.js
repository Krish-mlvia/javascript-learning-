//dates is calculated in milliseconds since 1 Jan 1970 UTC

let myDate = new Date() // it will give you the current date and time
console.log(myDate.toString()); //toString() is used to convert the date to a string
console.log(myDate.toDateString()); //toDateString() is used to convert the date to a string in the format of "Day Month Date Year"
console.log(myDate.toTimeString()); //toTimeString() is used to convert the date to a string in the format of "HH:MM:SS GMT+xxxx (Timezone)"
console.log(myDate.toLocaleString()); //toLocaleString() is used to convert the date to a string in the format of "MM/DD/YYYY, HH:MM:SS AM/PM" based on the locale of the system
console.log(typeof myDate);

//let myCraetedDate = new Date(2026, 0, 26 , 5, 5) 
//let myCraetedDate = new Date("2026-01-26") 
let myCreatedDate = new Date("01-14-2026")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000)); //Date.now() is used to get the current time in milliseconds since 1 Jan 1970 UTC



console.log(myDate.getTime()); //getTime() is used to get the time in milliseconds since 1 Jan 1970 UTC
console.log(myDate.getFullYear()); //getFullYear() is used to get the year of the date
console.log(myDate.getMonth()); //getMonth() is used to get the month of the date, it returns a number from 0 to 11, where 0 is January and 11 is December
console.log(myDate.getDate()); //getDate() is used to get the day of the month of the date
console.log(myDate.getDay()); //getDay() is used to get the day of the week of the date, it returns a number from 0 to 6, where 0 is Sunday and 6 is Saturday
console.log(myDate.getHours()); //getHours() is used to get the hours of the date
console.log(myDate.getMinutes()); //getMinutes() is used to get the minutes of the date
console.log(myDate.getSeconds()); //getSeconds() is used to get the seconds of the date
console.log(myDate.getMilliseconds()); //getMilliseconds() is used to get the milliseconds of the date

// we can also create a date by passing the date string or by passing the year, month and day as arguments to the Date constructor
