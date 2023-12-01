const fs = require('fs');

const lines = fs.readFileSync('input.txt', {encoding: 'utf-8'}).split('\r\n');




// to have the first and last number we need to have to algorithms checking for numbers in each direction

let sum = 0;


for (let i = 0; i < lines.length; i++){
    let eachLineNumber;

    let leftToRightNumber;
    for (let j = 0; j < lines[i].length; j++ ){

        if(isNumeric(lines[i][j])){
            leftToRightNumber = lines[i][j];
            break;
        }
    }

    
    let rightToLeftNumber;
    for (let j = lines[i].length - 1; j >= 0; j-- ){

        if(isNumeric(lines[i][j])){
            rightToLeftNumber = lines[i][j];
            break;
        }
    }

    eachLineNumber = leftToRightNumber.concat(rightToLeftNumber);

    sum += Number(eachLineNumber);
}

console.log(sum);

function isNumeric(str) {
    for(let i = 0; i < str.length; i++) {
      const ascii = str.charCodeAt(i);
      if(ascii < 48 || ascii > 57) {
        return false;
      }
    }
    return true;
  }
