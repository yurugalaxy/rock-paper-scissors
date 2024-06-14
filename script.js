const bestOf = 5,
choiceArray = ["rock","paper","scissors"];

// let playerNum = 5,
// opponentNum = 2;
let playerNum = GetPlayerChoice(prompt("aaa")),
opponentNum = Math.floor(Math.random() * 3),
playerScore = 0,
opponentScore = 0;

function GetPlayerChoice(entry) {
        let choice = entry.toLowerCase();

        return choiceArray.indexOf(choice);
}


// BestWins(bestOf);
// PlayRound(playerNum, opponentNum);

function PlayRound(player, opponent) {
        let result;

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


function DisplayResult(result, player, opponent) {
        let win = `You win! ${choiceArray[player]} beats ${choiceArray[opponent]}.`,
        lose = `You lose! ${choiceArray[opponent]} beats ${choiceArray[player]}.`,
        tie = `It's a tie! You both chose ${choiceArray[player]}!`,
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

function BestWins(bestof) {
        let bestofCalc = bestof / 2 + 1;

        while (playerScore < bestofCalc || opponentScore < bestofCalc) {
                PlayRound(playerNum, opponentNum);
        }
}
































// function PlayRound(player, opponent) {
//         let type;

//         if (player == -1) {
//                 alert("Enter the right thing ya dingus.");
//                 return;
//         }

//         switch(Math.abs(player - opponent)) {
//                 case 0:
//                         type = "="
//                         break;
//                 case 1:
//                         type = ">"
//                         break;
//                 case 2:
//                         type = "<"
//                         break;
//                 default:
//                         break;
//         }
//         GetWinner(type, player, opponent);
// }

// function Compare(player, opponent) {
//         let type;

//         if (player == -1) {
//                 alert("Enter the right thing ya dingus.");
//                 return;
//         }

//         switch(Math.abs(player - opponent)) {
//                 case 0:
//                         type = "="
//                         break;
//                 case 1:
//                         type = ">"
//                         break;
//                 case 2:
//                         type = "<"
//                         break;
//                 default:
//                         break;
//         }
//         return type;
// }

// function Win() {
//         return;
// }

// function Lose() {
//         return;
// }

// function Tie() {
//         return;
// }

// function GetWinner(type, player, opponent) {
//         let win = `You win! ${choiceArray[player]} beats ${choiceArray[opponent]}.`,
//         lose = `You lose! ${choiceArray[opponent]} beats ${choiceArray[player]}.`,
//         tie = `It's a tie! You both chose ${choiceArray[player]}!`,
//         message;

//         switch (type) {
//                 case "=":
//                         message = tie;
//                         break;
//                 case "<":
//                         message = (player < opponent) ? win : lose;
//                         break;
//                 case ">":
//                         message = (player > opponent) ? win : lose;
//                         break;
//                 default:
//                         break;
//         }

//         return message;
// }
