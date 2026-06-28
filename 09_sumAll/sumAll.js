const sumAll = function(startNum, endNum) {
    
    let parseStartNum = parseInt(startNum);
    let parseEndNum = parseInt(endNum);
    let sum = 0;

    if (startNum !== parseStartNum || endNum !== parseEndNum) {
        return("ERROR");
    }
    else if(parseStartNum < 1 || parseEndNum < 1){
        return("ERROR");
    }
    else if(parseStartNum > parseEndNum){
        for (let i = parseStartNum; i >= parseEndNum; i--) {
        sum += i;
        }
        return(sum);
    }
    else{
        for (let i = parseStartNum; i <= parseEndNum; i++) {
        sum += i;
        }
        return(sum);
    }
};

// Do not edit below this line
module.exports = sumAll;
