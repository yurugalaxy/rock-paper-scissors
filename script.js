const choiceArray = ["rock","paper","scissors"],
divResult = document.querySelector(".Result"),
divScore = document.querySelector(".Score"),
playButtons = document.querySelectorAll(".mPlayButton"),
resetButton = document.querySelector(".Reset"),
selectDrop = document.querySelector("#BestOfSelect");

let playerScore = 0,
opponentScore = 0;

selectDrop.addEventListener("change", (resetRounds));

resetButton.addEventListener("click", (resetRounds));

function resetRounds() {
        playerScore = 0;
        opponentScore = 0;
        divResult.textContent = "";
        divScore.textContent = "";
        divResult.classList.remove("mWinText");
        divResult.classList.remove("mLoseText");
        divScore.classList.remove("mWinText");
        divScore.classList.remove("mLoseText");
}

playButtons.forEach((button) => {
        button.addEventListener("click", () => {
                let currRound = PlayRound(button.id),
                bestOf =
                Math.floor(selectDrop.value / 2) + 1;

                if (playerScore < bestOf && opponentScore < bestOf) {
                        DisplayResult(
                                GetWinner(
                                        currRound.result,
                                        currRound.player,
                                        currRound.opponent
                                )
                        );
                }

        if (playerScore >= bestOf) {
                divScore.classList.remove("mLoseText");
                divScore.classList.add("mWinText");
                divScore.textContent =
                `Congratumalations! You won ` +
                `${playerScore} to ${opponentScore}!`;
        } else if (opponentScore >= bestOf) {
                divScore.classList.remove("mWinText");
                divScore.classList.add("mLoseText");
                divScore.textContent =
                `Oh heck. ` +
                `You lost ${opponentScore} to ${playerScore}!`;
        }
        });
});

function PlayRound(inputPlayer) {
        let win,
        opponent = Math.floor(Math.random() * 3),
        player = choiceArray.indexOf(inputPlayer);

        switch (Math.abs(player - opponent)) {
                case 0: // Tie
                        return {
                                player: player,
                                opponent: opponent
                        };
                case 1: // Largest number wins
                        win = player > opponent;
                        break;
                case 2: // Smallest number wins
                        win = player < opponent;
                        break;
        }
        return {
                result: win,
                player: player,
                opponent: opponent
        };
}

function GetWinner(win, player, opponent) {
        let messWin =
        `You win! ${choiceArray[player]} beats ${choiceArray[opponent]}.`,
        messLose =
        `You lose! ${choiceArray[player]} loses to ${choiceArray[opponent]}.`,
        messTie =
        `It's a tie! You both chose ${choiceArray[player]}!`,
        message;

        if (typeof win === 'undefined') {
                divResult.classList.remove("mWinText");
                divResult.classList.remove("mLoseText");
                message = messTie;
                return message;
        }

        if (win) {
                divResult.classList.remove("mLoseText");
                divResult.classList.add("mWinText");
                message = messWin
                playerScore++;
        } else {
                divResult.classList.remove("mWinText");
                divResult.classList.add("mLoseText");
                message = messLose;
                opponentScore++;
        }

        return message;
}

function DisplayResult(message) {
        divResult.textContent = message;
        divScore.textContent =
        "You:" + playerScore + " Opponent:" + opponentScore;
}