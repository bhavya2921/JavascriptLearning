const fullName = prompt("Please enter your name:");
let guessLimit = getInputFromPrompt("Please enter the guess limit");
while(inputNotValid(guessLimit)){
    guessLimit = getInputFromPrompt("Please enter the integral value");
}
let numberGuess = getInputFromPrompt("Please enter the number you guess");

let randomNumber = Math.random();
randomNumber = Math.floor(randomNumber*guessLimit)+1;
console.log(randomNumber);

while(numberGuess!==randomNumber){
    numberGuess = getInputFromPrompt("Please enter the number you guess");
}

function inputNotValid(value) {
    return !Number.isInteger(value) || value.trim()==null;
  }

function getInputFromPrompt(displyText){
    return parseInt(prompt(displyText));
}