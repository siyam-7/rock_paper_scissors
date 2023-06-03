function getComputerChoice(){
    let rock = "ROCK";
    let paper = "PAPER";
    let scissors = "SCISSORS";

    let items = [rock,paper,scissors];

    let choice = Math.floor(Math.random() * items.length);
    return items[choice];

}

function singleRound(playerSelection,computerSelection){
    player = playerSelection.toUpperCase();
    let win = "Yayy! You won!!";

    if(player == "ROCK" && computerSelection == "PAPER" ){
        return "You Lose! Paper beats Rock";
    }
    else if(player == "PAPER" && computerSelection == "SCISSORS"){
        return "You Lose! Scissors beats Paper";
    }
    else if(player == "SCISSORS" && computerSelection == "ROCK"){
        return "You Lose! Rock beats Scissors";
    }
    else if(player == computerSelection){
        return "Try Again";
    }
    else if(player !== 'ROCK' && player !== 'PAPER' && player !=='SCISSORS' ){
        return "Invalid Input!!";
    }
    else{
        return win;
    }

    
}

function game()
{
    var score=0;
    var cscore=0;
    var win = "Yayy! You won!!";

  for(i=0; i<5; i++){
    playerSelection=prompt("Enter Rock/Paper/Scissors: ");
    x=singleRound(playerSelection,getComputerChoice());
    if(x==win){
        score++;
    }
    else if(x=="Try Again"){
        score=score;
        cscore=cscore;
    }
    else if(x =="Invalid Input!!"){
        score=score;
        cscore=cscore;
    }
    
  
    else{
        cscore++;
    }

    console.log(x);
    
  }
  var result ="";
  if(score>cscore){
    result = "YOU WON!! ";
  }
  else{
    result = "YOU LOST! ";
  }
  return result + "Your Score is: "+ score +". Computer's Score is " + cscore;

}

console.log(game());