let randomNumber = parseInt((Math.random()) * 100 + 1);  // For generating random Number (* means 1 to 100 range)

const submit = document.querySelector('.btn');
const userInput = document.querySelector('#guessfield');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.result');

const p = document.createElement('p');

let prevguess = [];
let numguess = 1;

let playgame = true;

if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()  // This is a form , value goes to server --> To prevent this 
        const guess = parseInt(userInput.value)  // You hold a guess 
        validateguess(guess)   // send it for checking 
    })
}
function validateguess(guess) { // check is the user entered a valid guess or not  (like a  , 101(out of range) etc..)
    if (isNaN(guess)) {
        alert('Please enter a valid Number');
    }
    else if (guess < 1) {
        alert('Please enter a Number greater than 1');
    }
    else if (guess > 100) {
        alert('Please enter a Number lesser than 100');
    }
    else {
        prevguess.push(guess);
        displayguess(guess)
        if (numguess === 11) {
            displaymessage(`Game Over. Random Number was ${randomNumber}`);
            endgame();
        }
        else {
            checkguess(guess)
        }
    }
}
function checkguess(guess) { // after validation , it print a msg whether the guess equal ,low or high than the random no 
    if(guess === randomNumber){
        displaymessage(`You guessed it right`);
        endgame();
    }
    else if(guess < randomNumber){
        displaymessage(`Guess is low`);
    }
    else if(guess > randomNumber){
        displaymessage(`Guess is high`);
    }
}
function displayguess(guess) {// 
    userInput.value = '';
    guessSlot.innerHTML += `${guess} , `;   
    numguess++;
    remaining.innerHTML = `${ 11 -  numguess}`;
}
function displaymessage(message) { // all manipulation related to dom 
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endgame() {
    userInput.value = '';
    userInput.setAttribute('disabled' , '');
    p.classList.add('button');
    p.innerHTML = `<button id="newGame">Start Over</button>`;
    startOver.append(p);;
    playgame = false;
    newgame();
}
function newgame() {
    const newgamebutton = document.querySelector('#newGame');
    newgamebutton.addEventListener('click' , function(e){
        randomNumber = parseInt((Math.random()) * 100 + 1);
        prevguess = [];
        numguess = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${ 11 -  numguess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playgame = true
    })
}