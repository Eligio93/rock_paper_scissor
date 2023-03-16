let pcchoice= ["Rock","Paper","Scissor"];



function getComputerChoice(pcchoice){
    return pcchoice[Math.floor(Math.random()*pcchoice.length)];
}

console.log(getComputerChoice(pcchoice));