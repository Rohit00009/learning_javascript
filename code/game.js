//generate the random numer
//give the userr the ability to guess
//if they guess and they are wrong, ask them again (hint);
//if they win - say that they won

function guessGame() {
  //   let randomNr = Math.random() * 10; //we multiply it by 10 cuz math.random methd give sus no. between 0 to 1
  //   let fixedNr = Math.floor(randomNr); //we use math.floor to remove numbers after decima
  // or we can also write above cod a
  let randomNr = Math.floor(Math.random() * 11); //we generate random number
  let guess;

  do {
    guess = prompt("Guess a number between 1-10"); //input
    console.log(guess, randomNr);
    if (randomNr > guess) {
      console.log("you guessed too low");
    } else if (randomNr < guess) {
      console.log("You gessed too high");
    }
  } while (guess != randomNr);
  console.log("YOU WON"); //and when loop ends means guess == randomNr then this condition will apply
}

guessGame(); //to run function
