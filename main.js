const rockbutton = document.querySelector('.rock');
const paperbutton = document.querySelector('.paper');
const scissorsbutton = document.querySelector('.scissors');
const container = document.querySelector('.container')
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
    container.append(outcomeDiv);

    player = playerSelection.toUpperCase();
    let win = "Yayy! You won!!";

    if(player == "ROCK" && computerSelection == "PAPER" ){
        cscore++;
        trial++;
        const p = document.createElement('p');
        p.innerText =  "You Lose! Paper beats Rock";
        outcomeDiv.innerText=p.innerText;

    }
    else if(player == "PAPER" && computerSelection == "SCISSORS"){
        cscore++;
        trial++;
        const p = document.createElement('p');
        p.innerText =  "You Lose! Scissors beats Paper";
        outcomeDiv.innerText=p.innerText;
        }
    else if(player == "SCISSORS" && computerSelection == "ROCK"){
        cscore++;
        trial++;
        const p = document.createElement('p');
        p.innerText =  "You Lose! Rock beats Scissors";
        outcomeDiv.innerText=p.innerText;


    }
    else if(player == computerSelection){
        trial++;
        const p = document.createElement('p');
        p.innerText =  "Try again";
        outcomeDiv.innerText=p.innerText;

    }
    else if(player !== 'ROCK' && player !== 'PAPER' && player !=='SCISSORS' ){
        trial++;
        const p = document.createElement('p');
        p.innerText =  "Invalid Input";
        outcomeDiv.innerText=p.innerText;

    }
    else{
        score++;
        trial++;
        const p = document.createElement('p');
        p.innerText =  win;
        outcomeDiv.innerText=p.innerText;

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
        container.append(outcomeDiv);
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
        p.innerText = resultnode;
        outcomeDiv.appendChild(p);

        

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

