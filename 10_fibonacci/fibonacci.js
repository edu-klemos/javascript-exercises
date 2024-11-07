const fibonacci = function(numberPlace) {
    if (numberPlace < 0) return "OOPS";
    if (numberPlace == 0) return 0;
    if (numberPlace == 1 || numberPlace == 2) return 1;
    return fibonacci(numberPlace - 1) + fibonacci(numberPlace - 2);
};

// Do not edit below this line
module.exports = fibonacci;
