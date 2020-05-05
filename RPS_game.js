function getUserChoice(userInput) {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput
  } else {
    console.log('Error, please type: rock, paper or scissors');
  }
}    
 
function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}



const determineWinner = (userChoice, computerChoice) => {
  if (userChoice == computerChoice) {
    return "The game is a tie";
  }
  if (userChoice == 'rock') {
    if (computerChoice == 'paper') {
      return "Computer won!";
    } else {
      return "User won!"
    }
  }


  if (userChoice == 'paper') {
    if (computerChoice == 'rock') {
      return "User won!";
    } else {
      return "Computer won!";
    }
  }
  if (userChoice == 'scissors') {
    if (computerChoice == 'rock') {
      return "Computer won!";
    } else {
      return "User won!";
    }
  }
  if (userChoice == 'bomb') {
   return "Congratulations, you won!";
  }
}


function playGame() {
   const userChoice = getUserChoice('bomb');
   console.log('You threw: '+ userChoice);
   const computerChoice = getComputerChoice();
   console.log('Computer threw: ' + computerChoice);

   console.log(determineWinner(userChoice, computerChoice));
}
playGame()