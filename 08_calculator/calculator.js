const add = function(n1, n2) {
    return n1 + n2;
};

const subtract = function(n1, n2) {
    return n1 - n2;
};

const sum = function(arr) {
    return arr.reduce((a, b) => a + b, 0)
};

const multiply = function(arr) {
    return arr.reduce((a, b) => a * b, 1);
};

const power = function(n1, n2) {
    return Math.pow(n1, n2);
};

const factorial = function(number) {
    var rval = 1;
    for (var i = 2; i <= number; i++)
        rval = rval * i;
    return rval;
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