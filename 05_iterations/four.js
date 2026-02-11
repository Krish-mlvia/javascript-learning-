const myObject = {
    js : "javaScript",
    cpp : "c++",
    java : "java"
    
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}



const programming = ["javaScript", "c++", "java"]
for (const key in programming) {
    console.log(key);
}    