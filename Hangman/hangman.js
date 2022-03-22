//startscreen

console.log("");


//guesses
let mistakes = 10
//word array
const words = ['wizard','human', 'dog','cat','house','island','word','random'];
//random word
let selectedWord = words[Math.floor(Math.random() * words.length)];
//random word to stars
let hiddenWord = selectedWord.split("").fill("*")


// CHEAT on/off
// console.log(selectedWord)

// game loop
while(mistakes > 0){
let letter = window.prompt("Select a letter")
if(letter){
let letterIndex = selectedWord.toLowerCase().indexOf(letter.toLowerCase())
if(letter.length > 1 || /[^a-z$]+/gi.test(letter)) console.log ('the guess is invalid')
else if(letterIndex!==-1){
   hiddenWord[letterIndex] = letter 
   console.log (hiddenWord.join(""))
}
else {
    mistakes--
    console.log ("The guess is incorrect")
    console.log('you have ' + mistakes + ' guesses left');
}
if (!hiddenWord.includes("*")){
    console.log('You win');
    break;

}
}
}
if(mistakes == 0){
 console.log("you lost");
}
