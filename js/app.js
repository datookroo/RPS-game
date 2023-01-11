let playerPoint = 0;
let computerPoint = 0;

function Play(player, computer) {
    if((player == "rock" && computer == "rock") || (player == "scissor" && computer == "scissor") || (player == "paper" && computer == "paper")){
        console.log("Tie, try again");
    }else if((player == "rock" && computer == "scissor") || (player == "scissor" && computer == "paper") || (player == "paper" && computer == "rock")){
        console.log("you win");
        playerPoint++;
    }else if((player == "scissor" && computer == "rock") || (player == "paper" && computer == "scissor") || (player == "rock" && computer == "paper")){
        console.log("you lose");
        computerPoint++;
    };
};

for(let i = 1; i <= 3; ++i){
    Play(prompt("Enter player"),prompt("Enter cpu"))
};

console.log(`player: ${playerPoint}, computer: ${computerPoint}`)
if(playerPoint > computerPoint){
    console.log("YOU WIN");
}else if(playerPoint < computerPoint){
    console.log("YOU LOSE");
}else {
    console.log("TIE")
};