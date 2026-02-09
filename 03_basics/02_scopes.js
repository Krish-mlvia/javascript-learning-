//scope {}
// let c = 300
// if (true){
//     let a= 10
//     const b = 20
//     var c = 30

// }


//console.log(a);
//console.log(b);
//console.log(c);

//when we use var it is function scoped and when we use let and const it is block scoped

// blocked scope => when we declare a variable inside a block it is only accessible inside that block and not outside of it
let a= 300
if (true){
    let a= 10
    const b = 20
    console.log("INNER: ", a );

}
console.log(a);

//global scope => when we declare a variable outside of any block it is accessible everywhere in the code

function one(){
    const username = "krish"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}
one()


if (true){
    const username = "hitesh"
    if(username === "hitesh") {
        const website = "youtube"
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);


// ++++++++++++++++++++++++++interesting ++++++++++++++++++++++++++++++++


function one(){
    return num + 1
}
addone(5)
















