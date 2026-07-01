const factorial = function (range) {
    if (range === 1 || range === 0) {
        return 1;
    }
    else if (range < 0 || !Number.isInteger(range) || String(range) === range || Array.isArray(range)) {
        return undefined;
    }
    return(range * factorial(range - 1));
};

// Do not edit below this line
module.exports = factorial;