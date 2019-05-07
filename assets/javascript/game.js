var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
var words = [
    'all i want for christmas is you', 'jingle bell rock', 
    'a holly jolly christmas', 'the christmas song', 'rudolph', 
    'let it snow', 'feliz navidad', 'jingle bells', 'baby its cold outside'
]

var guessMe = words[Math.floor(Math.random() * words.length)];

var answerArray =[];
for (var i = 0; i < guessMe; i++) {
 answerArray[i]="_";
}

var remainingLetters = guessMe.length;
