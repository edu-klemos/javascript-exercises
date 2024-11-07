const removeFromArray = function(sequence, ...itemsToRemove) {
    sequence = sequence.filter(item => !(itemsToRemove.includes(item)));
    return sequence;
};

// Do not edit below this line
module.exports = removeFromArray;