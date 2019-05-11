var listofSongs = [
        "jingle", "nutcracker", "grinch", "bells", "rudolph"
];

var computerRandIndex = Math.floor(Math.random() * listofSongs.length);
var computerPickWord = listofSongs[computerRandIndex];
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
var guessedLetters = [];
var guessingWord = [];

var songstoPlay = [
        document.getElementById("Jingle"), document.getElementById("Nutcracker"), document.getElementById("Grinch"),
        document.getElementById("Bells"), document.getElementById("Rudoplh"),
];
var victorySong = songstoPlay[computerRandIndex];

function resetGame() {
        // victorySong.pause();
        listofSongs = [
                "jingle", "nutcracker", "grinch", "bells", "rudolph"
        ];
        computerRandIndex = Math.floor(Math.random() * listofSongs.length);
        computerPickWord = listofSongs[computerRandIndex];
        numberofGuessCount = 9;
        wrongGuessLetter = "";
        rightGuessLetter = "";
        boardGame = [];
        for (var i = 0; i < computerPickWord.length; i++) {
                boardGame[i] = "_";
        }
        userInput = "";
        var songstoPlay = [
                document.getElementById("Jingle"), document.getElementById("Nutcracker"), document.getElementById("Grinch"),
                document.getElementById("Bells"), document.getElementById("Rudoplh"),
        ];
        victorySong = songstoPlay[computerRandIndex];
};


// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

        userInput = event.key.toLowerCase();


        var displayBoardDiv = document.getElementById("output");
        displayBoardDiv.innerText = boardGame.join(" ");
        // document.getElementById("Rudoplh").pause();
        // document.getElementById("Bells").pause();
        // document.getElementById("Nutcracker").pause();
        // document.getElementById("Grinch").pause();
        // document.getElementById("Jingle").pause();
        if (computerPickWord.indexOf(userInput) > -1) {
                boardGame[computerPickWord.indexOf(userInput)] = userInput;
                displayBoardDiv.innerText = boardGame.join(" ");
                for (var j = 0; j < computerPickWord.length; j++) {
                        if (computerPickWord[j] === userInput) {
                                boardGame[j] = userInput;
                        }
                }
                rightGuessLetter = rightGuessLetter + userInput;
                if (boardGame.indexOf("_") === -1) {
                        victorySong.play();
                        wins++;
                        winsText.innerText = "Wins:" + wins;
                        resetGame();
                        document.getElementById("wrong").innerText = "";

                }

        }
        else {
                guessesRemain.innerText = "Number of Guesses Remaining: " + numberofGuessCount;
                numberofGuessCount = numberofGuessCount - 1;
                wrongGuessLetter = wrongGuessLetter + userInput + ", ";
                var outputWrongDiv = document.getElementById("wrong");
                outputWrongDiv.innerText += userInput + ", ";
                if (numberofGuessCount === 0) {
                        losses++;
                        outputWrongDiv.innerText = "";
                        resetGame();
                };
        };

};