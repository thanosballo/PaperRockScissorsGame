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

let userSelection;
const screen=document.querySelector(".display-screen");
const messageOut=document.createElement("p");
const buttons=Array.from(document.querySelectorAll("button"));
buttons.forEach((button) => {
    button.addEventListener("click", ()=>{
        userSelection=button.dataset.selection;
        console.log(userSelection);
        messageOut.textContent=playRound();
        screen.appendChild(messageOut);
    })
});

const winmsg="Human ,you won.";
const losemsg="You lost ,fool.The computer is smarter!";
const tiemsg="Its a tie.We will still treat you as a fool!";

function playRound(){
    let computerSelection = getComputerChoise();
    console.log("Computer choose:" + computerSelection);
    if (userSelection === computerSelection) {
        return tiemsg;
        } else if ((userSelection==="rock" && computerSelection==="scissor") || (userSelection==="paper" && computerSelection==="rock") || (userSelection==="scissor" && computerSelection==="paper")) {
            return winmsg;
        } else return losemsg;
};