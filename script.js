let cpuNum = getRandomInt(3),
itemArray = ["rock","paper","scissors"],
userEntry = prompt("aa"),
userNum = getUserNum(userEntry),
output = compare(userNum, cpuNum);

function getUserNum(userString) {
let userComp = userString.toLowerCase();
        return itemArray.indexOf(userComp);
}

function getRandomInt(max) {
        return Math.floor(Math.random() * max);
}

function compare(user, cpu) {
        if (user + cpu == 2 && user != cpu) {
                getWinner("<", user, cpu);
        }
        else if (user == cpu) {
                console.log(`It's a tie! You both chose ${itemArray[user]}!`)
        } else {
                getWinner(">", user, cpu);
        }
}

function getWinner(type, user, cpu) {
        let win = `You win! ${itemArray[user]} beats ${itemArray[cpu]}.`,
        lose = `You lose! ${itemArray[cpu]} beats ${itemArray[user]}.`,
        message = "Default";

                if (type == "<") {
                        message = (user < cpu) ? win : lose;
                } else {
                        message = (user > cpu) ? win : lose;
                };
        console.log(message);
}
