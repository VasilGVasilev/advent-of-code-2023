const fs = require('fs');

const lines = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\r\n');


console.log(getFinalSumByAdding());


function getFinalSumByAdding() {

    return getNumsFromRawData().reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
}

function getNumsFromRawData() {

    return lines.map(line => Number(getEachLineNumber(line)));

}

function getEachLineNumber(line) {
    
    let wordToDigit = {
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9"
    };

    return Number(getFirstNumber(line, wordToDigit).concat(getLastNumber(line, wordToDigit)))

}

function getFirstNumber(line, wordToDigit){

        let firstNumber = Array.from(line.matchAll(/(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g), (match) => match[1])[0]

        return firstNumber in wordToDigit ? firstNumber = wordToDigit[firstNumber] : firstNumber = firstNumber;

}

function getLastNumber(line, wordToDigit){

    let lastNumber = Array.from(line.matchAll(/(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g), (match) => match[1]).slice(-1)

    return lastNumber in wordToDigit ? lastNumber = wordToDigit[lastNumber] : lastNumber = lastNumber;
}