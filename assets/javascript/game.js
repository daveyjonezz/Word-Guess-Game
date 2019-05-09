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

var boardGame = [];
for (var i = 0; i < computerPickWord; i++) {
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
        var wins = 0;
        var losses = 0;
        var wrongGuessLetter = "";
        var rightGuessLetter = "";
        
        var boardGame = [];
        for (var i = 0; i < computerPickWord; i++) {
                boardGame[i] = "_";
        }
        var userInput = "";     
}


// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
        userInput = event.key.toLowerCase();
        var displayBoardDiv = document.getElementbyID("output");
        displayBoardDiv.textContent = boardGame.join(" ");

        if (computerPickWord.indexOf(userInput) > -1) {
                boardGame[computerPickWord.indexOf(userInput)] = userInput;
                displayBoardDiv.textContent = boardGame.join(" ");
                rightGuessLetter = rightGuessLetter + userInput;
                // why do i get this error?
                if (computerPickWord === rightGuessLetter && rightGuessLetter ==== "rudolph") {
                        document.getElementById("Rudolph").play();
                        wins++;
                        resetGame();

                }

        }
        else {
                numberofGuessCount = numberofGuessCount - 1;
                wrongGuessLetter = wrongGuessLetter + userInput + ", ";
                var outputWrongDiv = document.getElementbyID("wrongGuess");
                outputWrongDiv.textContext = wrongGuessLetter;
                if (numberofGuessCount === 0) {
                        loss++;
                        resetGame();
                }
        }

}