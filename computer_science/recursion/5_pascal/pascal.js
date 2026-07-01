const pascal = function (row){
    if (row === 1) {
        return [1];
    }
    const prevRow = pascal(row - 1)
    const newRow = prevRow
    newRow.unshift(0)
    newRow.push(0)
    const mapArray = newRow.map(
        function(a,b,c){
            return a+c[b+1]
        }
    )
    const splicedMapArray = mapArray.splice(0, mapArray.length-1)
    return(splicedMapArray)
};
  
// Do not edit below this line
module.exports = pascal;
