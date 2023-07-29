function getComputerChoice()
{
    let sel=Math.floor(Math.random()*3);
    switch(sel)
    {
        case 0:
           return 'rock';break;
        case 1:
            return 'paper';break;
        case 2:
            return 'scissors';break;
    }
}
function playround(playerSelection, computerSelection)
{
    console.log(computerSelection);
    if(playerSelection==='rock')
    {
        if(computerSelection ==='paper')
        {
            return "you win! rock beats paper";
        }
        else if(computerSelection ==='scissors')
        {
            return "you lose! paper beats rock";
        }
        else{
            return "Tie!";
        }
    }

    else if (playerSelection === 'paper') 
    {
        if (computerSelection === 'rock') {
            return "You win! Paper beats rock.";
        } else if (computerSelection === 'scissors') {
            return "You lose! Scissors beats paper.";
        } else {
            return "Tie!";
        }
    } 
    else if (playerSelection === 'scissors')
    {
        if (computerSelection === 'rock') {
            return "You lose! Rock beats scissors.";
        } else if (computerSelection === 'paper') {
            return "You win! Scissors beats paper.";
        } else {
            return "Tie!";
        }
    } 

    else 
    {
        return "Invalid selection. Please choose 'rock', 'paper', or 'scissors'.";
    }
}

// const playerSelection="rock";
// const computerSelection=getComputerChoice();
// console.log(playround(playerSelection,computerSelection));
function game()
{
    let playerSelection;
    let computerSelection;
    for(let i=0;i<5;i++)
    {
        playerSelection=prompt("Enter your choice:");
        computerSelection=getComputerChoice();
        console.log(playround(playerSelection,computerSelection));
    } 
}
game();