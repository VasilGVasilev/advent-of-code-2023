const fs = require('fs');

const lines = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\r\n');


// get all lines
// get each line
// get each line's numbers
// check if they have symbols around them
// check if they have symbols within their stretch of the line ex. -234- you need to check on neighbour lines indices 0,1,2,3,4  

function getSumOfNumbers() {
    console.log(getAllLinesNumbers());
    return getAllLinesNumbers().reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    );
}

function getAllLinesNumbers() {
    return lines.map((line, index, array) => getEachLine(line, index, array)).flat();
}

function getEachLine(line, index, array) {
    let regex = /\d{2,3}/g;
    let digitsAndIndicesOnLine = getLineDigitsAndIndices(regex, line); //digits are still strings
    let validDigitsOnLine = [];
    if (Object.keys(digitsAndIndicesOnLine).length > 0) {
        // digit is an object with matches and indicesOfMatches
        for (digit of digitsAndIndicesOnLine) {
            validDigitsOnLine.push(isDigitValid(digit, line, index, array));
            // validDigitsOnLine.push(isDigitValid(digit, line, index, array));
        }
    }


    return validDigitsOnLine;
}

function getLineDigitsAndIndices(regex, line) {
    let matches = line.match(regex);

    let matchesAndIndicesOnLine = [];

    if (matches !== null) {
        for (let match of matches) {
            matchesAndIndicesOnLine.push({ [match]: line.indexOf(match) })
        }

    }
    return matchesAndIndicesOnLine;

    // console.log(matchesAndIndicesOnLine)
    // console.log(line.indexOf(matches[0]));
    // console.log(array[index-1], array[index+1]);
}

function isDigitValid(digit, line, index, array) {

    // const LINELENGTH = line.length;
    let digitValue = Object.keys(digit)[0];
    let digitLength = digitValue.length;
    let digitIndex = Object.values(digit)[0];
    let numberIsValid = false;
    let regexSymbol = /[^a-zA-Z0-9.]/g;

    // digit is valid:
    // if surrounded by symbols on same line
    numberIsValid = validityOnSameLine(line, digitValue, digitIndex, digitLength);


    // if symobol is present within -1/+1 of its lenght on upper or lower line


    if (numberIsValid > 0) {
        return Number(numberIsValid);
    } else {
        if (index > 0) {
            numberIsValid = validityOnUpperLine(digitValue, digitIndex, digitLength, index, array, regexSymbol);
            if (numberIsValid) {
                return Number(numberIsValid);
            }
        }

        if (index + 1 < array.length) {
            numberIsValid = validityOnLowerLine(digitValue, digitIndex, digitLength, index, array, regexSymbol);
            if (numberIsValid) {
                return Number(numberIsValid);
            }
        }


        return 0;
    }
}

function validityOnSameLine(line, digitValue, digitIndex, digitLength) {


    if (line[digitIndex - 1] !== '.' && line[digitIndex - 1] !== undefined || line[digitIndex + digitLength] !== '.' && line[digitIndex + digitLength] !== undefined) {
        return digitValue;
    } else {
        return 0;
    }

}

function validityOnUpperLine(digitValue, digitIndex, digitLength, index, array, regexSymbol) {

    let lineAbove = array[index - 1];
    let matchedSymbol = lineAbove.match(regexSymbol);

    if (matchedSymbol) {
        for (let matchedSymbolInstance of matchedSymbol) {

            let matchedSymbolIndex = lineAbove.indexOf(matchedSymbolInstance);

            let startOfCheckingField = digitIndex - 1 < 0 ? digitIndex : (digitIndex - 1);
            let endOfCheckingField = (digitIndex + digitLength) === array[index].length ? (digitIndex + digitLength) : (digitIndex + digitLength + 1);
            if (startOfCheckingField <= matchedSymbolIndex && endOfCheckingField >= matchedSymbolIndex) {
                return digitValue;
            } 
        }
    }
}

function validityOnLowerLine(digitValue, digitIndex, digitLength, index, array, regexSymbol) {
    let lineBelow = array[index + 1];
    let matchedSymbol = lineBelow.match(regexSymbol);
    if (matchedSymbol) {
        for (let matchedSymbolInstance of matchedSymbol) {
            let matchedSymbolIndex = lineBelow.indexOf(matchedSymbolInstance);
            let startOfCheckingField = digitIndex - 1 < 0 ? digitIndex : (digitIndex - 1);
            let endOfCheckingField = (digitIndex + digitLength) === array[index].length ? (digitIndex + digitLength) : (digitIndex + digitLength + 1);

            if (startOfCheckingField <= matchedSymbolIndex && endOfCheckingField >= matchedSymbolIndex) {
                return digitValue;
            } 
        }
    }
}


console.log(getSumOfNumbers())