const prompt = require('prompt-sync')();
function getPrimeNumbers(n){
    const arr = [];
    for(let i = 2; i< n; i++){
        var flag = 0;
        for (let j=2; j< i; j++){
            if(i%j === 0){
                flag = 1;
                break;
            }
        }
        if(flag === 0 ){
            arr.push(i);
        }
        
    }
    console.log('All prime numbers are :' + arr)
}
let n = prompt('please enter your number :') ;

getPrimeNumbers(n) ;
    