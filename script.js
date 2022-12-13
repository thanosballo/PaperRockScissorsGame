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
const winmsg="Human ,you won.";
const losemsg="You lost ,fool.The computer is smarter!";
const tiemsg="Its a tie.We will still treat you as a fool!";

let userSelection;
let roundCounter=0;
let humanWins=0;
let ties=0;
let computerWins=0;
const screen=document.querySelector(".display-screen");
const messageOut=document.createElement("p");
const buttons=Array.from(document.querySelectorAll(".button"));
console.log(buttons)
buttons.forEach((button) => {
    button.addEventListener("click", ()=>{
        removeClass();
        button.classList.add("active-selection");
        roundCounter=roundCounter+1;
        userSelection=button.dataset.selection;
        messageOut.textContent=playRound();
        screen.appendChild(messageOut);
        if (roundCounter===5) {
            if (humanWins>computerWins){
                messageOut.textContent=`The final result is human ${humanWins} , ties : ${ties} and computer ${computerWins}.Human Wins!`
            }
            else if (humanWins<computerWins) {
                messageOut.textContent=`The final result is human ${humanWins} , ties : ${ties} and computer ${computerWins}.Computer Wins!`
            } else messageOut.textContent=`The final result is human ${humanWins} , ties : ${ties} and computer ${computerWins}.Bloody Tie !!`
            screen.appendChild(messageOut);
            resetCounters();
        }
        
    })
});


function removeClass(){
    buttons.forEach((button)=>{
        button.classList.remove("active-selection");
        console.log("ss");
    });
};

function playRound(){
    let computerSelection = getComputerChoise();
    console.log("Computer choose:" + computerSelection);
    if (userSelection === computerSelection) {
        ties=ties+1;
        return tiemsg;
        } else if ((userSelection==="rock" && computerSelection==="scissor") || (userSelection==="paper" && computerSelection==="rock") || (userSelection==="scissor" && computerSelection==="paper")) {
            humanWins=humanWins+1;
            return winmsg;
        } else { 
            computerWins=computerWins+1;
            return losemsg};
};

function resetCounters(){
    roundCounter=0;
    humanWins=0;
    computerWins=0;
    ties=0;
}