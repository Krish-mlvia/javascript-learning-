// control flow or logic flow

//if statement

const isUserLoggedIn = true
if(isUserLoggedIn){
    console.log("show the user profile");

}
// <, >, <=, >=, ==, !=, ===, !==
if(1 > 11){
    console.log("2 is greater than 1");
}else{
    console.log("11 is greater than 1");
}

const temperature = 30
if(temperature > 30){
    console.log("it is hot outside");
}else if(temperature < 30 && temperature > 20){
    console.log("it is warm outside");
}else{
    console.log("it is cold outside");
}


// switch statement

const month = 10

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    default:
        console.log("Invalid month");
        break;
}



const month1 = "march"

switch (month1) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "march":
        console.log("March");
        break;
    default:
        console.log("Invalid month");
        break;
}