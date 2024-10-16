    const palindromes = function (a) {
        let str = a.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()¿?¡]/g, "").toLowerCase();
        str = str.replace(/\s+/g, "")
    if(str == str.split("").reverse().join("")){
        return true
    } else {return false}
};

// Do not edit below this line
module.exports = palindromes;
