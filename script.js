let itemArray = ["rock","paper","scissors"],
scoreUser = 0,
scoreCpu = 0;

getWinner(getUserNum(prompt('Enter "rock:, "paper", or "scissors" to play :3')), getRandomInt(3));

function getUserNum(userString) {
let userComp = userString.toLowerCase();
        return itemArray.indexOf(userComp);
}

function getRandomInt(max) {
        return Math.floor(Math.random() * max);
}

function getWinner(user, cpu) {
        if (user != -1) {
                switch(Math.abs(user - cpu)) {
                        case 0:
                                alert(`It's a tie! You both chose ${itemArray[user]}!`);
                                break;
                        case 1:
                                compare(">", user, cpu);
                                break;
                        case 2:
                                compare("<", user, cpu);
                                break;
                        default:
                                break;
                }
        } else {
                alert("Enter the right thing ya dingus.");
        }
}

function compare(type, user, cpu) {
        let win = `You win! ${itemArray[user]} beats ${itemArray[cpu]}.`,
        lose = `You lose! ${itemArray[cpu]} beats ${itemArray[user]}.`,
        message;
                if (type == "<") {
                        ++scoreUser;
                        message = (user < cpu) ? win : lose;
                } else {
                        ++scoreCpu;
                        message = (user > cpu) ? win : lose;
                };
        alert(message);
        alert(`It is currently ${scoreUser} to ${scoreCpu}.`);
}
