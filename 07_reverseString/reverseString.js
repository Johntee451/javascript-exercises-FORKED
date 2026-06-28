const reverseString = function(str) {

    let splited = str.split("");
    console.log(splited);
    let reversed = splited.toReversed();
    console.log(reversed);
    let joined = reversed.join("");
    console.log(joined);
};

reverseString('');

// Do not edit below this line
module.exports = reverseString;
