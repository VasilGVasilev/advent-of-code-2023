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
    let regex = /\d{3}/g;
    const LINELENGTH = line.length;
    let allDigitsOnLine = getLineDigits(regex, line, index, array);
    return line;
}

function getLineDigits(regex, line, index, array) {
    let matches = line.match(regex);
    console.log(array[index-1], array[index+1]);
}

console.log(getAllLines());