const prompt = require("prompt-sync")();
let name = null;
while(name === null || !isNaN(name)){
    name = prompt("what is your name?");

    if(name === null || !isNaN(name)){
        console.log("Plese insert valid name");
    }else{
        console.log('hello '+ name);
    }

}
