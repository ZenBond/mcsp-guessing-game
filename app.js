
/*
    let randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);
    let solved = false;
    let guesses = [];
    
    
    while(solved === false) {
        let userGuess = prompt('What is your guess');
        let guess = Number(userGuess);

        if (guess === randomNumber) {
            guesses.push(guess)
            alert(`Correct it only took you ${guesses.length} guesses.`)
            solved = true;
        } else if (guess < randomNumber) {
            alert('That is incorrect, guess HIGHER')
            guesses.push(guess)
        } else {
            alert('That is incorrect, guess LOWER')
            guesses.push(guess)
        }
    }
    */

    
//var number = Math.floor(Math.random() * 100)
var number = 10
var name = prompt('What is your name?');
var playAgain = true;
var response = '';
var responseTwo = true;
var guess = parseInt(prompt("Guess a number between 1 and 100."))
var solved = false
var guesses = [];

while (playAgain === true) {

    while(solved === false) {
        if(number === guess) {
            guesses.push(guess);
            alert(`Good job ${name} it took you ${guesses.length} guesses.`);
            solved = true;
        } else if(number < guess) {
            guesses.push(guess);
            guess = parseInt(prompt(`Sorry ${name}, Lower`));
        } else {
            guesses.push(guess);
            guess = parseInt(prompt(`Sorry ${name}, Higher`));
        }
    }
    
    alert(`Correct ${name} your previous guesses were ${guesses}`);
    
    
     while (playAgain === true) {
        response = prompt(`${name}, do you want to play again`);
        if(response == 'Yes') {
            solved = false;
            guesses = [];
            guess = parseInt(prompt("Guess a number between 1 and 100."));
            break; 
        } else if (response == 'No') {
            playAgain = false
            break;
        } else {
            alert(`Did not understand`);
        }
    }

}



    

