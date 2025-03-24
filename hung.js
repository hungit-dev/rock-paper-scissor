

let humanScore=0;
    computerScore=0;
let humanSelection= '';
    computerSelection="";
    matchResult="";
    
function getComputerChoice(max) {
    const random= Math.floor(Math.random()*max);
    if(random===0){
        computerSelection="rock";
        console.log(" computer:rock");
    }
    else if(random===1){
        computerSelection="rock";
        console.log("computer:papper");
    }
    else{ 
        computerSelection="scissors";
        console.log("computer:scissors");  
    }
}
getComputerChoice(3);

  
function getHumanChoice(){
    const userInput=prompt("Rock,papper,scissors?");
    if(userInput.toLowerCase()==="scissors"){
        humanSelection="scissors";
        console.log("Human choice:scissors");
    } else if(userInput.toLowerCase()==="rock"){
        humanSelection="rock";
        console.log("Human choice:rock");
    } else if(userInput.toLowerCase()==="papper"){
        humanSelection="papper";
        console.log("Human choice: papper");
    }
  
}
  

getHumanChoice(); 

function playround(){
    if (humanSelection==="rock" && computerSelection==="papper"){
        console.log("You lose");
        computerScore++;
    } else if (humanSelection==="rock" && computerSelection==="scissors"){
        console.log("You win");
        humanScore++;
    }else  if (humanSelection==="rock" && computerSelection==="rock"){
        console.log("tie");
    }else if (humanSelection==="papper" && computerSelection==="scissors"){
        console.log("you lose");
        computerScore++;
    }else if(humanSelection==="papper"&& computerSelection==="rock"){
        console.log("you win");
        humanScore++;
    }else if( humanSelection==="papper" && computerSelection==="papper"){
        console.log("tie");
    } else if(humanSelection==="scissors"&& computerSelection==="papper"){
        console.log("you win");
        humanScore++;
    } else if( humanSelection==="scissors"&& computerSelection==="rock"){
        console.log("you lose");
        computerScore++;
    } else if(humanSelection==="scissors"&& computerSelection==="scissors"){
        console.log("tie");
    }

}
playround();
console.log("human point:"+humanScore);
console.log("computer point"+computerScore);

function playGame(){
    getHumanChoice();
    getComputerChoice(3);
    playround();
    console.log("human point:"+humanScore);
    console.log("computer point"+computerScore);

    getHumanChoice();
    getComputerChoice(3);
    playround();
    console.log("human point:"+humanScore);
    console.log("computer point"+computerScore);

    getHumanChoice();
    getComputerChoice(3);
    playround();
    console.log("human point:"+humanScore);
    console.log("computer point"+computerScore);
    getHumanChoice();
    getComputerChoice(3);
    playround();
    console.log("human point:"+humanScore);
    console.log("computer point"+computerScore);

}
playGame();
function result(){
    if(humanScore>computerScore){
        console.log("you won!!!")
    }
    else if(humanScore<computerScore){
        console.log("You lost!!!")
    }else {
        console.log("TIE!!")
    }
}
result();


