//Boulder Parchment Shears game
//played against the computer
    //begin with a function called getComputerChoice 
    //that will randomly return either ‘Rock’, ‘Paper’ or ‘
    //Scissors’. We’ll use this function in the game to 
    //make the computer’s play. Tip: use the console to make 
    //sure this is returning the expected output before moving 
    //to the next step!

let choices = ["BOULDER", "PARCHMENT", "SHEARS"];
game();

function getComputerChoice(){
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

//function that plays a single round
    //The function should take two parameters - the 
    //playerSelection and computerSelection - and then 
    //return a string that declares the winner of the 
    //round like so: "You Lose! Paper beats Rock"
    //Make your function’s playerSelection 
    //parameter case-insensitive (so users can input 
    //rock, ROCK, RocK or any other variation).

function round(playerChoice){
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Your turn! What's your choice? (type boulder, parchment or shears)").toUpperCase();

    if (computerSelection === "BOUDLER" && playerSelection === "BOULDER"){
        return("TIE");
    }   else if (computerSelection === "BOULDER" && playerSelection === "PARCHMENT"){
                return("Parchment beats boulder - YOU WIN!");
            } else if (computerSelection === "BOULDER" && playerSelection  === "SHEARS"){
                return("Boulder beats shears - YOU LOSE!");
            } else if (computerSelection === "PARCHMENT" && playerSelection === "BOULDER"){
                return("Parchment beats boulder - YOU LOSE!");
            } else if (computerSelection === "PARCHMENT" && playerSelection === "PARCHMENT"){
                return("TIE");
            } else if (computerSelection === "PARCHMENT" && playerSelection === "SHEARS"){
                return("Shears beats parchment - YOU WIN!");
            } else if (computerSelection === "SHEARS" && playerSelection === "BOULDER"){
                return("Boulder beats shears - YOU WIN!");
            } else if (computerSelection === "SHEARS" && playerSelection === "PARCHMENT"){
                return("Shears beats parchment - YOU LOSE!");
            } else {
                return("TIE");
            }
        }

//RETURN the results of the function call (not console.log())

//new function called game()
    //Use the previous function inside of this one to play a 5 
    //round game that keeps score and reports a winner or loser 
    //at the end.

    //you can use loops or just call the function 5 times

    //use console.log() to display the results after each round
    //and the winner at the end

    //use prompt() to get input from the user

function game(){
    //call a round, count if the player as won
    //show how many wins they have with emojis if possible, otherwise symbols x & -
    
    let wins = 0;
    let losses = 0;
    let ties = 0;

    for (count = 0; count < 5; count++) {
        let result = round();

        if ((result === "Boulder beats shears - YOU WIN!") || (result === "Parchment beats boulder - YOU WIN!") || (result === "Shears beats parchment - YOU WIN!")){
            console.log(result);
            wins = wins + 1;
        } else if (result === "TIE"){
            console.log(result);
            ties = ties + 1;
        } else {
            console.log(result);
            losses = losses + 1;
        }
    }

    console.log(`Final score: --- WINS: ${wins} --- TIES: ${ties} --- LOSSES: ${losses} ---`);


    if(wins > losses){
        console.log("You are the CHAMPION!");
    } else if (wins === losses){
        console.log("Incredible - you've tied!");
    } else {
        console.log("Dang, looks like you're the loser this time!");
    }

    let again = prompt("Play again? Y/N").toUpperCase();

    if (again === "Y"){
        game();
    } else {
        console.log("Thanks for playing, see you next time!");
    }
}