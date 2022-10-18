function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

function getComputerChoise(){
    let choise=getRndInteger(1,3);
    switch (choise){
        case 1:choise="rock";break;
        case 2:choise="paper";break;
        case 3:choise="scissor";break;
    }
    console.log(choise);
    return choise;
};

let playerSelection = prompt("Choose Hooman :");
playerSelection = playerSelection.toLowerCase();
console.log(playerSelection);
let computerSelection = getComputerChoise();
console.log(computerSelection);
const winmsg="Human ,you won.";
const losemsg="You lost ,fool.The computer is smarter!";
const tiemsg="Its a tie.We will still treat you as a fool!";

function playRound(){
    if (playerSelection === computerSelection) {
        return tiemsg;
        } else if ((playerSelection==="rock" && computerSelection==="scissor") || (playerSelection==="paper" && computerSelection==="rock") || (playerSelection==="scissor" && computerSelection==="paper")) {
            return winmsg;
        } else return losemsg;
};

console.log(playRound());
