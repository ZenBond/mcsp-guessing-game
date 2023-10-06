
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
var playAgainResponse = '';
//var responseTwo = true;
var guess = parseInt(prompt("Guess a number between 1 and 100."))
var solved = false
var guesses = [];

var playedBefore = false;



var previousScore = 0;

//Record number of guesses by a player


while (playAgain === true) {
    
    while(solved === false) {
        //Evaluating guess to random number
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
    
    
    if (playedBefore === false) {
        alert(`Correct ${name} your previous guesses were ${guesses}.`);
        //player has played before
        playedBefore = true;
        //record best score
        //best score will record least amount of guesses
        previousScore = guesses.length;
        continue;
    } else if (previousScore > guesses.length) {
            alert(`Thats Correct ${name}, you did better in your last game by ${previousScore - guesses.length}.`)
            previousScore = guesses.length;  
    } else if (previousScore <= guesses.length){
            alert(`You can do better`);
        }
    
    
    
     while (playAgain === true) {
        playAgainResponse = prompt(`${name}, do you want to play again`);
        if(playAgainResponse === 'Yes') {
            //reset game variables
            solved = false;
            guesses = [];
            guess = parseInt(prompt("Guess a number between 1 and 100."));
            break; 
        } else if (playAgainResponse === 'No') {
            playBefore = false;
            name = prompt('What is your name?');
            solved = false;
            guesses = [];
            previousScore = 0;
            guess = parseInt(prompt("Guess a number between 1 and 100."));
            break;
        } else {
            alert(`Did not understand`);
        }
    }

    

}



    

