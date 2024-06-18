const bestOf = rounds.value,
choiceArray = ["rock","paper","scissors"],
divResult = document.querySelector(".Result"),
divScore = document.querySelector(".Score"),
playButtons = document.querySelectorAll(".mPlayButton");

let playerScore = 0,
opponentScore = 0;

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

playButtons.forEach((button) => {
        button.addEventListener("click", () => {
                PlayRound(button.id)
        });
});

function PlayRound(inputPlayer) {
        let result,
        opponent = Math.floor(Math.random() * 3),
        player = choiceArray.indexOf(inputPlayer);

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
        return {res: result, pl: player, opp: opponent};
        DisplayResult(result, player, opponent);
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
                        divResult.classList.remove("mLoseText");
                        divResult.classList.add("mWinText");
                        message = win
                        playerScore++;
                        break;
                case "lose":
                        divResult.classList.remove("mWinText");
                        divResult.classList.add("mLoseText");
                        message = lose;
                        opponentScore++;
                        break;
                default:
                        divResult.classList.remove("mWinText");
                        divResult.classList.remove("mLoseText");
                        message = tie;
                        break;
        }
        divResult.textContent = message;
        divScore.textContent =
        "You:" + playerScore + " Opponent:" + opponentScore;
}