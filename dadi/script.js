const btnStart = document.querySelector('#start');
const btnPlayAgain = document.querySelector('#play-again');
const playerCellA1 = document.querySelector('.player-a-1') 
const playerCellA2 = document.querySelector('.player-a-2')
const playerCellA3 = document.querySelector('.player-a-3')
const playerCellB1 = document.querySelector('.player-b-1')
const playerCellB2 = document.querySelector('.player-b-2')
const playerCellB3 = document.querySelector('.player-b-3')
const playerCellC1 = document.querySelector('.player-c-1')
const playerCellC2 = document.querySelector('.player-c-2')
const playerCellC3 = document.querySelector('.player-c-3')

const computerCellA1 = document.querySelector('.computer-a-1') 
const computerCellA2 = document.querySelector('.computer-a-2')
const computerCellA3 = document.querySelector('.computer-a-3')
const computerCellB1 = document.querySelector('.computer-b-1')
const computerCellB2 = document.querySelector('.computer-b-2')
const computerCellB3 = document.querySelector('.computer-b-3')
const computerCellC1 = document.querySelector('.computer-c-1')
const computerCellC2 = document.querySelector('.computer-c-2')
const computerCellC3 = document.querySelector('.computer-c-3')

function diceGame(){

    btnStart.classList.remove('show');
    btnPlayAgain.classList.add('show');

    let playerDie = Math.floor(Math.random() * 6 + 1);
    let computerDie = Math.floor(Math.random() * 6 + 1);
    
    // console.log(playerDie);
    // console.log(computerDie);

    switch (playerDie){
        case 1:
            playerCellB2.classList.add('black');
            break;
        case 2 :
            playerCellA3.classList.add('black');
            playerCellC1.classList.add('black');
            break;
        case 3 :
            playerCellA3.classList.add('black');
            playerCellB2.classList.add('black');
            playerCellC1.classList.add('black');
            break;
        case 4 :
            playerCellA1.classList.add('black');
            playerCellA3.classList.add('black');
            playerCellC1.classList.add('black');
            playerCellC3.classList.add('black');
            break;
        case 5 :
            playerCellA1.classList.add('black');
            playerCellA3.classList.add('black');
            playerCellB2.classList.add('black');
            playerCellC1.classList.add('black');
            playerCellC3.classList.add('black');
            break;
        case 6 :
            playerCellA1.classList.add('black');
            playerCellA3.classList.add('black');
            playerCellB1.classList.add('black');
            playerCellB3.classList.add('black');
            playerCellC1.classList.add('black');
            playerCellC3.classList.add('black');
            break;
    }

    switch (computerDie){
        case 1:
            computerCellB2.classList.add('black');
            break;
        case 2 :
            computerCellA3.classList.add('black');
            computerCellC1.classList.add('black');
            break;
        case 3 :
            computerCellA3.classList.add('black');
            computerCellB2.classList.add('black');
            computerCellC1.classList.add('black');
            break;
        case 4 :
            computerCellA1.classList.add('black');
            computerCellA3.classList.add('black');
            computerCellC1.classList.add('black');
            computerCellC3.classList.add('black');
            break;
        case 5 :
            computerCellA1.classList.add('black');
            computerCellA3.classList.add('black');
            computerCellB2.classList.add('black');
            computerCellC1.classList.add('black');
            computerCellC3.classList.add('black');
            break;
        case 6 :
            computerCellA1.classList.add('black');
            computerCellA3.classList.add('black');
            computerCellB1.classList.add('black');
            computerCellB3.classList.add('black');
            computerCellC1.classList.add('black');
            computerCellC3.classList.add('black');
            break;
    }
    
    
    if (playerDie > computerDie) {
        console.log('You win!');
    }else if (computerDie > playerDie) {
        console.log('You lose :c') ;  
    } else {
        console.log('pareggio!');
    }


}


btnStart.addEventListener('click', diceGame);

// let reset = document.querySelectorAll('.black');
// console.log(reset)

btnPlayAgain.addEventListener('click', function(){
    
    playerCellA1.classList.remove('black');
    playerCellA2.classList.remove('black');
    playerCellA3.classList.remove('black');
    playerCellB1.classList.remove('black');
    playerCellB2.classList.remove('black');
    playerCellB3.classList.remove('black');
    playerCellC1.classList.remove('black');
    playerCellC2.classList.remove('black');
    playerCellC3.classList.remove('black');
    computerCellA1.classList.remove('black');
    computerCellA2.classList.remove('black');
    computerCellA3.classList.remove('black');
    computerCellB1.classList.remove('black');
    computerCellB2.classList.remove('black');
    computerCellB3.classList.remove('black');
    computerCellC1.classList.remove('black');
    computerCellC2.classList.remove('black');
    computerCellC3.classList.remove('black');

    diceGame();
    
});