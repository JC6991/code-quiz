let quizQuestions = [
    {
        question:   "What file extension does a javascript file have?",

        answers: {
            one: ".xml",
            two: ".js",
            three: ".html",
            four: "java"
        },
        
        correctOption:  "two"        
    },
    {
        question:   "Question 2?",

        answers: {
            one: ".xml",
            two: "js",
            three: ".html",
            four: "java"
        },
        
        correctOption:  "2."        
    },
    {
        question:   "Question 3?",

        answers: {
            one: ".xml",
            two: "js",
            three: ".html",
            four: "java"
        },
        
        correctOption:  "2."        
    },
    {
        question:   "Question 4?",

        answers: {
            one: ".xml",
            two: "js",
            three: ".html",
            four: "java"
        },
        
        correctOption:  "2."        
    }
]

// function randomQuestion() {
//     for(let i = 0; i < 2; i++) {

//         let randomIndex = Math.floor(Math.random() * quizQuestions.length);    
//         quizQuestions[randomIndex][Math.floor((Math.random() * (quizQuestions[randomIndex].length)))];
//         // console.log("quizQuestions[randomIndex]: " + quizQuestions[randomIndex].question);

//         const quizQuestions2 = quizQuestions.splice([randomIndex], 1);
//     }

//     return;
//   }

function questionOne() {
    let qOne = quizQuestions[0].question;
    console.log(qOne);
    return qOne;
}