const fibonacci = function(numb) {
    let n1 = 0;
    let n2 = 1;
    let num = parseInt(numb);
    if (num < 0) return "OOPS";
    if (num === 0) return 0;
    for (i = 1; i < num; i++) {
        let next_num = n2;
        n2 = n1 + n2;
        n1 = next_num;
    }
    return n2;
};

// Do not edit below this line
module.exports = fibonacci;