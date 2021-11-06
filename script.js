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
};

function playRound(e){
    computerPlay();
    let computerSelection = computerPlay();
    console.log(computerSelection);
    let playerSelection = e.target.id;
    console.log(playerSelection);

    if 
        (playerSelection == computerSelection) {
            document.getElementById("results").innerHTML = "It's a tie!";}
    else if 
        ((playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
            document.getElementById("results").innerHTML = "Nice, " + playerSelection + " beats " + computerSelection + ".";
            playerPoints++;
        }
    else {
            document.getElementById("results").innerHTML = "Sorry, " + computerSelection + " beats " + playerSelection + ".";
            computerPoints++;
    }};


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
