const fs = require('fs');

const lines = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\r\n');

// my output 538046, a bit above actual right number, cannot check for edge cases anymore
console.log('Sum:', getSumOfNumbers())

// get all lines
// get each line
// get each line's numbers
// check if they have symbols around them
// check if they have symbols within their stretch of the line ex. -234- you need to check on neighbour lines indices 0,1,2,3,4 

function getSumOfNumbers() {
    console.log('Nums to sum:', getAllLinesNumbers());
    return getAllLinesNumbers().reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    );
}

function getAllLinesNumbers() {
    return lines.map((line, index, array) => getEachLine(line, index, array)).flat();
}

function getEachLine(line, index, array) {
    let regex = /\d{1,3}/g;
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
    let lineCopy = line; //regex consumes the elements, so anti-pattern, but works

    let matchesAndIndicesOnLine = [];
    let matchedDigit;

    while ((matchedDigit = regex.exec(lineCopy)) !== null) {
        let index = matchedDigit.index;
        let value = matchedDigit[0];
        matchesAndIndicesOnLine.push({ [value]: index });
    }

    return matchesAndIndicesOnLine;
}

function isDigitValid(digit, line, index, array) {

    // const LINELENGTH = line.length;
    let digitValue = Object.keys(digit)[0];
    let digitLength = digitValue.length;
    let digitIndex = Object.values(digit)[0];
    let numberIsValid;
    let regexSymbol = /[^a-zA-Z0-9.]/g; //any symbol other than . 

    // digit is valid:
    // if surrounded by symbols on same line
    numberIsValid = validityOnSameLine(index, array, regexSymbol, line, digitValue, digitIndex, digitLength);

    // if symobol is present within -1/+1 of its lenght on upper or lower line


    if (numberIsValid) {
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

function validityOnSameLine(index, array, regexSymbol, line, digitValue, digitIndex, digitLength) {

    let lineForRegex = line; //regex consumes matches so make a new refernce
    let elementBeforeDigit = digitIndex - 1;
    let elementAfterDigit = digitIndex + digitLength;
    if (digitIndex === 0) {
        let symbolFound = lineForRegex[elementAfterDigit].match(regexSymbol);
        if (symbolFound) {
            return digitValue;
        } else {
            return 0;
        }
    }
    if ((digitIndex + digitLength) === lineForRegex.length) {
        let symbolFound = lineForRegex[elementBeforeDigit].match(regexSymbol);
        if (symbolFound) {
            return digitValue;
        } else {
            return 0;
        }
    }

    if (digitIndex > 0) {

        let symbolFoundBefore = lineForRegex[elementBeforeDigit].match(regexSymbol);
        let symbolFoundAfter = lineForRegex[elementAfterDigit].match(regexSymbol);

        if (symbolFoundBefore) {
            return digitValue;
        }
        if (symbolFoundAfter) {
            return digitValue;
        }
    }



    if ((digitIndex + digitLength) < lineForRegex.length) {
        let symbolFoundBefore = lineForRegex[elementBeforeDigit].match(regexSymbol);
        let symbolFoundAfter = lineForRegex[elementAfterDigit].match(regexSymbol);

        if (symbolFoundBefore) {
            return digitValue;
        }
        if (symbolFoundAfter) {
            return digitValue;
        }
    }
}

function validityOnUpperLine(digitValue, digitIndex, digitLength, index, array, regexSymbol) {

    let lineAbove = array[index - 1];

    let matchedSymbol;

    // we do this so that we take each unique digit index, regualr regex is shallow so 987 followed by 7, second digit will have the index of 98(7)
    let matchSymbolArr = [];
    while ((matchedSymbol = regexSymbol.exec(lineAbove)) !== null) {
        let index = matchedSymbol.index;
        let value = matchedSymbol[0];
        matchSymbolArr.push({ [value]: index });
    }

    // indices used to ascertain the position of possibly valid digits
    if (matchSymbolArr.length > 0) {
        for (let matchedSymbolInstance of matchSymbolArr) {

            let symbol = Object.values(matchedSymbolInstance)[0]
            let startOfCheckingField = digitIndex - 1 < 0 ? digitIndex : (digitIndex - 1);
            let endOfCheckingField = (digitIndex + digitLength) === array[index].length ? (digitIndex + digitLength - 1) : (digitIndex + digitLength);
            if (startOfCheckingField <= symbol && endOfCheckingField >= symbol) {
                return digitValue;
            }
        }
    }
}

function validityOnLowerLine(digitValue, digitIndex, digitLength, index, array, regexSymbol) {



    let lineAbove = array[index + 1];

    // let matchedSymbol = regexSymbol.exec(lineAbove);
    let matchedSymbol;
    let matchSymbolArr = [];
    while ((matchedSymbol = regexSymbol.exec(lineAbove)) !== null) {
        let index = matchedSymbol.index;
        let value = matchedSymbol[0];
        matchSymbolArr.push({ [value]: index });
    }
    if (matchSymbolArr.length > 0) {
        for (let matchedSymbolInstance of matchSymbolArr) {

            let symbol = Object.values(matchedSymbolInstance)[0]
            let startOfCheckingField = digitIndex - 1 < 0 ? digitIndex : (digitIndex - 1);
            let endOfCheckingField = (digitIndex + digitLength) === array[index].length ? (digitIndex + digitLength - 1) : (digitIndex + digitLength);
            if (startOfCheckingField <= symbol && endOfCheckingField >= symbol) {
                return digitValue;
            }
        }
    }
}

