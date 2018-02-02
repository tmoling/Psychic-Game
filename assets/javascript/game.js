
//Allow any random letter of the alphabet to be the answer.
//Generate a random letter.
var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//The player starts with 0 wins and losses.
var wins = 0;
var losses = 0;
//Give the player 10 chances to guess what the letter is.
var userChances = 10;

//computer checks to see if the letter is correct.
//note the new var declaration.
var computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];

//list of functions
//updateWins was created for this function
//winnum is a value I came up with that is the PARAMETER of the function
//regarding get element by ID, refer to the id tag in html...they are the same!
//wins is the ID
//inner text is a property...don't totally understand it
function updateWins(winnum) {
  document.getElementById("wins").innerText = winnum;
}

function updateLosses(lossnum) {
  document.getElementById("losses").innerText = lossnum;
}

function guessesTaken(howmany) {
  document.getElementById("guessesLeft").innerText = howmany;
}

function numberOfGuesses(guessnum) {
  document.getElementById("guessSoFar").innerText += guessnum;
}

function numberOfGuessesClear(guessnum) {
  document.getElementById("guessSoFar").innerText = " ";
}

//this is where the updateWins/updateLosses functions are called
//refer to line var wins...the variable is declared in the parenthesis
updateWins(wins)
updateLosses(losses)


//the touch of a letter controls winning and losing.
document.onkeyup = function (event) {
  var userGuess = event.key;
  //this -- means subtracting by one...number of turns to play goes down
  userChances--;
  if (userChances <= 0) {
    console.log("Sorry, you lose! Try again.");
    alert("Sorry, you lose! Try again.");
    //guessnum is the parameter of a function above
    guessnum = 0;
    numberOfGuessesClear(guessnum);
    userChances = 10;
    //this resets guesses left back to 10
    guessesTaken(userChances);
    losses++;
    updateLosses(losses);
  }
  else {
    if (userGuess === computerGuess) {
      //this guess is correct, wins increase by one
      wins++;
      //if the letter is correct, give the player a point in the win column and reset the game.
      console.log("Hooray! You WIN!! You're an alphabet psychic!!!");
      alert("Hooray! You WIN!! You're an alphabet psychic!!!");
      numberOfGuessesClear(guessnum);
      userChances = 10;
      updateWins(wins);
    }

    if (userGuess !== computerGuess) {
      if (userChances === 0) {

        computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];
        console.log("computerGuess=" + computerGuess);

      }

      //these were declared in the one key up function
      guessesTaken(userChances)
      numberOfGuesses(userGuess)

    }
  }
}



      //this guess is NOT correct
      //If the letter is wrong, allow the player to guess again.
      //If the player doesn't guess the correct letter within 10 attempts, add one point to the loss column and reset the game.
    //make the number of guesses go down by one with each turn
    //record wins and losses by one each time
    //reset game after a win or loss


