const fs = require('fs');

const lines = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\r\n');


// get all lines
// get each line
// get each line's numbers
    // check if they have symbols around them
    // check if they have symbols within their stretch of the line ex. -234- you need to check on neighbour lines indices 0,1,2,3,4  

function getAllLines() {
    return lines.map((line, index, array) => getEachLine(line, index, array))
}

function getEachLine(line, index, array) {
    let regex = /\d{2,3}/g;
    let digitsAndIndicesOnLine = getLineDigitsAndIndices(regex, line); //digits are still strings
    let validDigitsOnLine = [];
    if(Object.keys(digitsAndIndicesOnLine).length > 0){
        // digit is an object with matches and indicesOfMatches
        for(digit of digitsAndIndicesOnLine){
            validDigitsOnLine.push(isDigitValid(digit, line, index, array));
            // validDigitsOnLine.push(isDigitValid(digit, line, index, array));
        }
    }
    console.log(validDigitsOnLine);

    
    return line;
}

function getLineDigitsAndIndices(regex, line) {
    let matches = line.match(regex);

    let matchesAndIndicesOnLine = [];
    
    if(matches !== null){
        for (let match of matches){
            matchesAndIndicesOnLine.push({[match]: line.indexOf(match)})
        }

    }
    return matchesAndIndicesOnLine;

    // console.log(matchesAndIndicesOnLine)
    // console.log(line.indexOf(matches[0]));
    // console.log(array[index-1], array[index+1]);
}

function isDigitValid(digit, line, index, array){

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
    numberIsValid = validityOnUpperLine(digitValue, digitIndex, digitLength, index, array, regexSymbol);

    numberIsValid = validityOnLowerLine(digitValue, digitIndex, digitLength, index, array, regexSymbol);

    if(numberIsValid){
        return numberIsValid;
    } else {
        return 0;
    }
}

function validityOnSameLine(line, digitValue, digitIndex, digitLength){


    if(line[digitIndex - 1] !== '.' && line[digitIndex - 1] !== undefined || line[digitIndex + digitLength] !== '.' && line[digitIndex + digitLength] !== undefined ){
        return digitValue;
    } else {
        return false;
    }

}

function validityOnUpperLine(digitValue, digitIndex, digitLength, index, array, regexSymbol){
    let lineAbove = array[index - 1];
    console.log(lineAbove)
    if(index > 0){
        let matchedSymbol = lineAbove.match(regexSymbol);
        if(matchedSymbol){
            let matchedSymbolIndex = lineAbove.indexOf(matchedSymbol);
            if(digitIndex - 1 >= matchedSymbolIndex && digitIndex + digitLength <= matchedSymbolIndex){
                return digitValue;
            } else {
                return false;
            }
        }
        // console.log(array[index + 1]);
    }
}

function validityOnLowerLine(digitValue, digitIndex, digitLength, index, array, regexSymbol){
    let lineBelow = array[index + 1];
    console.log(lineBelow)

    if(index < lines.lenght){
        console.log(lineBelow);
        let matchedSymbol = lineBelow.match(regexSymbol);
        if(matchedSymbol){
            let matchedSymbolIndex = lineBelow.indexOf(matchedSymbol);
            if(digitIndex - 1 >= matchedSymbolIndex && digitIndex + digitLength <= matchedSymbolIndex){
                return digitValue;
            } else {
                return false;
            }
        }
        // console.log(array[index + 1]);
    }
}


getAllLines()