
//continer
const cont = document.getElementById('#cont');
//rock button
const rock = document.getElementById('Rock');
rock.addEventListener('click', ()=> {playRound("Rock",getComputerChoice())});
const paper = document.getElementById('Paper');
paper.addEventListener('click', ()=> {playRound("Paper", getComputerChoice())});
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
/*function playerSelection(){
    let userInpu = prompt("chose Rock Paper or Scissors: ");
    userInpu = userInpu[0].toUpperCase() + userInpu.slice(1).toLowerCase();
    while(userInpu!="Rock" && userInpu!="Paper" && userInpu!="Scissors"){
        let userInpu = prompt("chose Rock Paper or Scissors: ");
        userInpu = userInpu[0].toUpperCase() + userInpu.slice(1).toLowerCase();  
    }
    return userInpu;
}*/
function playRound(playerSelection, ComputerChoice){

    if(playerSelection === "Paper" && ComputerChoic === "Rock"){
        alert(`you win this  ${playerSelection} bets ${ComputerChoice}`);
    }
    else if(playerSelection === "Scissors" && ComputerChoice === "Paper"){
        alert(`you win this  ${playerSelection} bets ${ComputerChoice}`);
    }
    else if(playerSelection === "Rock" && ComputerChoice === "Scissors"){
        alert(`you win this  ${playerSelection} bets ${ComputerChoice}`);
    }
    else if(playerSelection === ComputerChoice){
        alert(`its a tie you bolth chosed  ${playerSelection}`);
    }
    else{
        alert( `you lose ${ComputerChoice} bets ${playerSelection}`);
    }
}
/*function game(){
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
}*/