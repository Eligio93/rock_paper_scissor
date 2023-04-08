let pcChoice= ["rock","paper","scissors"];
let pcSelection= "";

let playerSelection="";
let playerScore=0;
let pcScore=0;
let finalMessage="";

//The function below take a random word from the array
function getComputerChoice(pcChoice){
    pcChoice=pcChoice[Math.floor(Math.random()*pcChoice.length)];
    return pcChoice;
}
//The function below play one round of the game
function round(playerSelection,pcSelection){
    if(playerSelection===pcSelection){
        return "Draw! Your weapons are the same";
    }else if(playerSelection==="rock"&& pcSelection==="paper"){
         pcScore=pcScore+1;
         return "You Lose!Paper beats Rock";
    }else if(playerSelection==="paper"&& pcSelection==="scissors"){
         pcScore=pcScore+1;
         return "You Lose!Scissor beats paper";
    }else if(playerSelection==="scissors"&& pcSelection==="rock"){
         pcScore=pcScore+1;
         return "You Lose!Rock beats Scissor";
    }else if(playerSelection==="paper"&& pcSelection==="rock"){
         playerScore=playerScore+1;
         return "You Win!Paper beats Rock";
    }else if(playerSelection==="scissors"&& pcSelection==="paper"){
         playerScore=playerScore+1;
         return "You Win!Scissor beats paper";
    }else if(playerSelection==="rock"&& pcSelection==="scissors"){
        playerScore=playerScore+1;
        return "You Win!Paper beats Rock";
    }else{
        return "there is a problem"  }


}


//the function below repeat the round for 5 times and declare the winner, the loser or if the game ends in draw
/*function game(){
for(let cont=0;cont<5;cont++){
    playerSelection=prompt("Type rock, paper or scissors").toLowerCase(); 
    console.log(playerSelection);
    pcSelection=getComputerChoice(pcChoice);
    console.log(pcSelection);
    //round(playerSelection,pcSelection);
    console.log(round(playerSelection,pcSelection));
    console.log(playerScore,pcScore);
}
if(playerScore>pcScore){
    finalMessage="You have won the game";
    return finalMessage;
}else if(playerScore<pcScore){
    finalMessage="You have lost the game against the computer";
    return finalMessage;
}else{
    finalMessage="The game is Draw";
    return finalMessage;
}
}*/


//Everytime i click one button a round is been played
let btn=document.querySelectorAll("button").forEach(function(e){
   e.addEventListener("click",function(){
    playerSelection=e.id;
    pcSelection=getComputerChoice(pcChoice);
    console.log(playerSelection);
    console.log(pcSelection);
    console.log(round(playerSelection,pcSelection));
    
   })
});



