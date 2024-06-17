const bestOf = 5,
choiceArray = ["rock","paper","scissors"];

let playerScore = 0,
opponentScore = 0;

BestWins(bestOf);


function BestWins(bestof) {
        let bestofCalc = Math.floor(bestof / 2) + 1;

        while (playerScore < bestofCalc && opponentScore < bestofCalc) {
                PlayRound();
        }

        if (playerScore > opponentScore) {
                alert(`You won ${playerScore} to ${opponentScore}!`);
        } else {
                alert(`You lost ${opponentScore} to ${playerScore}!`);
        }
}

function PlayRound() {
        let result,
        player = GetPlayerChoice(prompt("Choose "+
                "'rock', 'paper', or 'scissors' to play.")),
        opponent = Math.floor(Math.random() * 3);

        if (player === -1) {
                alert("Enter the right things ya dingus")
                return;
        }

        switch (Math.abs(player - opponent)) {
                case 0:
                        result = "tie";
                        break;
                case 1:
                        result = (player > opponent) ? "win" : "lose" ;
                        break;
                case 2:
                        result = (player < opponent) ? "win" : "lose" ;
                        break;
        }
        DisplayResult(result, player, opponent);
}

function GetPlayerChoice(entry) {
        let choice = entry.toLowerCase();

        return choiceArray.indexOf(choice);
}

function DisplayResult(result, player, opponent) {
        let win =
        `You win! ${choiceArray[player]} beats ${choiceArray[opponent]}.`,
        lose =
        `You lose! ${choiceArray[opponent]} beats ${choiceArray[player]}.`,
        tie =
        `It's a tie! You both chose ${choiceArray[player]}!`,
        message;

        switch (result) {
                case "win":
                        message = win
                        playerScore++;
                        break;
                case "lose":
                        message = lose;
                        opponentScore++;
                        break;
                default:
                        message = tie;
                        break;
        }
        alert(message + "\nYou:" + playerScore + " Opp:" + opponentScore);
}