const prompt = require("prompt-sync")();
let number;
number = prompt('please enter the number : ');
// while(!isNaN(number)){
//     console.log('plesae enter a valid number :');
//     number = prompt('please enter the number : ');
// }
for(let i=1; i<=12; i++){
    console.log(number + " * " + i + " = "+ i*number);
}