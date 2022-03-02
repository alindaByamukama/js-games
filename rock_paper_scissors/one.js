
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice
let computerChoice

// display user choice and results when clicked
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

// generate a random number, select computer choice based on number, display computer choice
function  generateComputerChoice() {

    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1    //

    if(randomNumber === 1) {
        computerChoice = "rock"
    }
    
    if(randomNumber === 2) {
        computerChoice = "paper"        
    }
    
    if(randomNumber === 3) {
        computerChoice = "scissors"    
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

// choose and display result based on comparison between user and computer choice
function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw..."
    }
    if(computerChoice === 'rock' && userChoice === 'paper') {
        result = "You WIN!"
    }
    if(computerChoice === 'scissors' && userChoice === 'rock') {
        result = "You WIN!"
    }
    if(computerChoice === 'paper' && userChoice === 'scissors') {
        result = "You WIN!"
    }
    if(computerChoice === 'rock' && userChoice === 'scissors') {
        result = "you lose..."
    }
    if(computerChoice === 'paper' && userChoice === 'rock') {
        result = "you lose..."
    }
    if(computerChoice === 'scissors' && userChoice === 'paper') {
        result = "you lose..."
    }
    resultDisplay.innerHTML = result
}