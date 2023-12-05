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
    const LINELENGTH = line.length;
    let digitsAndIndicesOnLine = getLineDigitsAndIndices(regex, line); //digits are still strings
    let validDigitsOnLine = isDigitValid(digitsAndIndicesOnLine, line, index, array);
    return line;
}

function getLineDigitsAndIndices(regex, line) {
    let matches = line.match(regex);

    
    let indicesOfMatches = [];
    
    if(matches !== null){
        for (let match of matches){
            indicesOfMatches.push(line.indexOf(match));
        }
    
        let matchesAndIndicesOnLine = {
            matches,
            indicesOfMatches
        }
        console.log(matchesAndIndicesOnLine);
        return matchesAndIndicesOnLine;
    }
    // console.log(matchesAndIndicesOnLine)
    // console.log(line.indexOf(matches[0]));
    // console.log(array[index-1], array[index+1]);
}

function isDigitValid(digitsAndIndicesOnLine, line, index, array){
    console.log(index);
    for (digitObj in digitsAndIndicesOnLine){
        
    }
}

getAllLines()