const fibonacci = function(n) {
    if(n < 0){
        return "OPPS"
    } else if(n == 0 || n == 1){
        return 1
        } else{
            for(let i = 0; i < n; i++){
                n= (n-1) + (n-2)
            }

            return n
        }
};

// Do not edit below this line
module.exports = fibonacci;
