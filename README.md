# Psychic-Game

3/30/19: started HW - Pyschic Game, if comfortable with result, will do the Word Guess game.

Psychic Game - Psuedo Code:

Problem: 
    user must guess the letter determined by the computer;
Rules/Parameters:
    User gets 10 guesses to start;
    user input letter of the alphabet;
    if user inputs a letter and it does not match the computer guess
    then user guess count decreases by (1);
    if user guesses gets to 0, losses increases by (1);
    if user inputs a letter, and it matches the computer guess
    then the user gets a win;


computer input, random letter of the alphabet utilize Math.floor(Math.random());
var choice = "abcdefghijklmnopqrstuvwxyz"
var computerGuess = Math.floor(Math.random)
for loop to run random computer guesses

<!-- for (var i =0; i < )
 -->



if user inputs a letter and it does not match the computer guess
    then the user gets a loss

<!-- if var userGuess === computerGuess {
    wins-text +1
} else {
    losses-text +1
} -->

user wins/loses displayed on screen;

when user wins, 1 pt added to "Wins:";
    number of guesses remaining count resets to 10;

when total number of guesses gets down to 0, computer wins, 1 pt is added to "Losses:", number of guesses remaining resets;




