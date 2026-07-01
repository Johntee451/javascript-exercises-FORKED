const permutations = function (array){
    if(array.length === 0){
        return [[]];
    }
    const conArrayOuter = []
    array.forEach( function (element, index, arr) {
        const newArray = arr.toSpliced(index, 1)
        const removdElement = arr[index]
        const returnedValue = permutations(newArray);
        returnedValue.forEach( function (ele){
            const conArrayInner = [removdElement]
            const pushed = conArrayInner.concat(ele)
            conArrayOuter.push(pushed)
        })
    })
    return conArrayOuter
};
  
// Do not edit below this line
module.exports = permutations;
