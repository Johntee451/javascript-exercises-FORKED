const fibonacci = function(num) {

    let realNumber = Number(num);
    let fibo = [];

    if (realNumber > 0) {
        for (let i = 0; i <= num; i++) {
        
            if (i === 0) {
                fibo.push(1);
            }
            if (i === 1) {
                fibo.push(1);
            }
            if (i === 2) {
                fibo.push(2);
            }
            if (i === 3) {
                fibo.push(3);
            }
            if (i > 3) {
                fibo[fibo.length] = fibo[fibo.length-1] + fibo[fibo.length-2];
            }
        }
        return(fibo[realNumber-1]);
    }
    else if (realNumber < 0) {
        return("OOPS");
    }
    else{
        return(realNumber);
    }
};

// Do not edit below this line
module.exports = fibonacci;
