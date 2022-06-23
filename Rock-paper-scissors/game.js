const computerChoice = document.getElementById('computerChoice');
const playerChoice = document.getElementById('playerChoice');
const outcome = document.getElementById('outcome');
const gameChoice = document.querySelectorAll('.gameChoice');
const playerResult = document.getElementById('playerScore')
const computerResult = document.getElementById('computerScore')
const winner = document.getElementById('winner')
const tryAgain = document.getElementById('try-again')
const rock = document.getElementById('Rock')
const paper = document.getElementById('Paper')
const scissors = document.getElementById('Scissors')

let userChoice
let computerOption
let result
let computerScore = 0
let playerScore = 0
let time = 2000


tryAgain.style.display = "none"

    gameChoice.forEach(gameChoice => gameChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    playerChoice.innerHTML = userChoice
    generateComputerChoice()
}))



function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * gameChoice.length) + 1;
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerOption = "Rock"
    }
    if (randomNumber === 2) {
        computerOption = "Paper"
    }
    if (randomNumber === 3) {
        computerOption = "Scissors"
    }
setTimeout(computerChoice.innerHTML = computerOption, time)
    
    getScore()

}

function getScore() {
    if (computerOption === userChoice) {
        computerScore += 0
    }
    if (computerOption === "Rock" && userChoice === "Scissors") {
        computerScore += 1
        raceToTen()
    }
    if (computerOption === "Rock" && userChoice === "Paper") {
        playerScore += 1
        raceToTen()
    }
    if (computerOption === "Paper" && userChoice === "Rock") {
        computerScore += 1
        raceToTen()
    }
    if (computerOption === "Paper" && userChoice === "Scissors") {
        playerScore += 1
        raceToTen()
    }
    if (computerOption === "Scissors" && userChoice === "Rock") {
        playerScore += 1
        raceToTen()
    }
    if (computerOption === "Scissors" && userChoice === "Paper") {
        computerScore += 1
        raceToTen()
    }

    computerResult.innerHTML = computerScore
    playerResult.innerHTML = playerScore

}

function raceToTen() {
    if (computerScore === 10) {
        winner.innerHTML = "Computer Win!"
        tryAgain.style.display = null
        rock.style.display = "none"
        paper.style.display = "none"
        scissors.style.display = "none"


    }
    if (playerScore === 10) {
        winner.innerHTML = "You Win!"
        tryAgain.style.display = null
        rock.style.display = "none"
        paper.style.display = "none"
        scissors.style.display = "none"

    }
}

function reset() {
    winner.innerHTML = "Goodluck"
    computerScore = 0
    playerScore = 0
    computerResult.innerHTML = 0
    playerResult.innerHTML = 0
    rock.style.display = 
    paper.style.display = null
    scissors.style.display = null
    tryAgain.style.display = "none"


}

