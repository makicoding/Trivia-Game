// jQuery and JavaScript

// Global Variables
var qa = [
    {
        question:   "Who was the lead singer in the Foo Fighters?",
        correct:    "Dave Grohl",
        incorrect1: "Trent Reznor",
        incorrect2: "Scott Weiland",
        incorrect3: "Dexter Holland"   
    },
    {
        question:   "What was the name of the lead character in The Matrix?",
        correct:    "Neo",
        incorrect1: "Trinity",
        incorrect2: "Morpheus",
        incorrect3: "Agent Smith"   
    },
    {
        question:   "What was the name of the TV show in which the characters Ross, Rachel, Phoebe, Monica and Chandler appeared?",
        correct:    "Friends",
        incorrect1: "The Fresh Prince of Bel-Air",
        incorrect2: "Buffy the Vampire Slayer",
        incorrect3: "Dawson's Creek"   
    }
]


var correctCount = 0;
var incorrectCount = 0;
var unansweredCount = 0;

// ----------------------------------------
// Function for Overall Game

var gameReset = function() {


    $(".correctCountContainer").html("Correct answers: " + correctCount);
    $(".incorrectCountContainer").html("Incorrect answers: " + incorrectCount);
    $(".unansweredCountContainer").html("Unanswered: " + unansweredCount);

    game1();

}

// ----------------------------------------
// Function for Game 1

console.log(qa[0].question)
console.log(qa[0].correct)

var game1 = function() {
    
    // Timer
    document.getElementById("countdown").innerHTML = "10 seconds remaining";

    var timeleft = 9;

    var downloadTimer = setInterval(function(){
        document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        timeleft -= 1;

        if(timeleft <= 0){

            document.getElementById("countdown").innerHTML = "Time's Up!";
            $(".commentContainer").html("Correct answer is: " + qa[0].correct);     // change [#] 

            if(timeleft === -3){
                clearInterval(downloadTimer);
                game2();
            }

        }

    }, 1000);    
 
    
    $(".questionContainer").html(qa[0].question);               // change [#]
    $(".possibleAnswerContainer_1").html(qa[0].incorrect1);     // change [#] and incorrect/correct
    $(".possibleAnswerContainer_2").html(qa[0].correct);        // change [#] and incorrect/correct
    $(".possibleAnswerContainer_3").html(qa[0].incorrect2);     // change [#] and incorrect/correct
    $(".possibleAnswerContainer_4").html(qa[0].incorrect3);     // change [#] and incorrect/correct

    $(".possibleAnswerContainer_2").on("click", function() {    // change _#
        $(".commentContainer").html("Correct!");  
        $(".correctCountContainer").html("Correct answers: " + [correctCount + 1]); 
   
    });

    $(".possibleAnswerContainer_1, .possibleAnswerContainer_3, .possibleAnswerContainer_4").on("click", function() {    // change _#
        $(".commentContainer").html("Wrong!" + "<br>" + "Correct answer is: " + qa[0].correct);                         // change [#]
        $(".incorrectCountContainer").html("Incorrect answers: " + [incorrectCount + 1]); 

    });

}

// ----------------------------------------
// Function for Game 2

var game2 = function() {

    $(".commentContainer").html("");     

    // Timer
    document.getElementById("countdown").innerHTML = "10 seconds remaining";

    var timeleft = 9;

    var downloadTimer = setInterval(function(){
        document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        timeleft -= 1;

        if(timeleft <= 0){

            document.getElementById("countdown").innerHTML = "Time's Up!";
            $(".commentContainer").html("Correct answer is: " + qa[1].correct);     // change [#] 

            if(timeleft === -3){
                clearInterval(downloadTimer);
                gameReset();
            }

        }

    }, 1000);    
 
    
    $(".questionContainer").html(qa[1].question);               // change [#]
    $(".possibleAnswerContainer_1").html(qa[1].incorrect1);     // change [#] and incorrect/correct
    $(".possibleAnswerContainer_2").html(qa[1].incorrect3);        // change [#] and incorrect/correct
    $(".possibleAnswerContainer_3").html(qa[1].incorrect2);     // change [#] and incorrect/correct
    $(".possibleAnswerContainer_4").html(qa[1].correct);     // change [#] and incorrect/correct

    $(".possibleAnswerContainer_4").on("click", function() {    // change _#
        $(".commentContainer").html("Correct!");  
        $(".correctCountContainer").html("Correct answers: " + [correctCount + 1]); 
   
    });

    $(".possibleAnswerContainer_1, .possibleAnswerContainer_2, .possibleAnswerContainer_3").on("click", function() {    // change _#
        $(".commentContainer").html("Wrong!" + "<br>" + "Correct answer is: " + qa[1].correct);                         // change [#]
        $(".incorrectCountContainer").html("Incorrect answers: " + [incorrectCount + 1]); 

    });

}





// The following is crucial to have.  It is saying that
// when the ENTIRE document is ready, then the function overallGame will execute
$(document).ready(function() {
    gameReset();
})