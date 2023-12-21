
/**
 * @returns computer choice
 */
function getComputerChoice(){
    let probability = (Math.random()*100);

    if(probability <= 33){
        return "Rock";
    }

    else if(probability <= 66){
        return "Paper";
    }

    else{
        return "Scissors";
    }
}

/**
 * @param {string} player 
 * @param {string} comp
 * 
 * @returns the conclusion after one turn
 * -1 is draw, 0 is loss, 1 is win
 */
function decision(player, comp){
    let conclusion;
    if(comp === "rock"){
        switch (player){
            case "rock":
                conclusion = -1;
                break;
                 
            case "paper":
                conclusion = 1;
                break;
                 
            case "scissors":
                conclusion = 0;
                break;
        }
    }

    else if(comp === "paper"){
        switch (player){
            case "rock":
                conclusion = 0;
                break;
                 
            case "paper":
                conclusion = -1;
                break;
                 
            case "scissors":
                conclusion = 1;
                break;
        }
    }

    else{
        switch (player){
            case "rock":
                conclusion = 1;
                break;
                 
            case "paper":
                conclusion = 0;
                break;
                 
            case "scissors":
                conclusion = -1;
                break;
        }
    }

    return conclusion;
}

/**
 * @returns the result after playing one round
*/
function playRound(playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase();
    let compChoice = computerSelection.toLowerCase();

    let result = decision(playerChoice, compChoice);
    if(result === 1){
        return "p-win";
    }

    

    else if(result === 0){
        return "c-win";
    }

    else if(result === -1){
        return "draw";
    }

    else{
        return "invalid";
    }

}

/**
 * full five round implementation of rock paper scissors
 */
function game(){

    let compScore = 0;
    let playerScore = 0;
    for(let round = 1; round <= 5; round++){
        let pChoice = prompt("Rock? Paper? Scissors?")
        let cChoice = getComputerChoice();
        let result = playRound(pChoice, cChoice);

        switch (result){
            case "p-win":
                playerScore++;
                break;
            case "c-win":
                compScore++;
                break;
            case "draw":
                break;
            case "invalid":
                alert("input was invalid score will not be counted")
                break;

        }
    }

    if(playerScore > compScore){
        alert(`you win! ${playerScore}/5`);
    } else if(playerScore === compScore){
        alert("a draw!");
    } else{
        alert(`computer wins! ${compScore}/5`);
    }


}

//Test

// const playerSelection = prompt("What is your choice?");
// const computerSelection = getComputerChoice();

// alert(playRound(playerSelection, computerSelection));

