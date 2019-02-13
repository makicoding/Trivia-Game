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


//var correctCount = 0;
//var incorrectCount = 0;
//var unansweredCount = 0;

// ----------------------------------------
// Function for Overall Game

var gameReset = function() {

    //$(".correctCountContainer").html("Correct answers: " + correctCount);
    //$(".incorrectCountContainer").html("Incorrect answers: " + incorrectCount);
    //$(".unansweredCountContainer").html("Unanswered: " + unansweredCount);

    $(".correctCommentContainer").html("");
    $(".incorrectCommentContainer").html("");

    game1();

}

// ----------------------------------------
// Function for Game 1

console.log(qa[0].question)
console.log(qa[0].correct)

var game1 = function() {

    // Show Counter
    // Empty Correct Container
    // Empty Incorrect Comment Container
    // Show / hide certain Possible Answer Containers
    $("#countdown").show();
    $(".correctCommentContainer").html("");
    $(".incorrectCommentContainer").html("");

    $(".possibleAnswerContainer_01").show();    // show / hide
    $(".possibleAnswerContainer_02").show();    // show / hide
    $(".possibleAnswerContainer_03").show();    // show / hide
    $(".possibleAnswerContainer_04").show();    // show / hide

    $(".possibleAnswerContainer_05").hide();    // show / hide
    $(".possibleAnswerContainer_06").hide();    // show / hide
    $(".possibleAnswerContainer_07").hide();    // show / hide
    $(".possibleAnswerContainer_08").hide();    // show / hide
    

    // Timer
    document.getElementById("countdown").innerHTML = "10 seconds remaining";

    var timeLeft = 9;

    var downloadTimer = setInterval(function(){
        document.getElementById("countdown").innerHTML = timeLeft + " seconds remaining";
        timeLeft -= 1;

        if(timeLeft <= 0){

            document.getElementById("countdown").innerHTML = "Time's up!";
            $(".incorrectCommentContainer").html("Correct answer is: " + qa[0].correct);     // change [#] 

            if(timeLeft === -3){
                clearInterval(downloadTimer);
                game2();
            }

        }

    }, 1000);    
 
    
    $(".questionContainer").html(qa[0].question);               // change [#]
    $(".possibleAnswerContainer_01").html(qa[0].incorrect1);     // change [#] and incorrect/correct
    $(".possibleAnswerContainer_02").html(qa[0].correct);        // change [#] and incorrect/correct
    $(".possibleAnswerContainer_03").html(qa[0].incorrect2);     // change [#] and incorrect/correct
    $(".possibleAnswerContainer_04").html(qa[0].incorrect3);     // change [#] and incorrect/correct

    // When the user clicks the correct answer
    $(".possibleAnswerContainer_02").on("click", function() {    // change _#
        //$(".correctCountContainer").html("Correct answers: " + [correctCount + 1]); 
        $(".correctCommentContainer").html("Correct!");  
   
        timeLeft = 0;
        if(timeLeft <= 0){
            $("#countdown").hide();
            $(".incorrectCommentContainer").hide();
        }

    });

    // When the user clicks the incorrect answer
    $(".possibleAnswerContainer_01, .possibleAnswerContainer_03, .possibleAnswerContainer_04").on("click", function() {    // change _#
        //$(".incorrectCountContainer").html("Incorrect answers: " + [incorrectCount + 1]); 
        $(".incorrectCommentContainer").html("Correct answer is: " + qa[0].correct);                         // change [#]

        timeLeft = 0;
        if(timeLeft <= 0){
            $("#countdown").hide();
        }

    });

}

// ----------------------------------------
// Function for Game 2

var game2 = function() {

    // Show Counter
    // Empty Correct Container
    // Empty Incorrect Comment Container
    // Show / hide certain Possible Answer Containers
    $("#countdown").show();
    $(".correctCommentContainer").html("");
    $(".incorrectCommentContainer").html("");

    $(".possibleAnswerContainer_01").hide();    // show / hide
    $(".possibleAnswerContainer_02").hide();    // show / hide
    $(".possibleAnswerContainer_03").hide();    // show / hide
    $(".possibleAnswerContainer_04").hide();    // show / hide

    $(".possibleAnswerContainer_05").show();    // show / hide
    $(".possibleAnswerContainer_06").show();    // show / hide
    $(".possibleAnswerContainer_07").show();    // show / hide
    $(".possibleAnswerContainer_08").show();    // show / hide
    
    
    // Timer
    document.getElementById("countdown").innerHTML = "10 seconds remaining";

    var timeLeft = 9;

    var downloadTimer = setInterval(function(){
        document.getElementById("countdown").innerHTML = timeLeft + " seconds remaining";
        timeLeft -= 1;

        if(timeLeft <= 0){

            document.getElementById("countdown").innerHTML = "Time's up!";
            $(".incorrectCommentContainer").html("Correct answer is: " + qa[1].correct);     // change [#] 

            if(timeLeft === -3){
                clearInterval(downloadTimer);
                // display play again button here 
                // once pressed, game goes back to the start. Or refreshes page
                // gameReset();
            }

        }

    }, 1000);    
 
    
    $(".questionContainer").html(qa[1].question);               // change [#]
    $(".possibleAnswerContainer_05").html(qa[1].incorrect1);     // change [#] and incorrect/correct
    $(".possibleAnswerContainer_06").html(qa[1].incorrect2);        // change [#] and incorrect/correct
    $(".possibleAnswerContainer_07").html(qa[1].incorrect3);     // change [#] and incorrect/correct
    $(".possibleAnswerContainer_08").html(qa[1].correct);     // change [#] and incorrect/correct

    // When the user clicks the correct answer    
    $(".possibleAnswerContainer_08").on("click", function() {    // change _#
        //$(".correctCountContainer").html("Correct answers: " + [correctCount + 1]); 
        $(".correctCommentContainer").html("Correct!");  
   
        timeLeft = 0;
        if(timeLeft <= 0){
            $("#countdown").hide();
            $(".incorrectCommentContainer").hide();
        }

    });

    // When the user clicks the incorrect answer
    $(".possibleAnswerContainer_05, .possibleAnswerContainer_06, .possibleAnswerContainer_07").on("click", function() {    // change _#
        //$(".incorrectCountContainer").html("Incorrect answers: " + [incorrectCount + 1]); 
        $(".incorrectCommentContainer").html("Correct answer is: " + qa[1].correct);                         // change [#]

        timeLeft = 0;
        if(timeLeft <= 0){
            $("#countdown").hide();
        }

    });

}





// The following is crucial to have.  It is saying that
// when the ENTIRE document is ready, then the function overallGame will execute
$(document).ready(function() {
    gameReset();
})