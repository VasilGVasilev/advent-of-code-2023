const fs = require('fs');

const lines = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\r\n');




// to have the first and last number we need to have to algorithms checking for numbers in each direction

console.log(getFinalSumByAdding());


function getFinalSumByAdding() {

    let allNumbersRefined = [];

    lines.map(line => allNumbersRefined.push(Number(getEachLineNumber(line))))

    return allNumbersRefined.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
}


function getEachLineNumber(line) {

    return (getLeftToRightNumber(line)).concat(getRightToLeftNumber(line));

}

function getLeftToRightNumber(line) {
    return line.split('').find(eachChar => isNumeric(eachChar))
}

function getRightToLeftNumber(line) {
    return line.split('').findLast(eachChar => isNumeric(eachChar))
}

function isNumeric(element) {
    const ascii = element.charCodeAt(0);

    if (ascii >= 48 && ascii <= 57) {
        return element;
    }

}
