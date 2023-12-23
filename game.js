//Defining all the buttons and variables

let playerScore = 0;
let compScore = 0;

const prompt = document.querySelector('#text');

const display = document.querySelector('#result');
const scores = document.querySelector('#currentScore');

display.style.cssText = "border: 2px solid black";
scores.style.cssText = "border: 2px dotted orange";

const yesBtn = document.querySelector('#yes');
const noBtn = document.querySelector('#no');


const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorBtn = document.createElement('button');

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorBtn.textContent = "Scissors";

rockBtn.addEventListener('click', () => {
    playRound(getComputerChoice(), 'rock');

})

paperBtn.addEventListener('click', () => {
    playRound(getComputerChoice(), 'paper');

})

scissorBtn.addEventListener('click', () => {
    playRound(getComputerChoice(), 'scissors');
})


yesBtn.addEventListener('click', () => {
    startGame();
    
})

noBtn.addEventListener('click', () => {
    console.log("no problems!, see you next time");
})



function playRound(comp, player){
    console.log('round started')
    let result = decision(comp, player);

    if(result === 1){
        playerScore ++;
    }else if(result === -1){
        compScore ++;
    }else{
        
    }

    updateScoreDisplay();

    if(compScore >= 5 || playerScore >= 5){
        gameOver();
    }
    
}

function gameOver(){

    prompt.textContent = "The game has ended."
    if(compScore > playerScore){
        display.textContent = "Computer Wins!";

    }

    else{
        display.textContent = "You win!";
    }

    rockBtn.parentNode.removeChild(rockBtn);
    paperBtn.parentNode.removeChild(paperBtn);
    scissorBtn.parentNode.removeChild(scissorBtn);
}



function updateScoreDisplay(){
    scores.textContent = `Player: ${playerScore}
                          Computer: ${compScore}`;
}

















function startGame(){

    prompt.textContent = "The game has started!"

    yesBtn.parentNode.removeChild(yesBtn);
    noBtn.parentNode.removeChild(noBtn);
    document.body.appendChild(rockBtn);
    document.body.appendChild(paperBtn);
    document.body.appendChild(scissorBtn);
}
function getComputerChoice(){
    let probability = (Math.random()*100);

    if(probability <= 33){
        return "rock";
    }

    else if(probability <= 66){
        return "paper";
    }

    else{
        return "scissors";
    }
}
function decision(compChoice, playerChoice){
    switch (compChoice){
        case 'rock':
            switch(playerChoice){
                case 'rock':
                    return 0;
                    break;
                case 'paper':
                    return 1;
                    break;
                case 'scissors':
                    return -1;
                    break;
            }
        break;

        case 'paper':
            switch(playerChoice){
                case 'rock':
                    return -1;
                    break;
                case 'paper':
                    return 0;
                    break;
                case 'scissors':
                    return 1;
                    break;
            }
        break;

        case 'scissors':
            switch(playerChoice){
                case 'rock':
                    return 1;
                    break;
                case 'paper':
                    return -1;
                    break;
                case 'scissors':
                    return 0;
                    break;
            }
        break;
    }
}


// /**
//  * full five round implementation of rock paper scissors
//  */
// function game(){

//     let compScore = 0;
//     let playerScore = 0;
//     for(let round = 1; round <= 5; round++){
//         let pChoice = prompt("Rock? Paper? Scissors?")
//         let cChoice = getComputerChoice();
//         let result = playRound(pChoice, cChoice);

//         switch (result){
//             case "p-win":
//                 playerScore++;
//                 break;
//             case "c-win":
//                 compScore++;
//                 break;
//             case "draw":
//                 break;
//             case "invalid":
//                 alert("input was invalid score will not be counted")
//                 break;

//         }
//     }

//     if(playerScore > compScore){
//         alert(`you win! ${playerScore}/5`);
//     } else if(playerScore === compScore){
//         alert("a draw!");
//     } else{
//         alert(`computer wins! ${compScore}/5`);
//     }


// }

//Test

// const playerSelection = prompt("What is your choice?");
// const computerSelection = getComputerChoice();

// alert(playRound(playerSelection, computerSelection));

