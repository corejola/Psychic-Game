// psychic game possible choices
var compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// test
// console.log(compChoice[25]);

// starting conditions

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var compGuess = compChoice[Math.floor(Math.random() * 25)];
// test
console.log(compGuess);




// function - set up game in the begining

document.onkeyup = function (event) {
    var userGuess = event.key;
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeftText = document.getElementById("guessesLeft-text");
    var userGuessText = document.getElementById("userGuess-text");

    console.log(userGuess);
    for (var i = 0; i < 1; i++) {
        if (userGuess === compGuess) {
            wins++;
        }
        else if (userGuess !== compGuess) {
            guessesLeft--;
        }
        if (guessesLeft === 0) {
            losses++;
        }

    }

    guessesLeftText.textContent = guessesLeft;
    userGuessText.textContent = "" + userGuess;
    winsText.textContent = "" + wins;
    lossesText.textContent = "" + losses;
}



// for loop to run for the 10 guesses


// data to be displayed



