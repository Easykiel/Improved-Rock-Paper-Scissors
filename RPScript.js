// JavaScript source code for Improved Rock Paper Scissors website
// By Ezekiel Protacio

//Selects rock paper scissors at random
function computerPlay() { 
    var selection = ['rock', 'paper', 'scissors'];
    var selected = Math.floor(Math.random() * (3));
    return selection[selected];
}

//Determine who wins the round
function playRound(playerSelection, computerSelection) {
    var winner = ['player', 'computer', 'draw'];

    //If player wins
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {

        return winner[0];
    }
    //If Computer Wins
    else if ((computerSelection == 'rock' && playerSelection == 'scissors') ||
        (computerSelection == 'paper' && playerSelection == 'rock') ||
        (computerSelection == 'scissors' && playerSelection == 'paper')) {

        return winner[1];
    }
    //Draw
    else
        return winner[2];
}

//Adds score of the winner
function addScore(winner) {
    winnerScore = document.querySelector('#Computer');

    //Checks for who wins
    if (winner == 'player')
        winnerScore = document.querySelector('#Player');

    else if (winner == 'computer')
        winnerScore = document.querySelector('#Computer');

    else
        return;

    //Edits HTML to change the score
    originalText = winnerScore.textContent;
    sliceText = originalText.slice(0, originalText.length - 1);
    score = parseInt(originalText[originalText.length - 1]);
    score++;
    winnerScore.textContent = sliceText + score;
}

//Changes to the next Round
function changeRound(){
    const round = document.querySelector('#Round');
    var score = parseInt(round.textContent[round.textContent.length - 1])

    //Increments score then changes text to the current score
    score++;
    originalText = round.textContent;
    sliceText = originalText.slice(0, originalText.length - 1);
    round.textContent = sliceText + score;
}

//Displays Player's Choice and Results
function displayChoices(computerChoice, playerChoice, winner) {
    const player = document.querySelector('#playerChoice');
    const computer = document.querySelector('#compChoice');
    const winText = document.querySelector('#winner');
    const playerWins = "You Win!";
    const compWins = "Computer Wins!";
    const draw = "It's a Draw!";

    player.textContent = "You select " + playerChoice;
    computer.textContent = "Computer selects " + computerChoice;

    //Player wins
    if (winner == 'player')
        winText.textContent = playerWins;

    //Computer Wins
    else if (winner == 'computer')
        winText.textContent = compWins;

    //Draw
    else
        winText.textContent = draw;
}

//Checks if is at Five Rounds
function fiveRounds() {
    const Round = document.querySelector('#Round');

    //Looks at the Round Number from the DOM
    var roundNum = parseInt(Round.textContent[Round.textContent.length - 1]);

    if (roundNum >= 5)
        return true;

    else
        return false;
}

//Displays the Winner of the 5 Rounds
function displayWinner() {
    const player = document.querySelector('#Player');
    const computer = document.querySelector('#Computer');
    const overallWinner = document.querySelector('#overallWinner')

    //Looks at both scores
    var playerScore = parseInt(
        player.textContent[player.textContent.length - 1]);
    var computerScore = parseInt(
        computer.textContent[computer.textContent.length - 1]);

    //Determines Winner
    if(playerScore > computerScore)
        overallWinner.textContent = "Yay! You win the 5 Rounds with " + playerScore + " points!";

    else if (playerScore < computerScore)
        overallWinner.textContent = "Aww! COM wins the 5 Rounds with " + computerScore + " points.";

    else
        overallWinner.textContent = "It's a draw with " + computerScore + " points!";
}

//Plays 5 rounds of Rock Paper Scissors
function game() {
    var winner = '';
    var choice = '';
    var computerSelection = '';
    const buttons = document.querySelectorAll('button');

    //Listens to all the buttons
    buttons.forEach((button) => {

        button.addEventListener('click', (e) => {
            //Checks for 5 rounds
            if(fiveRounds() == true){
                displayWinner();
                return;
            } else
                changeRound();

            //Gets Players' choices
            computerSelection = computerPlay();
            choice = button.id.toLowerCase();

            //Checks who wins then Displays it
            winner = playRound(choice, computerSelection);
            displayChoices(computerSelection, choice, winner);

            //Adds Score
            addScore(winner);
        });
    });
}

game();