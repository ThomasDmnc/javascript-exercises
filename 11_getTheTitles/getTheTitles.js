const getTheTitles = function(array) {
    let newArray = [];
    array.map((book) => {
        newArray.push(book.title)
    });
    return newArray;
};

// Do not edit below this line
module.exports = getTheTitles;