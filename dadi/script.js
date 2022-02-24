const btnStart = document.querySelector('#start')
const btnPlayAgain = document.querySelector('#play-again')

function diceGame(){

    btnStart.classList.remove('show');
    btnPlayAgain.classList.add('show');

    let playerDie = Math.floor(Math.random() * 6 + 1);
    let computerDie = Math.floor(Math.random() * 6 + 1);
    
    // console.log(playerDie);
    // console.log(computerDie);
    
    if (playerDie > computerDie) {
        console.log('You win!');
    }else if (computerDie > playerDie) {
        console.log('You lose :c') ;  
    } else {
        console.log('pareggio!');
    }


}


btnStart.addEventListener('click', diceGame);

btnPlayAgain.addEventListener('click', diceGame);