const prompt = require('prompt-sync')();
function isLeap(year){
    if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
        return true;
    }
}

//let year = new Date().getFullYear();
let year = prompt("please enter the year to check");
isLeap(year)
    ? (console.log(year+ "is Leap"))
    : (console.log(year+ "is not Leap"));
