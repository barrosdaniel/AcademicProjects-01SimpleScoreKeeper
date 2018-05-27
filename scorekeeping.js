//initialise global variables
var player1Score = 0;
var player2Score = 0;
var playingTo = 3;

//initialise counters
updateScorePlayer1();
updateScorePlayer2();
updatePlayingToDisplay();

//update display of score player 1
function updateScorePlayer1(){
  var scorePlayer1 = document.querySelector('#player1Score');
  scorePlayer1.textContent = player1Score;
  if (player1Score === playingTo) {
    scorePlayer1.classList.add('green');
  } else {
    scorePlayer1.classList.remove('green');
  }
}

//update display of score player 2
function updateScorePlayer2(){
  var scoreplayer2 = document.querySelector('#player2Score');
  scoreplayer2.textContent = player2Score;
  if (player2Score === playingTo) {
    scoreplayer2.classList.add('green');
  } else {
    scoreplayer2.classList.remove('green');
  }
}

//reset function
function reset(){
  player1Score = 0;
  player2Score = 0;
  updateScorePlayer1();
  updateScorePlayer2();
}
document.querySelector('#reset').addEventListener('click', reset);

//score player 1 function
document.querySelector('#updateScorePlayer1').addEventListener('click', function(){
    if (player1Score < playingTo && player2Score < playingTo) {
      player1Score += 1;
      updateScorePlayer1();
    }
})

//score player 2 function
document.querySelector('#updateScorePlayer2').addEventListener('click', function(){
    if (player2Score < playingTo && player1Score < playingTo) {
      player2Score += 1;
      updateScorePlayer2();
    }
})

//update display of playingTo
function updatePlayingToDisplay(){
  document.querySelector('#playingTo').textContent = playingTo;
}

// playingTo function
var setNumberOfPlays = document.querySelector('#setNumberOfPlays');
setNumberOfPlays.addEventListener('change', setNumberOfPlaysUpdate);
function setNumberOfPlaysUpdate(){
  var input = document.querySelector('#setNumberOfPlays');
  inputNum = Number(input.value);
  if (inputNum > 1) {
    playingTo = inputNum;
    updatePlayingToDisplay();
    reset();
  } else {
    alert('Unexpected input: Playing to needs to be at least 1.');
  }
}
