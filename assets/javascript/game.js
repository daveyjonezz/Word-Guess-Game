var listofWords = [
        "jingle", "nutcracker", "grinch", "bells", "rudolph"
]

var computerRandIndex = Math.floor(Math.random() * listofWords.length);
var computerPickWord = listofWords[computerRandIndex];
var numberofGuessCount = 9;
var wins = 0;
var losses = 0;
var wrongGuessLetter = "";
var rightGuessLetter = "";
var winsText = document.getElementById("wins");
var guessesRemain = document.getElementById("remaining");
var boardGame = [];
for (var i = 0; i < computerPickWord.length; i++) {
        boardGame[i] = "_";
}
var userInput = "";


function resetGame() {
        var listofWords = [
                "jingle", "nutcracker", "grinch", "bells", "rudolph"
        ]
        var computerRandIndex = Math.floor(Math.random() * listofWords.length);
        var computerPickWord = listofWords[computerRandIndex];
        var numberofGuessCount = 9;
        var wrongGuessLetter = "";
        var rightGuessLetter = "";
        
        var boardGame = [];
        for (var i = 0; i < computerPickWord.length; i++) {
                boardGame[i] = "_";
        }
        var userInput = "";     
}


// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
        
        userInput = event.key.toLowerCase();
        var displayBoardDiv = document.getElementById("output");
        displayBoardDiv.textContent = boardGame.join(" ");

        if (computerPickWord.indexOf(userInput) > -1) {
                boardGame[computerPickWord.indexOf(userInput)] = userInput;
                displayBoardDiv.textContent = boardGame.join(" ");
                rightGuessLetter = rightGuessLetter + userInput;
                if (computerPickWord === rightGuessLetter) {
                        document.getElementById("Rudolph").play();
                        wins++;
                        console.log("this worked!");
                        winsText.textContent = "Wins:" + wins;
                        resetGame();

                };

        }
        else {
                guessesRemain.textContent = "Number of Guesses Remaining: " + numberofGuessCount;
                numberofGuessCount = numberofGuessCount - 1;
                wrongGuessLetter = wrongGuessLetter + userInput + ", ";
                var outputWrongDiv = document.getElementById("wrong");
                outputWrongDiv.textContent += userInput+ ", ";
                if (numberofGuessCount === 0) {
                        losses++;
                        console.log("this didnt worked!");
                        resetGame();
                        // location.reload();
                };
        }

};