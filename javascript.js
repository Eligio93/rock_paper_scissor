let pcChoice= ["rock","paper","scissor"];
let pcSelection= getComputerChoice(pcChoice);
let playerSelection=prompt().toLowerCase();
let playerScore=0;
let pcScore=0;

function getComputerChoice(pcChoice){
    pcChoice=pcChoice[Math.floor(Math.random()*pcChoice.length)];
    return pcChoice;
}

function round(playerSelection,pcSelection){
    if(playerSelection===pcSelection){
        return "Draw! Your weapons are the same";
    }else if(playerSelection==="rock"&& pcSelection==="paper"){
         pcScore=pcScore+1;
         return "You Lose!Paper beats Rock";
    }else if(playerSelection==="paper"&& pcSelection==="scissor"){
         pcScore=pcScore+1;
         return "You Lose!Scissor beats paper";
    }else if(playerSelection==="scissor"&& pcSelection==="rock"){
         pcScore=pcScore+1;
         return "You Lose!Rock beats Scissor";
    }else if(playerSelection==="paper"&& pcSelection==="rock"){
         playerScore=playerScore+1;
         return "You Win!Paper beats Rock";
    }else if(playerSelection==="scissor"&& pcSelection==="paper"){
         playerScore=playerScore+1;
         return "You Win!Scissor beats paper";
    }else if(playerSelection==="rock"&& pcSelection==="scissor"){
        playerScore=playerScore+1;
        return "You Win!Paper beats Rock";
    }else{
        return "there is a problem"  }


}

console.log(pcSelection);
console.log(playerSelection);
console.log(round(playerSelection,pcSelection));
console.log(playerScore,pcScore);