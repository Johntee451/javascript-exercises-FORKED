const removeFromArray = function(array, ...args) {
    array.sort();
    args.sort();
    for (const arg of args) {
        if (array.includes(arg)) {
            let firstIndex = array.indexOf(arg);
            let lastIndex = array.lastIndexOf(arg);
            let realIndex = (lastIndex - firstIndex) + 1;
            array.splice(firstIndex, realIndex);
        }
    }
    return(array);
};

// Do not edit below this line
module.exports = removeFromArray;
