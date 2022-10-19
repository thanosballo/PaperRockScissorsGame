function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

function getComputerChoise(){
    let choise=getRndInteger(1,3);
    switch (choise){
        case 1:choise="rock";break;
        case 2:choise="paper";break;
        case 3:choise="scissor";break;
    };
    return choise;
};

let playerSelection;
function getPlayersChoise(){
    playerSelection = prompt("Choose Hooman :");
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}


const winmsg="Human ,you won.";
const losemsg="You lost ,fool.The computer is smarter!";
const tiemsg="Its a tie.We will still treat you as a fool!";

function playRound(){
    let computerSelection = getComputerChoise();
    console.log(computerSelection);
    if (playerSelection === computerSelection) {
        return tiemsg;
        } else if ((playerSelection==="rock" && computerSelection==="scissor") || (playerSelection==="paper" && computerSelection==="rock") || (playerSelection==="scissor" && computerSelection==="paper")) {
            return winmsg;
        } else return losemsg;
};

function game(){
for (let i=1 ;i<6;i++){
    console.log(getPlayersChoise());
    console.log(playRound());
    console.log("round",i);
}
return "game is over";
}

console.log(game());
