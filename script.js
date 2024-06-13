const bestOf = 5;

let itemArray = ["rock","paper","scissors"],
scoreUser = 0,
scoreCpu = 0,
userNum = GetUserNum(prompt("a")),
cpuNum = (max) => Math.floor(Math.random() * max);

GetWinner(userNum, cpuNum(3));

function GetUserNum(userString) {
let userComp = userString.toLowerCase();

        return itemArray.indexOf(userComp);
}

function GetWinner(user, cpu) {
        if (user == -1) {
                alert("Enter the right thing ya dingus.");
                return;
        }

        switch(Math.abs(user - cpu)) {
                case 0:
                        alert(`It's a tie! You both chose ${itemArray[user]}!`);
                        break;
                case 1:
                        Compare(">", user, cpu);
                        break;
                case 2:
                        Compare("<", user, cpu);
                        break;
                default:
                        break;
        }
}

function Compare(type, user, cpu) {
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
