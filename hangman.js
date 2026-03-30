const POSSIBLE_WORDS = ["obdurate", "defenestrate",
     "nocturnal", "verminous", "valor", "dahlia", "frog",
      "toad", "albert", "gerbert", "salayka", "kitty"];

let newGame = function(){
    //Pick a random word
    let randomIndex = parseInt(Math.random()*POSSIBLE_WORDS.length);
    let word = POSSIBLE_WORDS[randomIndex]; 
    console.log("Word Chosen: ", word);

    //show the dashes
    let clueString = "";
    for (let i = 0; i< word.length; i++)
    {
        clueString += "_ ";
    }

    let clue = document.getElementById("clue");
    clue.textContent = clueString;
}

