const getTheTitles = function(array) {
    let bookTitles = [];
    for (const arr of array) {
        bookTitles.push(arr.title);
    }
    return(bookTitles);
};

// Do not edit below this line
module.exports = getTheTitles;
