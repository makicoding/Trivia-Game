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

    correctCount = 0;
    incorrectCount = 0;
    unansweredCount = 0;

    $(".correctCountContainer").html("Correct answers: " + correctCount);
    $(".incorrectCountContainer").html("Incorrect answers: " + incorrectCount);
    $(".unansweredCountContainer").html("Unanswered: " + unansweredCount);

    $(".correctCommentContainer").html("");
    $(".incorrectCommentContainer").html("");

    $(".gameResetButton").hide();

    game1();

}

// ----------------------------------------
// Function for Game 1

console.log(qa[0].question)
console.log(qa[0].correct)

var game1 = function() {        // change #

    // Show Counter
    // Empty Correct Comment Container
    // Empty Incorrect Comment Container
    // Show / hide certain Possible Answer Buttons
    $("#countdown").show();
    $(".correctCommentContainer").html("");
    $(".incorrectCommentContainer").html("");

    $(".G1").show();    // show / hide
    $(".G2").hide();    // show / hide
    $(".G3").hide();    // show / hide
    

    // Show Questions and Possible Answers
    $(".questionContainer").html(qa[0].question);               // change [#]
    $(".possibleAnswerButton_01").html(qa[0].incorrect1);     // change [#] and incorrect/correct
    $(".possibleAnswerButton_02").html(qa[0].correct);        // change [#] and incorrect/correct
    $(".possibleAnswerButton_03").html(qa[0].incorrect2);     // change [#] and incorrect/correct
    $(".possibleAnswerButton_04").html(qa[0].incorrect3);     // change [#] and incorrect/correct


    // Timer
    document.getElementById("countdown").innerHTML = "10 seconds remaining";

    var timeLeft = 9;

    var downloadTimer = setInterval(function(){
        document.getElementById("countdown").innerHTML = timeLeft + " seconds remaining";
        timeLeft -= 1;      // timer goes down by 1 for each interval


        // When the user clicks the correct answer
        $(".possibleAnswerButton_02").on("click", function() {    // change _#
            correctCount++;
            $(".correctCountContainer").html("Correct answers: " + correctCount); 
            $(".correctCommentContainer").html("Correct!");  
            timeLeft = 0;

            if(timeLeft <= 0){
                $("#countdown").hide();
                $(".incorrectCommentContainer").hide();
            }

        });


        // When the user clicks the incorrect answer
        $(".possibleAnswerButton_01, .possibleAnswerButton_03, .possibleAnswerButton_04").on("click", function() {    // change _#
            incorrectCount++;
            $(".incorrectCountContainer").html("Incorrect answers: " + incorrectCount); 
            $(".incorrectCommentContainer").html("Correct answer is: " + qa[0].correct);                         // change [#]
            timeLeft = 0;

            if(timeLeft <= 0){
                $("#countdown").hide();
            }

        });


        // If timeLeft is equal to zero
        if(timeLeft === 0) {
        unansweredCount++;
        $(".unansweredCountContainer").html("Unanswered: " + unansweredCount); 
        }
        

        // If timeLeft is less than or equal to zero
        if(timeLeft <= -1){
            document.getElementById("countdown").innerHTML = "Time's up!";
            $(".incorrectCommentContainer").html("Correct answer is: " + qa[0].correct);     // change [#] 

        }

        
        // If timeLeft is equal to -3
        if(timeLeft === -3){
            clearInterval(downloadTimer);
            //game2();
        }

    }, 1000);    
     
}

// ----------------------------------------
// Function for Game 2



// ----------------------------------------
// Function for Game 3






// The following is crucial to have.  It is saying that
// when the ENTIRE document is ready, then the function overallGame will execute
$(document).ready(function() {
    gameReset();
})