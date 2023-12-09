const rockbutton = document.querySelector('.rock');
const paperbutton = document.querySelector('.paper');
const scissorsbutton = document.querySelector('.scissors');
const resetbutton =document.querySelector('.resetbutton');
const centercontainer = document.querySelector('.center-container')
var cscore=0, score=0, trial=0;



function getComputerChoice(){
    let rock = "ROCK";
    let paper = "PAPER";
    let scissors = "SCISSORS";

    let items = [rock,paper,scissors];

    let choice = Math.floor(Math.random() * items.length);
    return items[choice];

}

function singleRound(playerSelection,computerSelection){
    const outcomeDiv =document.querySelector('.outcome');
    centercontainer.append(outcomeDiv);

    player = playerSelection.toUpperCase();
    let win = "Yayy! You won!!";

    if(player == "ROCK" && computerSelection == "PAPER" ){
        cscore++;
        trial++;
        outcomeDiv.innerText= "You Lose! Paper beats Rock";

    }
    else if(player == "PAPER" && computerSelection == "SCISSORS"){
        cscore++;
        trial++;
        outcomeDiv.innerText="You Lose! Scissors beats Paper";
        }
    else if(player == "SCISSORS" && computerSelection == "ROCK"){
        cscore++;
        trial++;
        outcomeDiv.innerText= "You Lose! Rock beats Scissors";


    }
    else if(player == computerSelection){
        trial++;
        outcomeDiv.innerText="Try again";

    }
    else if(player !== 'ROCK' && player !== 'PAPER' && player !=='SCISSORS' ){
        trial++;
        outcomeDiv.innerText= "Invalid Input";

    }
    else{
        score++;
        trial++;
        outcomeDiv.innerText=win;

    }
    console.log(trial);
    console.log(score);
    

    
}
function checkCount(){
    if(trial<=4){
        return true;
    }
}
function resultAll(){
    if(trial==5){
        trial++;
        const outcomeDiv =document.querySelector('.outcome');
        centercontainer.append(outcomeDiv);
        if(score>cscore){
            result = "YOU WON!! ";
          }
          else if(score==cscore){
            result = "IT'S A TIE! ";
          }
          else{
            result = "YOU LOST!";
          }
        const p = document.createElement('p');
        const resultnode= result + "Your Score is: "+ score +". Computer's Score is " + cscore;
        outcomeDiv.innerHTML += "<p>" + resultnode + "</p>";

        

    }
}


paperbutton.addEventListener('click', function(){
    const computerSelection = getComputerChoice();
    const playerSelection = 'PAPER';
    if (checkCount()){
    singleRound(playerSelection,computerSelection);
    };
    resultAll();
    
});

rockbutton.addEventListener('click', function(){
    const computerSelection = getComputerChoice();
    const playerSelection = 'ROCK';
    if (checkCount()){
    singleRound(playerSelection,computerSelection);
    };
    resultAll();

});

scissorsbutton.addEventListener('click', function(){
    const computerSelection = getComputerChoice();
    const playerSelection = 'SCISSORS';
    if (checkCount()){
    singleRound(playerSelection,computerSelection);
    };
    resultAll();

});

resetbutton.addEventListener('click', function(){
    const outcomeDiv =document.querySelector('.outcome');
    centercontainer.append(outcomeDiv);
    outcomeDiv.innerText= "";
    trial=0;

});

