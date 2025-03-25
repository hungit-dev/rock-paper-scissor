console.log("Hello world");
let humanScore=0;
    computerScore=0;
    

function getComputerChoice(){
    x= Math.floor(Math.random()*3);
    if (x===0){
        return "rock"
    } else if(x===1){
        return "paper"
    }else {
        return "scissors"
    }
}


function getHumanChoice(){
    userInput=prompt("Rock,paper,scissors?")
    return userInput.toLowerCase()
}




function playRound(humanChoice,computerChoice){
    if (humanChoice===computerChoice) {
        console.log("H: "+humanChoice);
        console.log("C: "+computerChoice);
        console.log("Tie!!!");
    } else {
        switch(humanChoice){
            case "rock":
                if(computerChoice==="paper"){
                    console.log("H: "+humanChoice);
        console.log("C: "+computerChoice);
                    console.log("You lose");
                    computerScore++
                }else if(computerChoice==="scissors"){
                    console.log("H: "+humanChoice);
        console.log("C: "+computerChoice);
                    console.log("You Won!!");
                    humanScore++
                }
                break;
            case "paper":
                if(computerChoice==="scissors"){
                    console.log("H: "+humanChoice);
        console.log(computerChoice);
                    console.log("C: "+"You lose");
                    computerScore++
                } else if(computerChoice==="rock"){
                    console.log("H: "+humanChoice);
        console.log("C: "+computerChoice);
                    console.log("You won");
                    humanScore++
                }
                break;
            case "scissors":
                if(computerChoice==="rock"){
                    console.log("H: "+humanChoice);
        console.log("C: "+computerChoice);
                    console.log("You lose");
                    computerScore++
                }else if(computerChoice==="paper"){
                    console.log("H: "+humanChoice);
        console.log("C: "+computerChoice);
                    console.log("You won");
                    humanScore++
                }
                break;
        }

    }
     
}

function PlayGame(){
    const humanSelection=getHumanChoice();
    const computerSelection=getComputerChoice();
playRound(humanSelection,computerSelection);
console.log("Human score: "+humanScore);
console.log("Computer score: "+computerScore);

}
PlayGame();
PlayGame();
PlayGame();
PlayGame();
PlayGame();
function result(){
    if(humanScore>computerScore){
        return "Congratulation!!!You won"
    }else if(humanScore===computerScore){
        return "TIEEEEEE!!!!!"
    } else{
        return "You loseeeee!!!!!"
    }
}
console.log(result());


