let generateStates = (size) => {
    // console.log(size);
    let states = [];
    for (let row = 0; row < size; row++) {
        states[row] = [];
        for (let column = 0; column < size; column++) {
            states[row].push(Math.floor((Math.random() * 2)));
        }
    }
    return states;
}

let loop = () => {
    let states = generateStates(8);
    setInterval(function(){
      console.log(findNextGeneration(states));
    }, 500);
}


loop();
let findNextGeneration = (states) => {
    let newStates = states;
    states.forEach((row, index1) => {
        row.forEach((cell, index2) => {
            let neighbours = noOfNeighbours(index1, index2, states);
            if (nextState(states[index1][index2], neighbours)) {
                newStates[index1][index2] = 1;
            } else {
                newStates[index1][index2] = 0;
            }
        });
    });
    return newStates;
}
let nextState = (currentState, noOfNeighbours) => {
    if (currentState) {
        return (noOfNeighbours < 2 || noOfNeighbours > 3) ? false : true;
    } else {
        return (noOfNeighbours != 3) ? false : true;
    }
}
let noOfNeighbours = (row, col, states) => {
    let neigh = 0;
    if (row >= states.length || col >= states.length || row < 0 || col < 0)
        return Number(0);
    else {
        for (let i = row - 1; i <= row + 1; i++) {
            for (let j = col - 1; j <= col + 1; j++) {
                if (i >= 0 && j >= 0 && i < states.length && j < states.length && states[i][j])
                    neigh++;
            }
        }
    }
    if (states[row][col])
        neigh -= 1;
    return neigh;
}
module.exports = {
    nextState: nextState,
    noOfNeighbours: noOfNeighbours
}