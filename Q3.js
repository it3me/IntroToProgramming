const prompt = require("prompt-sync")();
let name = null;

while(name != "Alice" && name != "Bob"){
    name = prompt("plesae enter your name here :  ");
    if(name == "Alice" || name === "Bob"){
        console.log("hello " + name);
    }else{
        console.log('please enter a valid name');
    }
}