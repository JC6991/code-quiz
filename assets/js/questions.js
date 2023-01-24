let quizQuestions = [
    {
        question:   "What file extension does a javascript file have?",

        answers: {
             one: ".xml",
             two: ".js",
             three: ".html",
             four: ".java"
        },               
        correctOption:  ".js"        
    },
    {
        question:   "Which of the following is not a data type?",

        answers: {
            one: "Boolean",
            two: "Object",
            three: "Var",
            four: "Null"
        },
        
        correctOption:  "Var"        
    },
    {
        question:   "The condition in an if/else statement is enclosed within.",

        answers: {
            one: "Parenthesis",
            two: "Curly brackets",
            three: "Angular brackets",
            four: "Quotation marks"
        },
        
        correctOption:  "Parenthesis"        
    },
    {
        question:   "Which of the following is correct about JavaScript?",

        answers: {
            one: "JavaScript is an Object-Based language",
            two: "JavaScript is an Object-Oriented language",
            three: "JavaScript is a High-level language",
            four: "JavaScript is Assembly-language"
        },
        
        correctOption:  "JavaScript is an Object-Based language"        
    },
    {
        question:   "Arrays in JavaScript are defined by which of the following statements?",

        answers: {
            one: "It is an ordered list of functions",
            two: "It is an ordered list of string",
            three: "It is an ordered list of objects",
            four: "It is an ordered list of values"
        },
        
        correctOption:  "It is an ordered list of values"        
    },
    {
        question:   "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",

        answers: {
            one: "Position",
            two: "Location",
            three: "Window",
            four: "Door"
        },
        
        correctOption:  "Window"        
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

// function questionOne() {
//     let qOne = quizQuestions[0].question;
//     console.log(qOne);
//     return qOne;
// }