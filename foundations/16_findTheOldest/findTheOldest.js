const findTheOldest = function(persons) {
    for (const key in persons) {
        if (persons[key]["yearOfDeath"] !== undefined) {
            return(
                persons.reduce(function(obj1, obj2){
                    let firstObj = obj1.yearOfDeath - obj1.yearOfBirth;
                    let secondObj = obj2.yearOfDeath - obj2.yearOfBirth;
                    if (firstObj > secondObj) {
                        return (obj1);
                    }
                    else{
                        return (obj2);
                    }
                })
            );
        }
        else if(persons[key]["yearOfDeath"] === undefined){
            persons[key]["yearOfDeath"] = 2025;
            return(
                persons.reduce(function(obj1, obj2){
                    let firstObj = obj1.yearOfDeath - obj1.yearOfBirth;
                    let secondObj = obj2.yearOfDeath - obj2.yearOfBirth;
                    if (firstObj > secondObj) {
                        return (obj1);
                    }
                    else{
                        return (obj2);
                    }
                })
            );
        }
    }
};

// Do not edit below this line
module.exports = findTheOldest;
