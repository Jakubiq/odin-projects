let yourScore = 0;
let compScore = 0;

function play(choose) {
  var choices = ["rock", "paper", "scissors"];
  var rnd = Math.floor(Math.random()*3);

  let compChoice = choices[rnd];
  let result;

  

  if(choose == compChoice){
    result = "Draw!";
  }
  if(choose == "rock" && compChoice == "scissors"){
    yourScore++;
    result = "You win!";
  }
  if(choose == "rock" && compChoice == "paper"){
    compScore++;
    result = "You lose :(";
  }
  if(choose == "scissors" && compChoice == "rock"){
    compScore++;
    result = "You lose :(";
  } 
  if(choose == "scissors" && compChoice == "paper"){
    yourScore++;
    result = "You win!";
  }
  if(choose == "paper" && compChoice == "scissors"){
    compScore++;
    result = "You lose :(";
  }
  if(choose == "paper" && compChoice == "rock"){
    yourScore++;
    result = "You win!";
  }


  console.log(result);
  document.getElementById('results').style.opacity = 1;
  document.getElementById('results').textContent = result;
  

  document.getElementById('yourScore').textContent = "You: " + yourScore;
  document.getElementById('compScore').textContent = "Computer: " + compScore;

}
