const fs = require('fs');

const lines = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\r\n');



// getSumOfPossibleGamesId()

// getPossibleGames()

// getPossibleGame()

const maxCubes = {
    red: 12,
    green: 13,
    blue: 14
}

console.log(getPossibleGamesIdSum())

function getPossibleGamesIdSum() {
    console.log(getPossibleGames());
    return getPossibleGames().reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
}


function getPossibleGames() {
    return lines.map(line => getPossibleGameIdOr0(line))
}



function getPossibleGameIdOr0(line) {
    let gameSplit = line.split(': ');
    let gameStatus = gameSplit.pop();
    let gameId = gameSplit.pop();


    if(redCubesAboveMax(gameStatus) || blueCubesAboveMax(gameStatus) || greenCubesAboveMax(gameStatus)){
        return Number(0);
    }

    return Number(gameId.split(' ')[1]);

}

function redCubesAboveMax(gameStatus){
    const redRegex = /(\d+ red)/g;
    
    let matchesNumAndColor = gameStatus.match(redRegex).join(', ');

    let numOfReds = matchesNumAndColor.match(/\d+/g).map(el=>Number(el));

    return numOfReds.some(color=>color > maxCubes.red);


}

function blueCubesAboveMax(gameStatus){
    const blueRegex = /(\d+ blue)/g;
    
    let matchesNumAndColor = gameStatus.match(blueRegex).join(', ');

    let numOfBlues = matchesNumAndColor.match(/\d+/g).map(el=>Number(el));
    
    return numOfBlues.some(color=>color > maxCubes.blue);


}

function greenCubesAboveMax(gameStatus){
    const greenRegex = /(\d+ green)/g;
    
    let matchesNumAndColor = gameStatus.match(greenRegex).join(', ');

    let numOfGreens = matchesNumAndColor.match(/\d+/g).map(el=>Number(el));


    return numOfGreens.some(color=>color > maxCubes.green);

}
