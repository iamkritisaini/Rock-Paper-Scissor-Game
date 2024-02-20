let score= JSON.parse(localStorage.getItem('score')) ||  {
  wins:0,
  losses:0,
  ties:0
};

 updatescoreelement();
/*
if(!score){
score = {
  wins:0,
  losses:0,
  ties:0
};
}*/

function playgame(playermove) {
  const computerMove = pickcomputerMove();
  let result = '';

  if (playermove === 'scissor') {
      if (computerMove === 'rock') {
          result = 'you lose.';
      } else if (computerMove === 'paper') {
          result = 'you win.';
      } else if (computerMove === 'scissor') {
          result = 'tie.';
      }
  } else if (playermove === 'paper') {
      if (computerMove === 'rock') {
          result = 'You Win.';
      } else if (computerMove === 'paper') {
          result = 'Tie.';
      } else if (computerMove === 'scissor') {
          result = 'You lose.';
      }
  } else if (playermove === 'rock') {
      if (computerMove === 'rock') {
          result = 'Tie.';
      } else if (computerMove === 'paper') {
          result = 'you lose.';
      } else if (computerMove === 'scissor') {
          result = 'you win.';
      }
  } 

  if (result === 'you win.') {
      score.wins += 1;
  } else if (result === 'you lose.') {
      score.losses += 1;
  } else if (result === 'Tie.') {
      score.ties += 1;
  }



  localStorage.setItem('score',JSON.stringify(score));

  updatescoreelement();

  document.querySelector('.js-result').innerHTML = result;
  
  document.querySelector('.js-moves').innerHTML=`  You
<img src="${playermove}-emoji.png"
class="move-icon">

<img src="${computerMove}-emoji.png"
class="move-icon">
Computer`;
}


function updatescoreelement(){
  document.querySelector('.js-score')
    .innerHTML=`Wins: ${score.wins}, Losses: ${score.  losses}, Ties: ${score.ties}`;
}

function pickcomputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissor';
  }
  return computerMove;
}