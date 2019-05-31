// Array listing all the options for the computer to choose
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables to hold the number of wins, losses, guesses left and guesses.  
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesMade = [];
var computerGuess = '';


//Computer randomly chooses a choice from the options array.  This is the computer's selection 
function computerSelectRandomLetter() {
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)]
;
}

//Update the scores on the page
function updateScores() {
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").innerHTML = losses;
    document.querySelector("#guessesLeft").innerHTML = guessesLeft;
    document.querySelector("#guessesMade").innerHTML = guessesMade;
}

function resetScore() {
    guessesLeft = 9;
    guessesMade = [];
}

//The computer selects a random letter
computerSelectRandomLetter();
console.log(computerGuess);

//This function runs whenever a user presses a key
document.onkeyup = function(event) {
guessesLeft--;
var userGuesses = event.key.toLowerCase();
guessesMade.push(userGuesses);
updateScores();

if ((userGuesses === computerGuess) || (userGuesses === alphabet)){
    wins++;
    updateScores();
    resetScore();
    computerSelectRandomLetter();
    console.log(computerGuess);
}
if (guessesLeft === 0){
    losses++;
    updateScores();
    resetScore();
    computerSelectRandomLetter();
    console.log(computerGuess);
}

}








//Variable hold references to the places in the HTML where things display
// var winsText = document.getElementById("wins");
// var lossesText = document.getElementById("losses");
// var guessesLeftText = document.getElementById("guessesLeft");
// var userGuessesText = document.getElementById("guessesMade");

// //This function is run whenever a user presses a key
// document.onkeyup = function(event) {

// //Determines which key was pressed
// var userGuesses = event.key;
// console.log(userGuesses);


// //To display the users guesses so far
// // for (var i = 1; i < 10; i++) {
// //     userGuesses = (i);
// //     guessesMade.push(userGuesses);

// //     console.log()
// // }

// //This logic determines the outcome of the game (wins/losses)
// if ((userGuesses === computerGuesses)){
//     wins++;
// } else {
//     guessesLeft--;
//     //losses need to increase when guesses reach 0
//     if ((guessesLeft === 0)){
//       //losses goes up by 1
//         losses++;
//     }
// }

// winsText.textContent = "Wins: " + wins;
// lossesText.textContent = "Losses: " + losses;
// guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
// userGuessesText.textContent = "Your Guesses So Far: " + guessesMade;

// }