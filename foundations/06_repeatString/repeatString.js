const repeatString = function(str, num) {
    let result = '';
    
    for (let i = 0; i < num; i++) {
        result += str;
    }
    console.log(result);
};

repeatString('', 10);

// Do not edit below this line
module.exports = repeatString;
