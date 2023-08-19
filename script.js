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

function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = prompt("What is your choice: ").toLowerCase(); 
    while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
        playerChoice = prompt("Please enter a valid input: ").toLowerCase(); 
    }
    if (playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "scissors" && computerChoice == "paper" || playerChoice == "paper" && computerChoice == "rock") {
        return "win";
    } else if (playerChoice == "rock" && computerChoice == "paper" || playerChoice == "scissors" && computerChoice == "rock" || playerChoice == "paper" && computerChoice == "scissors") {
        return "lose"; 
    } else {
        return "tie"; 
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0; 
    while (playerWins < 5 && computerWins < 5) {
        let result = playRound();
        console.log(result); 
        if (result == "win") {
            playerWins += 1;
        } else if (result == "lose") {
            computerWins += 1; 
        }
    }
    if (playerWins == 5) {
        console.log("You win!");
    } else {
        console.log("You lose!"); 
    }
}

game();