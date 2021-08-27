function computerPlay(){
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

let computerSelection = computerPlay();
let playerPoints = 0;
let computerPoints = 0;

function playRound(){
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
    else if (computerSelection == "scissors") {
        switch(playerSelection) {
            case "rock": playerPoints++; 
                return("You win! Rock beats scissors.");
                break;
            case "paper": computerPoints++; 
                return("You lose! Scissors beats paper.");
                break;
            case "scissors": return("It's a tie!");
                break;}}
    else {
        return("Something's wrong.");
    }
}

console.log(computerSelection);
console.log(playRound());
console.log(playerPoints);
console.log(computerPoints);