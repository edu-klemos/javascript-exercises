const palindromes = function (text) {
    const reverseString = function (text) {
        return text.split("").reverse().join("");
    };

    const onlyNumbersLettersRegex = /\W/g;
    let cleanTextLowerCase = text.replace(onlyNumbersLettersRegex, "").toLowerCase();
    
    return cleanTextLowerCase === reverseString(cleanTextLowerCase);

    

};

// Do not edit below this line
module.exports = palindromes;
