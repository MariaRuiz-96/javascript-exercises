const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, num)=>{
    return total + num
  },0)
};

const multiply = function(array) {
	return array.reduce((total, num)=>{
    return total * num
  },1)
};

const power = function(a,b) {
  let fac = a
  let total =a
	for(let i= 1; i < b; i++){
    
    total *= fac
  }
  return total

  //* se ouede usar mas facil math.pow(a,b)
};

const factorial = function(a) {
	if(a == 0){
    return 1
  } else {
    let fac = 1
    for(let i = 1; i <= a; i++){
      fac *= i
    }
    return fac
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
