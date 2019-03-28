var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterUsed = [];

var winText = document.getElementById("win-text");
var lossText = document.getElementById("loss-text");
var guessLeftText = document.getElementById("guessLeft-text");
var userChoiceText = document.getElementById("userChoice-text");


document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


    if (userGuess === computerGuess) {
        wins++; 
    } else {
        guessesLeft--;
        letterUsed.push(userGuess);
        if (guessesLeft = 0) {
            losses++;
        }

    winText.textContent = wins;
    lossText.textContent = losses;
    guessLeftText = guessesLeft;
    userChoiceText = letterUsed;
    }

    







}

