const fibonacci = function(n) {
    let num =Number(n)
    if( num < 0){
        return "OOPS"
    } else {
        let fib = [0,1]
        for(let i = 2; i <= num; i++){
            fib[i]= fib[i-1] + fib[i-2]
        }
        return fib[n]
    }


};

// Do not edit below this line
module.exports = fibonacci;
