const sumAll = function(firstNumber, lastNumber) {
    if (!(Number.isInteger(firstNumber) && Number.isInteger(lastNumber))) return "ERROR";
    if (firstNumber < 0 || lastNumber < 0) return "ERROR";
    if (lastNumber < firstNumber) {
        let holder = firstNumber;
        firstNumber = lastNumber;
        lastNumber = holder;
    }
    
    let sum = lastNumber;
    for(let i = firstNumber; i < lastNumber; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
