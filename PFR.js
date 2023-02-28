//code for identifying a prime number
function PrimeNum(num){
    const x = num
    if(x < 2){
    return false 
    }
    //2,3,5,7 are primeNum are numbers that can divide other integers that aren't primeNum
    if ( x===2 || x===3 || x===5 || x===7) {
        console.log(x," is a prime number");
    }
    if(x % 2===0 ||x % 3===0 || x % 5===0 || x % 7===0 ){
        console.log(x," is not a prime number");
    }
    else{
        console.log(x," is a prime number")
    }

}console.log(PrimeNum(756))


//Factorial
function factorial(n){
    var result =1;
    for(var i = n; i > 0; i--){
        result *=i
    }
    return result;
}
console.log(factorial(5))


//random number with min and maximum
function getrandom(min,max){
    return Math.floor(Math.random() * (max-min + 1) ) + min
}
console.log(getrandom(29,90));