const prompt = require('prompt-sync')();
let num = 0;
let sum = 0 ;
let array = [];
num = prompt('please enter a valid number ');
if(!isNaN(num)){
    for (let i=1; i<= num; i++){
        if(i% 3 === 0 || i % 5 ===0){
            array.push(i);
            sum += i;
        }
    }
    console.log("sum is : " + sum);
    console.log('array is :' + array);
}