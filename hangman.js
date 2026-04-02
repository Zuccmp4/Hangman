const POSSIBLE_WORDS = ["obdurate", "defenestrate",
     "nocturnal", "verminous", "valor", "dahlia", "frog",
      "toad", "albert", "gerbert", "salayka", "kitty", 
      "meshuggah", "metal", "thrash", "death", "frederick", 
      "emily", "coding", "programming", "coffee", "wintersun",
      "tulip", "front", "back", "left", "right", "guitar",
      "drums", "bass", "laptop", "computer"];

var word = "";
var guesses = "";
var guessCount;
const MAX_GUESSES = 6;



let newGame = function(){
    enableButton();

    //Pick a random word
    guessCount = MAX_GUESSES;
    let randomIndex = parseInt(Math.random()*POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    guesses = "";

    //shows the dashes/ updates the page
    updatePage();
}

let updatePage = function(){
    let clueString = "";
    for (let i = 0; i< word.length; i++)
    {
        var currentLetter = word.charAt(i);
        if(guesses.indexOf(currentLetter)>=0){
            clueString+=currentLetter+" ";
        }
        else {
            clueString += "_ ";
        }

    }
    let clue = document.getElementById("clue");
    clue.textContent = clueString;

    let guessArea = document.getElementById("guesses");
    guessArea.textContent = "Guesses: "+ guesses + " ";

    let image = document.getElementById("hangmanpic");
    image.src = `images/hangman${guessCount}.gif`;

    if (clueString.indexOf('_') === -1)
        {
            alert("You Won!!!");
            alert("Please hit New Game to play again!");
            disableButton();
            
            
        } else if (guessCount <= 0) {
            alert("You Lose, Try Again!");
            disableButton();

        }

}

let guessLetter = function(){
    
    let input = document.getElementById("guess");
    let letter = input.value;
    letter = letter.toLowerCase();
    if (word.indexOf(letter) < 0){
        guessCount--;
    }

    guesses+=letter;
    input.value = "";
    updatePage();
}

let enableButton = function(){

    document.getElementById("guessButton").disabled = false;

}

let disableButton = function(){

    document.getElementById("guessButton").disabled = true;

}