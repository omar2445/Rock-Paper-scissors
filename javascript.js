//the main div
const container = document.querySelector('cont');
//the texte div
const div1 = document.getElementById('div1');
//computer counter
const computer = document.getElementById('computer');
//player counter
const player = document.getElementById('player')
//count
function resetScore(){
    computer.innerHTML=0;
    player.innerHTML = 0;
}
//rock btn
const rock = document.getElementById("Rock");
rock.addEventListener('click',()=>{
    if(getComputerChoise() === "Paper" ){
        div1.textContent = "you lost";
        computer.innerHTML = num1();
    }
    else if(getComputerChoise() === "Rock"){
        div1.textContent =  "its a tie";
        i++;
    }
    else{
        div1.textContent ="you win";
        player.innerHTML = num2();
    }
});
//paper btn
const paper = document.getElementById("Paper");
paper.addEventListener('click',()=>{
    if(getComputerChoise() === "Scissor" ){
        div1.textContent = "you lost";
        computer.innerHTML = num1();
    }
    else if(getComputerChoise() === "Paper"){
        div1.textContent =  "its a tie";
        i++;
    }
    else{
        div1.textContent =  "you win";
        player.innerHTML = num2();
    }
});
const scissor = document.getElementById("Scis");
scissor.addEventListener('click',()=>{
    if(getComputerChoise() === "Rock" ){
        div1.textContent = "you lost";
        computer.innerHTML = num1();
    }
    else if(getComputerChoise() === "Scissor"){
        div1.textContent =  "its a tie";
        i++;
    }
    else{
        div1.textContent =  "you win ";
        player.innerHTML = num2();
    }
});

function getComputerChoise(){
    let chois = Math.floor(Math.random()*3+1);
    if(chois == 1){
        return "Rock";
    }
    else if(chois == 2){
        return "Paper";
    }
    else{
        return "Scissor";
    }
}

let num1 =  (function(){
    let num = 0;
    return function() {return num+=1;};
})();
let num2 =  (function(){
    let num = 0;
    return function() {return num+=1;};
})();