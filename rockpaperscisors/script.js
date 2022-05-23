let yourScore = 0;
let compScore = 0;

function play(choose) {
  var choices = ["rock", "paper", "scissors"];
  var rnd = Math.floor(Math.random()*3);

  let compChoice = choices[rnd];
  let result;

  

  if(choose == compChoice){
    result = "Draw!";
    if (compChoice == "rock"){
      document.getElementById("compChoice").className = "fa-solid fa-hand-back-fist";
    }
    if (compChoice == "paper"){
      document.getElementById("compChoice").className = "fa-solid fa-hand";
    }
    if (compChoice == "scissors"){
      document.getElementById("compChoice").className = "fa-solid fa-hand-scissors";
    }
  }
  if(choose == "rock" && compChoice == "scissors"){
    yourScore++;
    document.getElementById("compChoice").className = "fa-solid fa-hand-scissors";
    result = "You win!";
  }
  if(choose == "rock" && compChoice == "paper"){
    compScore++;
    document.getElementById("compChoice").className = "fa-solid fa-hand";
    result = "You lose :(";
  }
  if(choose == "scissors" && compChoice == "rock"){
    compScore++;
    document.getElementById("compChoice").className = "fa-solid fa-hand-back-fist";
    result = "You lose :(";
  } 
  if(choose == "scissors" && compChoice == "paper"){
    yourScore++;
    document.getElementById("compChoice").className = "fa-solid fa-hand";
    result = "You win!";
  }
  if(choose == "paper" && compChoice == "scissors"){
    compScore++;
    document.getElementById("compChoice").className = "fa-solid fa-hand-scissors";
    result = "You lose :(";
  }
  if(choose == "paper" && compChoice == "rock"){
    yourScore++;
    document.getElementById("compChoice").className = "fa-solid fa-hand-back-fist";
    result = "You win!";
  }


  console.log(result);
  document.getElementById('results').style.opacity = 1;
  document.getElementById('results').textContent = result;
  

  document.getElementById('yourScore').textContent = "You: " + yourScore;
  document.getElementById('compScore').textContent = "Computer: " + compScore;

}
