const palindromes = function (word) {
    let wordToArray;
    let wordWithoutChar;
    let lowerCaseWordWithoutChar;
    let wordWithoutCharToArray;
    let reversedWordWithoutCharToArray;
    let reversedWord

    wordToArray = word.split("");
    wordWithoutChar = "";
    for (const wta of wordToArray) {
        if ((wta !== ",") && (wta !== ".") && (wta !== "!") && (wta !== " ")) {
            wordWithoutChar += wta;
        }
    }
    lowerCaseWordWithoutChar = wordWithoutChar.toLowerCase();
    wordWithoutCharToArray = lowerCaseWordWithoutChar.split("");
    reversedWordWithoutCharToArray = wordWithoutCharToArray.reverse();
    reversedWord = reversedWordWithoutCharToArray.join("");

    if (lowerCaseWordWithoutChar === reversedWord) {
    return(true);
    }
    else{
    return(false);
    }
};

// Do not edit below this line
module.exports = palindromes;
