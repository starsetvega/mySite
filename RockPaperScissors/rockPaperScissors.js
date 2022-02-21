var gameObjects = document.getElementsByClassName('game-image')
var gameButtons = document.getElementsByClassName('game-button')
var starterImage = document.getElementById('game-start-placeholder')
var winnerDisplay = document.getElementById('result')
var gameStarted = false
var playerChoice = ''
var computerChoice = ''
var winner = ''

InitializeGame()

function InitializeGame(){
    HideGameImages()
    starterImage.classList.remove('hidden')
    AddButtonEvents()
}

function HideGameImages(){
    for (var i = 0; i < gameObjects.length; i++){
        hideItem(gameObjects[i])
    }
    if (gameStarted){
        starterImage.classList.add('hidden')
    }
}

function PlayGame(){
    gameStarted = true
    HideGameImages()
    let randomMax = gameObjects.length
    let randomNum = Math.floor(Math.random() * randomMax)
    showItem(gameObjects[randomNum])
    SetComputerChoice(randomNum)
    GetWinner()
    LogChoices()
}

function SetComputerChoice(choiceIndex){
    switch (choiceIndex) {
        case 0:
            computerChoice = 'Rock'
            break
        case 1:
            computerChoice = 'Paper'
            break
        case 2:
            computerChoice = 'Scissors'
            break
        default:
            computerChoice = 'No choice within range'
    }

}

function GetWinner(){
    if (computerChoice == playerChoice){
        winner = "It's a tie!"
    }else if (computerChoice == 'Rock' && playerChoice == 'Paper'){
        winner = 'Player!'
    }else if (computerChoice == 'Rock' && playerChoice == 'Scissors'){
        winner = 'Computer!'
    }else if (computerChoice == 'Paper' && playerChoice == 'Rock'){
        winner = 'Computer!'
    }else if (computerChoice == 'Paper' && playerChoice == 'Scissors'){
        winner = 'Player!'
    }else if (computerChoice == 'Scissors' && playerChoice == 'Paper'){
        winner = 'Computer!'
    }else if (computerChoice == 'Scissors' && playerChoice == 'Rock'){
        winner = 'Player!'
    }
    winnerDisplay.innerText = 'The winner is: ' + winner
}

function AddButtonEvents(){
    for (var i = 0; i < gameButtons.length; i++){
        gameButtons[i].addEventListener('click', () =>{
            PlayGame()
        })
    }
}

function PlayerChoseRock(){
    playerChoice = 'Rock'
}

function PlayerChosePaper(){
    playerChoice = 'Paper'
}

function PlayerChoseScissors(){
    playerChoice = 'Scissors'
}

function hideItem(item){
    item.classList.add("hidden")
}

function showItem(item){
    item.classList.remove("hidden")
}

function LogChoices(){
    console.log('Computer choice: ' + computerChoice)
    console.log('Player choice: ' + playerChoice)
    console.log('Winner is: ' + winner)
}