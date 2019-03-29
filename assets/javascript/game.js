var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 9;
var letters = [];

var winText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");
var lettersText = document.getElementById("letters-text")



function newLetter () {
    var x = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(x);
    return x;
}

var computerGuess = newLetter();

document.onkeyup = function(event) {
    var userGuess = event.key;


    if (userGuess === computerGuess) {
        wins++;
        guesses = 9;
        letters = [];
        computerGuess = newLetter();

    } else {
        guesses--;
        letters.push(userGuess);
        if (guesses === 0) {
            losses++;
            guesses = 9;
            letters = [];
        }
        
    }

    winText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesText.textContent = "Guesses left: " + guesses;
    lettersText.textContent = "Letters used: " + letters;
    
}
