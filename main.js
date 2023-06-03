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
    else{
        return win;
    }

    
}

function game()
{
    var score=0;
    var win = "Yayy! You won!!";
    var x;

  for(i=0; i<5; i++){
    playerSelection=prompt("Enter Rock/Paper/Scissors: ");
    x=singleRound(playerSelection,getComputerChoice());
    if(x==win){
        score++;
    }
    
    
  }
  return "Your Score is: "+ score;

}

console.log(game());