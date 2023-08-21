let wins = 0;
let ties = 0;
let losses = 0;

const results = document.querySelector('.results'); 
results.textContent = "0-0";

const outcome = document.querySelector('.outcome');
const roundResults = document.querySelector('.round');

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num == 0) {
        return "rock";
    } else if (num == 1) {
        return "paper";
    } else if (num == 2) {
        return "scissors"; 
    }
}

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    if (playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "scissors" && computerChoice == "paper" || playerChoice == "paper" && computerChoice == "rock") {
        wins += 1;
        results.textContent = wins + "-" + losses; 
        roundResults.textContent = "You won, " + playerChoice + " beats " + computerChoice; 
    } else if (playerChoice == "rock" && computerChoice == "paper" || playerChoice == "scissors" && computerChoice == "rock" || playerChoice == "paper" && computerChoice == "scissors") {
        losses += 1;
        results.textContent = wins + "-" + losses; 
        roundResults.textContent = "You lost, " + playerChoice + " loses to " + computerChoice;
    } else {
        ties += 1;
        results.textContent = wins + "-" + losses; 
        roundResults.textContent = "It was a tie, the computer also picked " + computerChoice; 
    }
    if (wins == 5 || losses == 5) {
        finish();
    }
}

function finish() {
    if (wins == 5) {
        outcome.textContent = "You Win!";
    } else {
        outcome.textContent = "You Lose!";
    }
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
rock.addEventListener("click", () => {playRound('rock')});
paper.addEventListener("click", () => {playRound('paper')});
scissors.addEventListener("click", () => {playRound('scissors')});