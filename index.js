function getUserChoice(userChoice){
  userChoice = userChoice.toLowerCase();
   if (userChoice === 'paper' || userChoice ==='rock' || userChoice ==='scissors' || userChoice ==='bomba'){
   return userChoice
 };
};//chcecking the user input if it is rock,paper or scissors. adding the secret cheat code "bomba" that always win


let getcomputerChoice = (computerChoice) => {
  let randomnumber = Math.floor(Math.random() * 3);
  if (randomnumber === 0) {
    return "paper";
  } else if (randomnumber === 1) {
    return "scissors";
  } else if (randomnumber === 2) {
    return "rock";
  }
};//getting the computer choice by random number from 0 to 2 and assing it to a value

const determinateWinner= (userChoice, computerChoice) =>{
  if(userChoice===computerChoice){
    return 'this game is a tie!';
  }
  if(userChoice==='rock'){
    if(computerChoice==='paper'){
      return 'sorry, computer won!';
    }else {
      return 'congrats, you won!';
    }
  }
  if(userChoice==='paper'){
    if(computerChoice==='scissors'){
      return 'sorry, computer won!';
    }else{
      return 'congrats, you won!';
    }
  }
  if(userChoice==='scissors'){
    if(computerChoice==='rock'){
      return 'sorry, computer won!'
    }else{
      return'congrats, you won!';
    }
  }
};//Compering the choices and detarminating a winner 


function Play() {
  let computerChoice = getcomputerChoice();
  let userChoice = UserInput.value.toLowerCase();
  console.log(`your choice:${userChoice}`);
  console.log(`computer choice:${computerChoice}`);
  wynik.innerHTML=determinateWinner(userChoice, computerChoice)
}//starting the program and displaying the results


