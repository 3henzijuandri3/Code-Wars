/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/


// Imperative Approach
const rps = (p1, p2) => {
    let msg = '';
    if (p1 === 'rock' && p2 === 'scissors') {
        msg = 'Player 1 won!';
    } else if (p1 === 'scissors' && p2 === 'paper') {
        msg = 'Player 1 won!';
    } else if (p1 === 'paper' && p2 === 'rock') {
        msg = 'Player 1 won!';
    } else if (p1 === p2) {
        msg = 'Draw!';
    } else {
        msg = 'Player 2 won!';
    }
    return msg;
};

// Declarative Approach
const rps2 = (p1, p2) => {
    const rules = {
        rock: 'scissors',
        scissors: 'paper',
        paper: 'rock'
    };
    return p1 === p2 ? 'Draw!' : (`Player ${rules[p1] === p2 ? '1' : '2'} won!`);
};

console.log(rps('rock', 'scissors')); 
console.log(rps2('rock', 'scissors')); 