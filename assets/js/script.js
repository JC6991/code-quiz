//Selecting elements by id
const startButton = document.querySelector("#start");
let timeEl = document.querySelector("#time");
const startScreen = document.querySelector("#start-screen");
let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
const questions = document.querySelector("#questions")

function startGame() {
    startButton.disabled = true;
    startTimer();
    startQuiz();
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
            
      }
  
    }, 1000);
  }

  function startQuiz() {
    startScreen.remove();
    document.getElementById('questions').style.display='block'; 
           
    questionTitle.textContent = questionOne();
    // document.body.append(questionTitle);

    // Create ordered list element
    const olEl = document.createElement("ol")
    
    // Create list items
    let liEl1 = document.createElement("li");
    let liEl2 = document.createElement("li");
    let liEl3 = document.createElement("li");
    let liEl4 = document.createElement("li");

    // add content for list items
    liEl1.textContent = quizQuestions[0].answers.one;
    liEl2.textContent = quizQuestions[0].answers.two;
    liEl3.textContent = quizQuestions[0].answers.three;
    liEl4.textContent = quizQuestions[0].answers.four;

    // append ol element choices id
    choices.appendChild(olEl);

    // append list items to ordered list element
    olEl.appendChild(liEl1);
    olEl.appendChild(liEl2);
    olEl.appendChild(liEl3);
    olEl.appendChild(liEl4);

    // Add styling to list element
// olEl.setAttribute("style", "background:#333333; padding:20px;");
// // Add styling to list items
// liEl1.setAttribute("style", " color:white; background: #666666; padding: 5px; margin-left: 35px;");
// liEl2.setAttribute("style", " color:white; background: #777777; padding: 5px; margin-left: 35px;");
// liEl3.setAttribute("style", " color:white; background: #888888; padding: 5px; margin-left: 35px;");
// liEl4.setAttribute("style", " color:white; background: #999999; padding: 5px; margin-left: 35px;");


    // let ansLength = Object.keys(quizQuestions[0].answers)    
    // for(i = 0; i < ansLength; i++) {
    //   let liEl1 = document.createElement("li")
    // }
    
  }

// Event listener to call startGame function when startButton is clicked
startButton.addEventListener("click", startGame);