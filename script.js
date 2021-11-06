let playerPoints=0;
let computerPoints=0;

var rock = document.querySelector("#rock");
var paper = document.querySelector("#paper");
var scissors = document.querySelector("#scissors");

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);


function computerPlay(){
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(e){
    computerPlay();
    let computerSelection = computerPlay();
    console.log(computerSelection);
    let playerSelection = e.target.id;
    console.log(playerSelection);
    if (playerSelection == "rock") {
        switch(computerSelection) {
            case "rock": console.log("It's a tie!");
                break;
            case "paper": computerPoints++; 
            console.log("You lose! Paper beats rock."); 
                break;
            case "scissors": playerPoints++;
            console.log("You win! Rock beats scissors.");
                break;}}
    else if (playerSelection == "paper") {
        switch(computerSelection) {
            case "rock": playerPoints++;
            console.log("You win! Paper beats rock.");
                break;
            case "paper": console.log("It's a tie!");
                break;
            case "scissors": computerPoints++;
            console.log("You lose! Scissors beats paper.");
                break;}}
    else {
        switch(computerSelection) {
            case "rock": computerPoints++; 
            console.log("You lose! Rock beats scissors.");
                break;
            case "paper": playerPoints++; 
            console.log("You win! Scissors beats paper.");
                break;
            case "scissors": console.log("It's a tie!");
                break;}}
}

// function game() {
//     while (playerPoints<=4&&computerPoints<=4){
//         playRound();
//     }
//     if (playerPoints == 5) {
//         return("You win! Refresh to play again.");
//     }
//     else {
//         return("You lose! Refresh to play again.");
//     }
// }

// game();
