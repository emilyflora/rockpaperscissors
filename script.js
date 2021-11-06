let playerPoints=0;
let computerPoints=0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", game);
paper.addEventListener("click", game);
scissors.addEventListener("click", game);

function computerPlay(){
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
};

function playRound(e){
    computerPlay();
    let computerSelection = computerPlay();
    let playerSelection = e.target.id;
    if 
        (playerSelection == computerSelection) {
            document.getElementById("results").innerHTML = "It's a tie!";
        }
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
    }
    document.getElementById("player").innerHTML = playerPoints;
    document.getElementById("computer").innerHTML = computerPoints;
};

function game(e) {
    if (playerPoints<=4&&computerPoints<=4){
        playRound(e);
    }
    else if (playerPoints == 5) {
        document.getElementById("results").innerHTML = "You win! Refresh to play again.";
    }
    else {
        document.getElementById("results").innerHTML = "You lose! Refresh to play again.";
    }
};
