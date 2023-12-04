const fs = require('fs');

const lines = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\r\n');



// getTotalPower()

// getEachGamePower()

// redCubesMax()

// blueCubesMax()

// greenCubesMax()



console.log(getTotalPower())

function getTotalPower() {
    return getAllGamesPower().reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
}


function getAllGamesPower() {
    return lines.map(line => getEachGamePower(line))
}



function getEachGamePower(line) {
    let gameSplit = line.split(': ');
    let gameStatus = gameSplit.pop();

    return (redCubesMax(gameStatus) * greenCubesMax(gameStatus) * blueCubesMax(gameStatus));

}

function redCubesMax(gameStatus){
    const redRegex = /(\d+ red)/g;
    
    let matchesNumAndColor = gameStatus.match(redRegex).join(', ');

    let numOfReds = matchesNumAndColor.match(/\d+/g).map(el=>Number(el));

    return Math.max(...numOfReds);

}

function blueCubesMax(gameStatus){
    const blueRegex = /(\d+ blue)/g;
    
    let matchesNumAndColor = gameStatus.match(blueRegex).join(', ');

    let numOfBlues = matchesNumAndColor.match(/\d+/g).map(el=>Number(el));
    
    return Math.max(...numOfBlues);

}

function greenCubesMax(gameStatus){
    const greenRegex = /(\d+ green)/g;
    
    let matchesNumAndColor = gameStatus.match(greenRegex).join(', ');

    let numOfGreens = matchesNumAndColor.match(/\d+/g).map(el=>Number(el));

    return Math.max(...numOfGreens);

}
