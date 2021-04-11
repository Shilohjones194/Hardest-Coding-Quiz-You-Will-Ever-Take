/////////////////////     Criteria-Instructions    ///////////////////////////
//When 'Click' start Quiz, prompt the first question and start countdown.
//Once answered, you are prompted with another question
//--If you are wrong(false) time is subtracted from the timer/clock.
//When all questions are answered OR when the timer/clock reaches 0, then prompt Game over SCreen.
//In game over screen, list the score, and have box to input your initials that saves to the local drive.

/////////////////////////////////////Structure-Layers-steps//////////////////////////////////////
// 1: List Variables
//1.2: List Variable Questions in an array [], with correct answers under/Use for functions later.
//-Variables should include the 1)Questions,  2)High-score List,  3)Countdown-time-clock, 4)Game over save to local drive?
//1.3: Variables that hold Containers

// 2: forLoop it out
//3:START TIMER FUNCTION needs to start going as soon as its clicked

//4:QUIZ END FUNCTION or FUNCTION save to local storage 





//array of questions objects
var myQuestions = [{
        question: "Question 1/3: What is the worst thing about this bootcamp?",
        answers: {
            a: "TAs",
            b: "Modules",
            c: "Instructor"
        },
        correctAnswer: "b"
    },
    {
        question: "Question 2/3: Do you regret taking this course?",
        answers: {
            a: "yes",
            b: "no",
            c: "Every day of my life"
        },
        correctAnswer: "c"
    },
    {
        question: "Question 3/3: If it wasn't for the TAs, Youtube and Google, do you think you would have failed?",
        answers: {
            a: "Yes",
            b: "No",
            c: "probably",
        },
        correctAnswer: "a"
    },

];

var sekectuibs



//Timer Function

//var timer;
//function timer

