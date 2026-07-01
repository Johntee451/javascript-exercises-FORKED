const totalIntegers = function (array){
    if (typeof(array) !== "object" || array === null) {
        return undefined;
    }
    let count = 0;
    for(const arr in array){
        if(Number.isInteger(array[arr])){
            count++;
        }
        else if(Array.isArray(array[arr]) || typeof(array[arr]) === "object" && array[arr] !== null){
            let recursCount = totalIntegers(array[arr]);
            count += recursCount;
        }
    }
    return count;
};

// Do not edit below this line
module.exports = totalIntegers;