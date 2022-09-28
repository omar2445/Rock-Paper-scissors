function getComputerChoice(){
    let random = Math.floor(Math.random()*(3)+1);
    switch (random) {
        case 1:
            return "Rock"
            break;
        case 2:
            return "Paper"
            break;
        case 3:
            return "Scissors"
            break;
    }
}
function playerSelection(){
    let userInpu = prompt("chose Rock Paper or Scissors: ");
    userInpu = userInpu[0].toUpperCase() + userInpu.slice(1).toLowerCase();
    while(userInpu!="Rock" && userInpu!="Paper" && userInpu!="Scissors"){
        let userInpu = prompt("chose Rock Paper or Scissors: ");
        userInpu = userInpu[0].toUpperCase() + userInpu.slice(1).toLowerCase();  
    }
    return userInpu;
}
function playRound(playerSelection, getComputerChoice){
    if((playerSelection == "Paper" && getComputerChoice == "Rock") || (playerSelection == "Rock" && getComputerChoice == "Scissors") || (playerSelection == "Scissors" && getComputerChoice == "Paper")){
        return `you win this  ${playerSelection} bets ${getComputerChoice}`;
    }
    else if(playerSelection == getComputerChoice){
        return "tie";
    }
    else{
        return `you lose ${playerSelection} bets ${getComputerChoice}`;
    }
}
function game(){
    let player = 0;
    let computer = 0;
    for(let i=0; i<3; i++){
        alert(playRound(playerSelection(), getComputerChoice()));
        if(playRound[4] == "w"){
            player++;
            return `you win player: ${player} computer: ${computer}`
        }
        else if(playRound[4] == "l"){
            computer++
            return `you lose player: ${player} computer: ${computer}`
        }
    }
    if(player>computer){
        return `you win player: ${player} computer: ${computer}`;
    }
    else if (player<computer){
        return `you lose player: ${player} computer: ${computer}`;
    }
    else{
        return "it's a tie";
    }
}