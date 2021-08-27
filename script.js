function computerPlay(){
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(){
    computerPlay();
    let computerSelection = computerPlay();
    let playerSelection = prompt("Make a selection:", "rock, paper, or scissors").toLowerCase();
    if (computerSelection == "rock") {
        switch(playerSelection) {
            case "rock": return("It's a tie!");
                break;
            case "paper": playerPoints++; 
            return("You win! Paper beats rock."); 
                break;
            case "scissors": computerPoints++;
            return("You lose! Rock beats scissors.");
                break;}}
    else if (computerSelection == "paper") {
        switch(playerSelection) {
            case "rock": computerPoints++;
            return("You lose! Paper beats rock.");
                break;
            case "paper": return("It's a tie!");
                break;
            case "scissors": playerPoints++;
            return("You win! Scissors beats paper.");
                break;}}
    else {
        switch(playerSelection) {
            case "rock": playerPoints++; 
            return("You win! Rock beats scissors.");
                break;
            case "paper": computerPoints++; 
            return("You lose! Scissors beats paper.");
                break;
            case "scissors": return("It's a tie!");
                break;}}
}

let playerPoints=0;
let computerPoints=0;

function game() {
    while (playerPoints<=4&&computerPoints<=4){
        playRound();
    }
    if (playerPoints == 5) {
        return("You win! Refresh to play again.");
    }
    else {
        return("You lose! Refresh to play again.");
    }
}

    game();
