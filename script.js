// psuedocode

const choice1 = userPlay();  //Works like a charm
const choice2 = computerPlay(); // Gives me the same value every time so far
const roundEnd = singleRound(); //Doesn't work so far

// This function works when called to a global variable(remember this)

function computerPlay() {
    hands = ['rock', 'scissors', 'paper'];
    let computerPick = hands[Math.floor(Math.random() * hands.length)];
    return computerPick;
}   

// Function for user choice, works no problem.

function userPlay() {
    let userPick = prompt('Wow, you look like hammered shit! Rock, Paper, or Scissors?');
    return userPick;
}

// Make the input case-insensitive (.toLowerCase();), still gotta figure this out


// Function that decides the winner of a single round with alerts
function singleRound (choice1, choice2) {   
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        } else {
            if (choice2 === "scissors") {
                return "scissors wins";
            }
        }
        if (choice1 === "scissors") {
            if (choice2 === "rock") {
                return "rock wins";
            } esle {
                if (choice2 === "paper") {
                    return "scissors wins";
                }
            }
        }
    }
}

// Make game() function that will loop through five rounds. 

function game() {
    for (let i = 0; i <= 5; i++) {
        singleRound( choice1, choice2 );
    }
}





// Single Round logic
/*      if (choice1 === "paper") {
            if (choice2 === "rock") {
                return "paper wins";
            } else {
                if (choice2 === "scissors") {
                    return "scissors wins";
                }
            }
            if (choice1 === "scissors") {
                if (choice2 === "rock") {
                    return "rock wins";
                } esle {
                    if (choice2 === "paper") {
                        return "scisoors wins";
                    }
                }
            }
        }*/