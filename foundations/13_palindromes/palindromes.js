const palindromes = function (word) {
    const cleanWord = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
    const wordArray = cleanWord.split("")
    const backwards = []

    for (let i=wordArray.length-1; i>=0; i--) {
        backwards.push(wordArray[i])
    }
    
    return wordArray.join("") === backwards.join("")

};

// Do not edit below this line
module.exports = palindromes;
