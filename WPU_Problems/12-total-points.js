/*
Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4

*/

// Imperative Approach
function points(games) {
    let finalPoints = 0;
    for(let match of games){
        match[0] === match[2] 
            ? finalPoints += 1
            : (parseInt(match[0]) > parseInt(match[2])
                ? finalPoints+=3 : finalPoints+=0);
    }
    return finalPoints;
}

// Declarative Approach
const points2 = (games) => {
    return(
        games.reduce((total, match) => {
           return match[0] === match[2] 
                ? total += 1 
                : (parseInt(match[0]) > parseInt(match[2])
                ? total+=3 : total+=0);
        }, 0)
    );
};


console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))
console.log(points2(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))