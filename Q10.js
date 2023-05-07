
//
function isLeap(year){
    if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
        return true;
}

function getNextNLeapYear(currentYear){
    let arr = [];
    while(arr.length < 20){
        if(isLeap(currentYear)){
            arr.push(currentYear);
        }
        currentYear++;
    }
   
    console.log('the Leap years are :'+ arr);   
}

let currentYear = new Date().getFullYear();
//const n = prompt("the number of comming Leap years that you want to show is :");
getNextNLeapYear(currentYear);