// psychic game possible choices
var compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// test
// console.log(compChoice[25]);

// starting conditions
// global variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var compGuess = compChoice[Math.floor(Math.random() * 25)]

// test
console.log("computer Guess " + compGuess);

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var userGuessText = document.getElementById("userGuess-text");

function gameStart() {
    return compChoice[Math.floor(Math.random() * 25)];
}

guessesLeftText.textContent = guessesLeft;
winsText.textContent = "" + wins;
lossesText.textContent = "" + losses;

// function - set up game in the begining

document.onkeyup = function (event) {
    var userGuess = event.key;

    console.log(userGuess);

    if (userGuess === compGuess) {
        wins++;
        guessesLeft = 9;
        // need compGuess to regenerate a random letter.
    }
    else if (userGuess !== compGuess) {
        guessesLeft--;
    }
    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
        // need compGuess to regenerate a random letter.
    }

    guessesLeftText.textContent = guessesLeft;
    var para = document.createElement("p");
    para.innerHTML = userGuess;
    userGuessText.appendChild(para);
    // userGuessText.textContent = userGuess;
    winsText.textContent = "" + wins;
    lossesText.textContent = "" + losses;
};


// data to be displayed



