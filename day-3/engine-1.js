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
    
    // digit is valid:
    // if surrounded by symbols on same line
    numberIsValid = validityOnSameLine(line, digitValue, digitIndex, digitLength);
    

    // if symobol is present within -1/+1 of its lenght on upper or lower line
    numberIsValid = validityOnUpperLine(line, digitValue, digitIndex, digitLength, index);

    // return validityOnLowerLine(line, digitValue, digitIndex, digitLength, index);

    if(numberIsValid){
        return 222
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

function validityOnUpperLine(line, digitValue, digitIndex, digitLength, index){
    if(index > 0){
        console.log('ee');
    }
}

function validityOnLowerLine(line, digitValue, digitIndex, digitLength, index){
    if(index < lines.lenght){
        console.log('ee');
    }
}

getAllLines()