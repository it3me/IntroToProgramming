const prompt = require("prompt-sync")();
//let sum = 0;
let num;

num = prompt("please enter a number to calculate the sum of numbers before that : ");
if(!isNaN(num) && num !== null){
    ///////////// sum = (num * (num +1))/2; ???
    for(let i=1; i<= num; i++){
        sum += i;
    }
    console.log(' the sum is equal to : '+ sum);
}else{
    console.log("please enter a valid number...");
}

// function total(num){
//     let total = 0;
//     total = (num* (num +1))/2;
//     console.log("Total is :" + total);
// }
// function run(){
//     num = prompt("please enter a number to calculate the sum of numbers before that : ");
//     total(num);
// }
