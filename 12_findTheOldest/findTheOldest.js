const findTheOldest = function(array) {
    let newArray = [];
    let survivor = [];
    array.map((people) => {
        newArray.push(people.yearOfBirth - people.yearOfDeath)
        if (people.yearOfDeath === undefined) {
            survivor.push(array.indexOf(people))
        };
    });
    let min = Math.min(...newArray);
    let index = newArray.indexOf(min);


    if (survivor.length > 0) {
        return array[survivor[0]];
    } else {
        return array[index];
    };

};

// Do not edit below this line
module.exports = findTheOldest