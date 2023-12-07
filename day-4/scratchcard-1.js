const fs = require('fs');

const lines = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\r\n');

console.log(getSumOfLines())

function getSumOfLines() {
    return getAllLinesNumbers().reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
}

function getAllLinesNumbers() {
    return lines.map(line => getEachLineMultiplier(line))
}

function getEachLineMultiplier(line) {
    let lineSplitted = line.split(':');
    let lineId = lineSplitted.shift();
    let lineNumbers = lineSplitted.shift();
    let arrOfMatchingWinningNumbers = getAllMatchingWinningNumbers(lineNumbers);
    if(arrOfMatchingWinningNumbers.length === 1){
        return Number(1);
    } else if(arrOfMatchingWinningNumbers.length > 1){
        return 2 ** (arrOfMatchingWinningNumbers.length - 1);
    }
    return 0;

}

function getAllMatchingWinningNumbers(lineNumbers) {
    let lineNumbersSplitted = lineNumbers.split(' | ');
    let winningNumbers = getNumsViaRegex(lineNumbersSplitted.shift());
    let givenNumbers = getNumsViaRegex(lineNumbersSplitted.shift());

    return winningNumbers.filter(element => givenNumbers.includes(element));

}

function getNumsViaRegex(rawNumbers) {
    let regex = /\d{1,2}/g;
    let numberMachted;

    // we do this so that we take each unique digit index, regualr regex is shallow so 987 followed by 7, second digit will have the index of 98(7)
    let numbersArr = [];
    while ((numberMachted = regex.exec(rawNumbers)) !== null) {
        let value = numberMachted[0];
        numbersArr.push(Number(value));
    }
    return numbersArr;
}

