let pcChoice = ["rock", "paper", "scissors"];
let pcSelection = "";
let message = document.querySelector("#message");
let playerSelection = "";
let playerScore = 0;
let pcScore = 0;
let finalMessage = "";

//The function below take a random word from the array
function getComputerChoice(pcChoice) {
    pcChoice = pcChoice[Math.floor(Math.random() * pcChoice.length)];
    return pcChoice;
}
//The function below play one round of the game
function round(playerSelection, pcSelection) {
    if (playerSelection === pcSelection) {

        message.textContent = "Tie! Your weapons are the same";
    } else if (playerSelection === "rock" && pcSelection === "paper") {
        pcScore = pcScore + 1;

        message.textContent = "You Lose!Paper beats Rock";
    } else if (playerSelection === "paper" && pcSelection === "scissors") {
        pcScore = pcScore + 1;

        message.textContent = "You Lose!Scissor beats paper";
    } else if (playerSelection === "scissors" && pcSelection === "rock") {
        pcScore = pcScore + 1;

        message.textContent = "You Lose!Rock beats Scissor";
    } else if (playerSelection === "paper" && pcSelection === "rock") {
        playerScore = playerScore + 1;

        message.textContent = "You Win!Paper beats Rock";
    } else if (playerSelection === "scissors" && pcSelection === "paper") {
        playerScore = playerScore + 1;

        message.textContent = "You Win!Scissor beats paper";
    } else if (playerSelection === "rock" && pcSelection === "scissors") {
        playerScore = playerScore + 1;

        message.textContent = "You Win!Paper beats Rock";
    } else {
        message.textContent = "there is a problem"
    }


}

let body = document.querySelector("body");
//Everytime i click one button a round is been played
let btn = document.querySelectorAll("button").forEach(function (e) {
    e.addEventListener("click", function () {
        
        playerSelection = e.id;
        pcSelection = getComputerChoice(pcChoice);
        //If I took the element by CLass it wouldn't change the div contents. That's why using th ID works
        document.getElementById("playerWeapon").textContent = playerSelection;
        console.log(playerSelection);
        document.getElementById("pcWeapon").textContent = pcSelection;
        console.log(pcSelection);
        round(playerSelection, pcSelection);
        document.getElementById("playerResult").textContent = playerScore;
        document.getElementById("pcResult").textContent = pcScore;
        console.log(playerScore);
        console.log(pcScore);
        if(playerScore===5){
            
            document.querySelectorAll("button").disabled=true;
            if(confirm("YOU WON! Play another game?")===true){
                location.reload();
            }else{
                window.location.href="https://www.theodinproject.com/";
            }
        }else if(pcScore===5){
           
            document.querySelectorAll("button").disabled=true;
            if(confirm("YOU LOOSE! Play another game?")===true){
                location.reload();
            }else{
                window.location.href="https://www.theodinproject.com/";
            }

        }
    });
});





















//the function below repeat the round for 5 times and declare the winner, the loser or if the game ends in Tie
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
    finalMessage="The game is Tie";
    return finalMessage;
}
}*/