const coding = ["js", "cpp", "java", "python", "ruby", "go", "rust"]

// coding.forEach( function (val) {
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item)
// } ) 

// function printMe(item){
//     console.log(item);

// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        language : "javascript",
        languageFileName : "java"
    },
    {
        language : "python",
        languageFileName : "py"
    },
    {
        language : "ruby",
        languageFileName : "rb"
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageFileName)

})