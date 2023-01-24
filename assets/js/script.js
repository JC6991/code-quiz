//Selecting elements by id
const startButton = document.querySelector("#start");
let timeEl = document.querySelector("#time");
const startScreen = document.querySelector("#start-screen");
let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
const questions = document.querySelector("#questions");
const endScreen = document.querySelector("#end-screen");
const finalScore = document.querySelector("#final-score")
const initials = document.querySelector("#initials");
const submitButton = document.querySelector("#submit");


let quizQuestionsIndex = 0;
let secondsLeft = 30;
let correctAnswer = quizQuestions[quizQuestionsIndex].correctOption;
let score = 0;
let answersArray = Object.values(quizQuestions[quizQuestionsIndex].answers);
let lastIndex = quizQuestions.length - 1;
console.log(lastIndex);

// Create ordered list element and list array
const olEl = document.createElement("ol")
const liEl = [];    

// append ol element choices id
choices.appendChild(olEl);
olEl.setAttribute("id", "list");
    

function startGame() {
    startButton.disabled = true;
    startScreen.remove();
    questions.classList.toggle("hide");
    // console.log(questions.classList.toggle("hide"));
    startTimer();
    startQuiz();
}

function startTimer() {
    // Sets interval in variable
    let timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        endGame();
            
      }
  
    }, 1000);
  }

function startQuiz() { 

  if(quizQuestionsIndex <= lastIndex) {
    questionTitle.textContent = quizQuestions[quizQuestionsIndex].question;
    console.log(questionTitle.textContent);
  }
  // document.getElementById('questions').style.display='block';  
  
  if(olEl.childElementCount === 4) {
    document.getElementById("list").innerHTML = "";
    console.log("cleared ol");
  }
        
  // Create list items
  for(let i = 0; i < answersArray.length; i++) {       

    liEl[i] = document.createElement("li");
    liEl[i].textContent = answersArray[i];      
    olEl.appendChild(liEl[i]);             
                
    // liEl[i].addEventListener("click", clickAnswer);
    liEl[i].addEventListener("click", clickAnswer);
  }
 }      
   

  function clickAnswer(event) {
    if(event.target.innerText === correctAnswer) {        
      // increment quizQuestionsIndex by 1
      quizQuestionsIndex++;    
      // increment score by 1  
      score++;
      if(quizQuestionsIndex > lastIndex) {
        endGame();
      }
      if(quizQuestionsIndex <= lastIndex) {
        answersArray = Object.values(quizQuestions[quizQuestionsIndex].answers);      
        correctAnswer = quizQuestions[quizQuestionsIndex].correctOption;
        startQuiz();
      }
    }
    else if(event.target.innerText != correctAnswer) {
      quizQuestionsIndex++;
      secondsLeft -= 5;      
      if(quizQuestionsIndex > lastIndex) {
        endGame();
      }
      if(quizQuestionsIndex <= lastIndex) {
        answersArray = Object.values(quizQuestions[quizQuestionsIndex].answers);
        correctAnswer = quizQuestions[quizQuestionsIndex].correctOption;
        startQuiz();
      }
      
    }
  }

function endGame() {
  questions.remove();     
  // endScreen.classList.toggle("hide");
  document.getElementById('end-screen').style.display='block';  
  finalScore.textContent = score;    
  }  
  
function saveScore(event) {
  // event.preventDefault();
  // disable submit button once clicked
  submitButton.disabled = true;

  let letterChar = /[a-zA-Z]/;
  
  // console.log(typeof initials.value);

  // let currentUser = initials.value;
  // console.log(currentUser);
  // currentUser.match(letterChar);

  // console.log(initials.value.match(letterChar));

  if(initials.value === "") {
    // if user doesn't input initials, return early
    alert("Please enter your initials")
    submitButton.disabled = false;
    return;
  }else if(!initials.value.match(letterChar)){
    // if user doesn't input letter characters, return early
    alert("Please enter alphabetical characters (A-Z)")
    submitButton.disabled = false;
    return;
  }else{
    let userInitials = initials.value.toUpperCase();

    let newEntry = {
    initials: userInitials,
    playerScore: score
  }

  let highScores = [];
  
  if(localStorage.getItem(highScores) === null) {

        highScores.push(newEntry);

        localStorage.setItem("highScores", JSON.stringify(newEntry)) 
        }
  } 

  

  // console.log(newEntry);


}
  
submitButton.addEventListener("click", saveScore)

  

// Event listener to call startGame function when startButton is clicked
startButton.addEventListener("click", startGame);