// JavaScript source code
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

function choicesMade() {

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

function changeRound(){
    const round = document.querySelector('#Round');
    var score = parseInt(round.textContent[round.textContent.length - 1])

    score++;
    originalText = round.textContent;
    sliceText = originalText.slice(0, originalText.length - 1);
    round.textContent = sliceText + score;
}

//Plays 5 rounds of Rock Paper Scissors
function game() {
    var computerWins = '';
    var winner = '';
    var choice = '';
    var computerSelection = '';
    const playerWins = 'You Win!';
    const draw = "It's a Draw!";
    const buttons = document.querySelectorAll('button');



    //Listens to all the buttons
    buttons.forEach((button) => {

        button.addEventListener('click', (e) => {
            computerSelection = computerPlay();
            choice = button.id.toLowerCase();
            winner = playRound(choice, computerSelection);
            addScore(winner);
            changeRound();
        });
    });


    /*
    //play for 5 rounds
    while (currentRound <= 5) {
        console.log('Computer selects ' + computerSelection);
        console.log('You select ' + playerSelection);
        computerWins = 'You Lose! ' + computerSelection + ' beats ' + playerSelection;

        //Player wins add to his/her score
        if (winner == 'player') {
            console.log(playerWins);
            playerScore++;
        }

        //Computer Wins add to its score
        else if (winner == 'computer') {
            console.log(computerWins);
            computerScore++;
        }

        //Draw no scores added
        else
            console.log(draw);

        console.log('\n');
        currentRound++;
    }

    if (playerScore > computerScore)
        console.log('Yay! You win the 5 Rounds with ' + playerScore + ' points!');

    else if (computerScore > playerScore)
        console.log('Aww! COM wins the 5 Rounds with ' + computerScore + ' points :(');

    else
        console.log("It's a draw with " + computerScore + " points!");
    */
}

game();