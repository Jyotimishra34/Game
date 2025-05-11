let userScore= 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#comp-score");

const genComputerChoice = () => {
    //store choices in an array
    const options = ["rock", "paper", "scissors"];
    //genetate random number
    // Math.floor(Math.random()* 3); // Math.floor will give us a whole number
    const randomIdx = Math.floor(Math.random() * 3);  // storing random number in a variable
    return options[randomIdx]; //returning computer choice (number between 0-2)

};


const drawGame = () => {
    // console.log("game was draw");
    console.log("It is a tie.");
    msg.innerText = "It is a tie. /Play again";
    msg.style.backgroundColor = "#081b31";
};

// function to show winner
const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin){
        userScore++; //incrementing user score
        userScorePara.innerText = userScore;       
         console.log("user Wins!");
        msg.innerText = `user Wins!  user ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        computerScore++;
        computerScorePara.innerText = computerScore;
        console.log("user lose!");
        msg.innerText = `user lose! ${computerChoice} beats user ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


//(choice ) function for computer
const playGame = (userChoice) => {        // taking random choice from computer
    // Standardize userChoice to lowercase
    // userChoice = userChoice.toLowerCase();
 console.log("user Choice =",userChoice ); // printing user choice

  //Generate computer choice -> modular
  const computerChoice = genComputerChoice();
 console.log("computer choice =", computerChoice); // printing computer choice



  //who wins between user and computer
//   let userWins;
  if(userChoice === computerChoice){
    // console.log("It is a tie");
    drawGame();   //function call
  }else {
   let userWin = true;
    if(userChoice === "rock" ){
        //computer choice-  paper, scissors
        userWin = computerChoice === "paper" ? false : true ;    // user wins when computer choice is scissor or 
                                                                   // user loose when computer choice is paper

  }
  else if(userChoice === "paper"){
        //computer choice - scissors, rock
        userWin = computerChoice === "scissors" ? false : true ;    // user wins when computer choice is rock or 
                                                               // user loose when computer choice is scissors
    }

    else{
        // computer choice -  rock, paper
        userWin = computerChoice === "rock" ? false : true;  // user wins when computer choice is paper or 
                                                               // user loose when computer choice is rock
    }


  // showing result
  showWinner(userWin, userChoice, computerChoice);  // function call
  }
};


choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",() => {
        // we can access id of each div
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        //call playGame and pass userChoice
        playGame(userChoice);
    });
});
