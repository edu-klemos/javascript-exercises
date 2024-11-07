const findTheOldest = function(people) {
    return people.reduce((oldestPerson, nextPerson) => {
        console.log(oldestPerson);
        console.log(oldestPerson);
        const oldestPersonAge = (oldestPerson.yearOfDeath || new Date().getFullYear()) - oldestPerson.yearOfBirth;
        const nextPersonAge = (nextPerson.yearOfDeath || new Date().getFullYear()) - nextPerson.yearOfBirth;
        if (nextPersonAge > oldestPersonAge) return nextPerson;
        else return oldestPerson;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
