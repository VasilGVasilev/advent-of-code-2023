const fs = require('fs');

const lines = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\r\n');

let wordToDigit = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9
};

let sum = 0;

for (let line of lines) {

    const regex = /(\d|one|two|three|four|five|six|seven|eight|nine)/g;
    const matches = line.match(regex);
    

    let firstNumber = matches[0];

    if (firstNumber in wordToDigit) {
        firstNumber = wordToDigit[firstNumber];
    } else {
        firstNumber = Number(firstNumber);
    }

    let lastNumber = matches[matches.length - 1];

    if (lastNumber in wordToDigit) {
        lastNumber = wordToDigit[lastNumber];
    } else {
        lastNumber = Number(lastNumber);
    }

    let calibratedNumber = Number(firstNumber.toString().concat(lastNumber.toString()));

    console.log(matches);
    console.log(calibratedNumber);
    sum += calibratedNumber;
}

console.log(sum);