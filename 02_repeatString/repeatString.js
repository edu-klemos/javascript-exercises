const repeatString = function(text, numberRepetitions) {
    if (numberRepetitions < 0) {
        return 'ERROR';
    }
    let repeatedText = "";
    for (let i = 0; i < numberRepetitions; i++) {
        repeatedText += text;
    }
    return repeatedText; 
};

// Do not edit below this line
module.exports = repeatString;
