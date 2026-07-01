const contains = function (object, value) {
    for(const obj in object){
        if (object[obj] === value || Number.isNaN(value)) {
            return true;
        }
        else if (typeof(object[obj]) === "object") {
            if (contains(object[obj], value) === true) {
                return true;
            }
        }
    }
    return false;
};
  
// Do not edit below this line
module.exports = contains;
