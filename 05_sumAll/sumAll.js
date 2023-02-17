const sumAll = function(int1, int2) {
    var lowEnd = 0;
    var highEnd = 0;
    let sum = 0;

    if (typeof int1 !== 'number' || typeof int2 !== 'number') {
        return 'ERROR';
    } else if (int1 < 0 || int2 < 0) {
        return 'ERROR';
    } else if (int1 < int2) {
        lowEnd = int1;
        highEnd = int2;
    } else {
        lowEnd = int2;
        highEnd = int1;
    }

    for (let i = Math.min(lowEnd, highEnd); i <= Math.max(lowEnd, highEnd); i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;