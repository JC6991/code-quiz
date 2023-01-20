//Selecting elements by id
let startButton = document.querySelector("#start")
let timeEl = document.querySelector("#time");

function startGame() {
    startButton.disabled = true;
    startTimer();
}

let secondsLeft = 10;
timeEl.textContent = secondsLeft;

function startTimer() {
    // Sets interval in variable
    let timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image        
      }
  
    }, 1000);
  }

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);