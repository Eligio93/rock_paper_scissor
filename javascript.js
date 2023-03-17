let pcChoice= ["rock","paper","scissor"];
let pcSelection= getComputerChoice(pcChoice);
let playerSelection=prompt().toLowerCase();
let playerScore=0;
let pcScore=0;

function getComputerChoice(pcChoice){
    pcChoice=pcChoice[Math.floor(Math.random()*pcChoice.length)];
    return pcChoice;
}

console.log(pcSelection);
console.log(playerSelection.toLowerCase());