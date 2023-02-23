const caesar = function(string, shift) {
    let result = [];

    for (var i = 0; i < string.length; i++) {
        let c = string[i];

        if (c.match(/[a-z]/i)) {
            var code = string.charCodeAt(i);
            if ((code >= 65) && (code <= 90)) {
                c = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if ((code >= 97) && (code <= 122)) {
                c = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            };
            result.push(c);
        };
    };
    return result.join('');
};

// Do not edit below this line
module.exports = caesar;