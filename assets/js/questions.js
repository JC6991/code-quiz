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
        question:   "Question 2?",

        answers: {
            one: "Q2A",
            two: "Q2B",
            three: "Q2C",
            four: "Q2D"
        },
        
        correctOption:  "Q2D"        
    },
    {
        question:   "Question 3?",

        answers: {
            one: "Q3A",
            two: "Q3B",
            three: "Q3C",
            four: "Q3D"
        },
        
        correctOption:  "Q3C"        
    },
    {
        question:   "Question 4?",

        answers: {
            one: "Q4A",
            two: "Q4B",
            three: "Q4C",
            four: "Q4D"
        },
        
        correctOption:  "Q4A"        
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