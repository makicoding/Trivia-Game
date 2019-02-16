// JavaScript Only
// Numbers that need to be modified for each game are commented on the same line next to the code


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
// Function for Game Start

var gameStart = function() {

    // Hide all Possible Answer Buttons for game
    document.getElementsByClassName("possibleAnswerButton_01")[0].style.display = "none";       
    document.getElementsByClassName("possibleAnswerButton_02")[0].style.display = "none";       
    document.getElementsByClassName("possibleAnswerButton_03")[0].style.display = "none";      
    document.getElementsByClassName("possibleAnswerButton_04")[0].style.display = "none";       

    document.getElementsByClassName("possibleAnswerButton_05")[0].style.display = "none";        
    document.getElementsByClassName("possibleAnswerButton_06")[0].style.display = "none";        
    document.getElementsByClassName("possibleAnswerButton_07")[0].style.display = "none";        
    document.getElementsByClassName("possibleAnswerButton_08")[0].style.display = "none";        

    document.getElementsByClassName("possibleAnswerButton_09")[0].style.display = "none";        
    document.getElementsByClassName("possibleAnswerButton_10")[0].style.display = "none";        
    document.getElementsByClassName("possibleAnswerButton_11")[0].style.display = "none";        
    document.getElementsByClassName("possibleAnswerButton_12")[0].style.display = "none";        


    // Game Start Text
    document.getElementsByClassName("gameStartText")[0].innerHTML = "Hello! You have 10 seconds to answer each question.";   

    // Game Start Button
    document.getElementsByClassName("gameStartButton")[0].innerHTML = "Click here to start game"; 
    document.getElementsByClassName("gameStartButton")[0].addEventListener("click", function() {
        gameReset();

    });

}

// ----------------------------------------
// Function for Game Reset

var gameReset = function() {

    // Hide Game Reset Button 
    document.getElementsByClassName("gameResetButton")[0].style.display = "none";

    // Set Counters to zero
    correctCount = 0;
    incorrectCount = 0;
    unansweredCount = 0;

    // Go to Game 1
    game1();

}


// ----------------------------------------
// Function for Game 1

console.log(qa[0].question)
console.log(qa[0].correct)

var game1 = function() {        // change #

    // Hide Game Start Text and Game Start Button
    document.getElementsByClassName("gameStartText")[0].style.display = "none";
    document.getElementsByClassName("gameStartButton")[0].style.display = "none";


    // Write Counter text and values to document
    document.getElementsByClassName("correctCountContainer")[0].innerHTML = "Correct answers: " + correctCount;
    document.getElementsByClassName("incorrectCountContainer")[0].innerHTML = "Incorrect answers: " + incorrectCount;
    document.getElementsByClassName("unansweredCountContainer")[0].innerHTML = "Unanswered: " + unansweredCount;
    

    // Show Counter
    // Empty Correct Comment Container
    // Empty Incorrect Comment Container
    document.getElementsByClassName("countdown")[0].style.display = "block";
    document.getElementsByClassName("correctCommentContainer")[0].innerHTML = "";
    document.getElementsByClassName("incorrectCommentContainer")[0].innerHTML = "";


    // Show / hide certain Possible Answer Buttons
    document.getElementsByClassName("possibleAnswerButton_01")[0].style.display = "block";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_02")[0].style.display = "block";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_03")[0].style.display = "block";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_04")[0].style.display = "block";       // show / hide

    document.getElementsByClassName("possibleAnswerButton_05")[0].style.display = "none";        // show / hide
    document.getElementsByClassName("possibleAnswerButton_06")[0].style.display = "none";        // show / hide
    document.getElementsByClassName("possibleAnswerButton_07")[0].style.display = "none";        // show / hide
    document.getElementsByClassName("possibleAnswerButton_08")[0].style.display = "none";        // show / hide

    document.getElementsByClassName("possibleAnswerButton_09")[0].style.display = "none";        // show / hide
    document.getElementsByClassName("possibleAnswerButton_10")[0].style.display = "none";        // show / hide
    document.getElementsByClassName("possibleAnswerButton_11")[0].style.display = "none";        // show / hide
    document.getElementsByClassName("possibleAnswerButton_12")[0].style.display = "none";        // show / hide
    

    // Write Questions and Possible Answers
    document.getElementsByClassName("questionContainer")[0].innerHTML = qa[0].question;             // change [#]  
    document.getElementsByClassName("possibleAnswerButton_01")[0].innerHTML = qa[0].incorrect1;     // change [#]       // change incorrect/correct
    document.getElementsByClassName("possibleAnswerButton_02")[0].innerHTML = qa[0].correct;        // change [#]       // change incorrect/correct
    document.getElementsByClassName("possibleAnswerButton_03")[0].innerHTML = qa[0].incorrect2;     // change [#]       // change incorrect/correct
    document.getElementsByClassName("possibleAnswerButton_04")[0].innerHTML = qa[0].incorrect3;     // change [#]       // change incorrect/correct


    // Timer
    document.getElementsByClassName("countdown")[0].innerHTML = "10 seconds remaining";

    var timeLeft = 9;

    // Timer goes down by 1 for each interval
    var downloadTimer = setInterval(function(){
        document.getElementsByClassName("countdown")[0].innerHTML = timeLeft + " seconds remaining";
        timeLeft -= 1;

        // If timeLeft is equal to zero
        if(timeLeft === -1) {
            unansweredCount++;
            document.getElementsByClassName("unansweredCountContainer")[0].innerHTML = "Unanswered: " + unansweredCount;
        }

        // If timeLeft is less than or equal to zero
        if(timeLeft <= -1){
            document.getElementsByClassName("countdown")[0].innerHTML = "Time's up!";
            document.getElementsByClassName("incorrectCommentContainer")[0].innerHTML = "Correct answer is: " + qa[0].correct;    // change [#]

        }

        // If timeLeft is equal to -4, then clear timer and go to next game
        if(timeLeft === -4){
            clearInterval(downloadTimer);
            game2();    // change #
        }  

    }, 1000); 


    // When the user clicks the correct answer
    document.getElementsByClassName("possibleAnswerButton_02")[0].addEventListener("click", function() {    // change _#
        correctCount++;
        document.getElementsByClassName("correctCountContainer")[0].innerHTML = "Correct answers: " + correctCount;
        document.getElementsByClassName("correctCommentContainer")[0].innerHTML = "Correct!";
        timeLeft = -1;

        if(timeLeft <= 0){
            document.getElementsByClassName("countdown")[0].style.display = "none";
            document.getElementsByClassName("incorrectCommentContainer")[0].style.display = "none";
        }

    });


    // When the user clicks incorrect 1 answer
    document.getElementsByClassName("possibleAnswerButton_01")[0].addEventListener("click", function() {    // change _#
        incorrectCount++;
        document.getElementsByClassName("incorrectCountContainer")[0].innerHTML = "Incorrect answers: " + incorrectCount;
        document.getElementsByClassName("incorrectCommentContainer")[0].innerHTML = "Correct answer is: " + qa[0].correct;    // change [#]
        timeLeft = -1;

        if(timeLeft <= 0){
            document.getElementsByClassName("countdown")[0].style.display = "none";
        }

    });


    // When the user clicks incorrect 2 answer
    document.getElementsByClassName("possibleAnswerButton_03")[0].addEventListener("click", function() {    // change _#
        incorrectCount++;
        document.getElementsByClassName("incorrectCountContainer")[0].innerHTML = "Incorrect answers: " + incorrectCount;
        document.getElementsByClassName("incorrectCommentContainer")[0].innerHTML = "Correct answer is: " + qa[0].correct;    // change [#]
        timeLeft = -1;

        if(timeLeft <= 0){
            document.getElementsByClassName("countdown")[0].style.display = "none";
        }

    });


    // When the user clicks incorrect 3 answer
    document.getElementsByClassName("possibleAnswerButton_04")[0].addEventListener("click", function() {    // change _#
        incorrectCount++;
        document.getElementsByClassName("incorrectCountContainer")[0].innerHTML = "Incorrect answers: " + incorrectCount;
        document.getElementsByClassName("incorrectCommentContainer")[0].innerHTML = "Correct answer is: " + qa[0].correct;    // change [#]
        timeLeft = -1;

        if(timeLeft <= 0){
            document.getElementsByClassName("countdown")[0].style.display = "none";
        }

    });
     
}

// ----------------------------------------
// Function for Game 2

var game2 = function() {        // change #

    // Show Counter
    // Show Correct Comment Container
    // Show Incorrect Comment Container
    document.getElementsByClassName("countdown")[0].style.display = "block";
    document.getElementsByClassName("correctCommentContainer")[0].style.display = "block";  
    document.getElementsByClassName("incorrectCommentContainer")[0].style.display = "block";    


    // Empty Correct Comment Container
    // Empty Incorrect Comment Container
    document.getElementsByClassName("correctCommentContainer")[0].innerHTML = "";
    document.getElementsByClassName("incorrectCommentContainer")[0].innerHTML = "";


    // Show / hide certain Possible Answer Buttons
    document.getElementsByClassName("possibleAnswerButton_01")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_02")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_03")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_04")[0].style.display = "none";       // show / hide

    document.getElementsByClassName("possibleAnswerButton_05")[0].style.display = "block";        // show / hide
    document.getElementsByClassName("possibleAnswerButton_06")[0].style.display = "block";        // show / hide
    document.getElementsByClassName("possibleAnswerButton_07")[0].style.display = "block";        // show / hide
    document.getElementsByClassName("possibleAnswerButton_08")[0].style.display = "block";        // show / hide

    document.getElementsByClassName("possibleAnswerButton_09")[0].style.display = "none";        // show / hide
    document.getElementsByClassName("possibleAnswerButton_10")[0].style.display = "none";        // show / hide
    document.getElementsByClassName("possibleAnswerButton_11")[0].style.display = "none";        // show / hide
    document.getElementsByClassName("possibleAnswerButton_12")[0].style.display = "none";        // show / hide
    

    // Write Questions and Possible Answers
    document.getElementsByClassName("questionContainer")[0].innerHTML = qa[1].question;             // change [#]  
    document.getElementsByClassName("possibleAnswerButton_05")[0].innerHTML = qa[1].incorrect1;     // change [#]       // change incorrect/correct
    document.getElementsByClassName("possibleAnswerButton_06")[0].innerHTML = qa[1].incorrect2;     // change [#]       // change incorrect/correct
    document.getElementsByClassName("possibleAnswerButton_07")[0].innerHTML = qa[1].incorrect3;     // change [#]       // change incorrect/correct
    document.getElementsByClassName("possibleAnswerButton_08")[0].innerHTML = qa[1].correct;        // change [#]       // change incorrect/correct


    // Timer
    document.getElementsByClassName("countdown")[0].innerHTML = "10 seconds remaining";

    var timeLeft = 9;

    // Timer goes down by 1 for each interval
    var downloadTimer = setInterval(function(){
        document.getElementsByClassName("countdown")[0].innerHTML = timeLeft + " seconds remaining";
        timeLeft -= 1;      

        // If timeLeft is equal to zero
        if(timeLeft === -1) {
            unansweredCount++;
            document.getElementsByClassName("unansweredCountContainer")[0].innerHTML = "Unanswered: " + unansweredCount;
        }

        // If timeLeft is less than or equal to zero
        if(timeLeft <= -1){
            document.getElementsByClassName("countdown")[0].innerHTML = "Time's up!";
            document.getElementsByClassName("incorrectCommentContainer")[0].innerHTML = "Correct answer is: " + qa[1].correct;    // change [#]

        }

        // If timeLeft is equal to -4, then clear timer and go to next game
        if(timeLeft === -4){
            clearInterval(downloadTimer);
            game3();    // change #
        }  

    }, 1000); 


    // When the user clicks the correct answer
    document.getElementsByClassName("possibleAnswerButton_08")[0].addEventListener("click", function() {    // change _#
        correctCount++;
        document.getElementsByClassName("correctCountContainer")[0].innerHTML = "Correct answers: " + correctCount;
        document.getElementsByClassName("correctCommentContainer")[0].innerHTML = "Correct!";
        timeLeft = -1;

        if(timeLeft <= 0){
            document.getElementsByClassName("countdown")[0].style.display = "none";
            document.getElementsByClassName("incorrectCommentContainer")[0].style.display = "none";
        }

    });


    // When the user clicks incorrect 1 answer
    document.getElementsByClassName("possibleAnswerButton_05")[0].addEventListener("click", function() {    // change _#
        incorrectCount++;
        document.getElementsByClassName("incorrectCountContainer")[0].innerHTML = "Incorrect answers: " + incorrectCount;
        document.getElementsByClassName("incorrectCommentContainer")[0].innerHTML = "Correct answer is: " + qa[1].correct;    // change [#]
        timeLeft = -1;

        if(timeLeft <= 0){
            document.getElementsByClassName("countdown")[0].style.display = "none";
        }

    });


    // When the user clicks incorrect 2 answer
    document.getElementsByClassName("possibleAnswerButton_06")[0].addEventListener("click", function() {    // change _#
        incorrectCount++;
        document.getElementsByClassName("incorrectCountContainer")[0].innerHTML = "Incorrect answers: " + incorrectCount;
        document.getElementsByClassName("incorrectCommentContainer")[0].innerHTML = "Correct answer is: " + qa[1].correct;    // change [#]
        timeLeft = -1;

        if(timeLeft <= 0){
            document.getElementsByClassName("countdown")[0].style.display = "none";
        }

    });


    // When the user clicks incorrect 3 answer
    document.getElementsByClassName("possibleAnswerButton_07")[0].addEventListener("click", function() {    // change _#
        incorrectCount++;
        document.getElementsByClassName("incorrectCountContainer")[0].innerHTML = "Incorrect answers: " + incorrectCount;
        document.getElementsByClassName("incorrectCommentContainer")[0].innerHTML = "Correct answer is: " + qa[1].correct;    // change [#]
        timeLeft = -1;

        if(timeLeft <= 0){
            document.getElementsByClassName("countdown")[0].style.display = "none";
        }

    });
     
}

// ----------------------------------------
// Function for Game 3 (Final Game with Game Reset Button)

var game3 = function() {        // change #
  
    // Show Counter
    // Show Correct Comment Container
    // Show Incorrect Comment Container
    document.getElementsByClassName("countdown")[0].style.display = "block";
    document.getElementsByClassName("correctCommentContainer")[0].style.display = "block";  
    document.getElementsByClassName("incorrectCommentContainer")[0].style.display = "block";    


    // Empty Correct Comment Container
    // Empty Incorrect Comment Container
    document.getElementsByClassName("correctCommentContainer")[0].innerHTML = "";
    document.getElementsByClassName("incorrectCommentContainer")[0].innerHTML = "";


    // Show / hide certain Possible Answer Buttons
    document.getElementsByClassName("possibleAnswerButton_01")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_02")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_03")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_04")[0].style.display = "none";       // show / hide

    document.getElementsByClassName("possibleAnswerButton_05")[0].style.display = "none";        // show / hide
    document.getElementsByClassName("possibleAnswerButton_06")[0].style.display = "none";        // show / hide
    document.getElementsByClassName("possibleAnswerButton_07")[0].style.display = "none";        // show / hide
    document.getElementsByClassName("possibleAnswerButton_08")[0].style.display = "none";        // show / hide

    document.getElementsByClassName("possibleAnswerButton_09")[0].style.display = "block";        // show / hide
    document.getElementsByClassName("possibleAnswerButton_10")[0].style.display = "block";        // show / hide
    document.getElementsByClassName("possibleAnswerButton_11")[0].style.display = "block";        // show / hide
    document.getElementsByClassName("possibleAnswerButton_12")[0].style.display = "block";        // show / hide
    

    // Write Questions and Possible Answers
    document.getElementsByClassName("questionContainer")[0].innerHTML = qa[2].question;             // change [#]  
    document.getElementsByClassName("possibleAnswerButton_09")[0].innerHTML = qa[2].correct;        // change [#]       // change incorrect/correct
    document.getElementsByClassName("possibleAnswerButton_10")[0].innerHTML = qa[2].incorrect1;     // change [#]       // change incorrect/correct
    document.getElementsByClassName("possibleAnswerButton_11")[0].innerHTML = qa[2].incorrect2;     // change [#]       // change incorrect/correct
    document.getElementsByClassName("possibleAnswerButton_12")[0].innerHTML = qa[2].incorrect3;     // change [#]       // change incorrect/correct


    // Timer
    document.getElementsByClassName("countdown")[0].innerHTML = "10 seconds remaining";

    var timeLeft = 9;

    // Timer goes down by 1 for each interval
    var downloadTimer = setInterval(function(){
        document.getElementsByClassName("countdown")[0].innerHTML = timeLeft + " seconds remaining";
        timeLeft -= 1;      

        // If timeLeft is equal to zero
        if(timeLeft === -1) {
            unansweredCount++;
            document.getElementsByClassName("unansweredCountContainer")[0].innerHTML = "Unanswered: " + unansweredCount;
        }

        // If timeLeft is less than or equal to zero
        if(timeLeft <= -1){
            document.getElementsByClassName("countdown")[0].innerHTML = "Time's up!";
            document.getElementsByClassName("incorrectCommentContainer")[0].innerHTML = "Correct answer is: " + qa[2].correct;    // change [#]

        }

        // If timeLeft is equal to -2, then clear timer and go to next game
        if(timeLeft === -2){
            clearInterval(downloadTimer);
                
            // Show Game Reset Button
            document.getElementsByClassName("gameResetButton")[0].innerHTML = "Play Again!";    
            document.getElementsByClassName("gameResetButton")[0].style.display = "block";

            // When the user clicks the Game Reset Button
            document.getElementsByClassName("gameResetButton")[0].addEventListener("click", function() {
                gameReset();
            });

        }  

    }, 1000); 


    // When the user clicks the correct answer
    document.getElementsByClassName("possibleAnswerButton_09")[0].addEventListener("click", function() {    // change _#
        correctCount++;
        document.getElementsByClassName("correctCountContainer")[0].innerHTML = "Correct answers: " + correctCount;
        document.getElementsByClassName("correctCommentContainer")[0].innerHTML = "Correct!";
        timeLeft = -1;

        if(timeLeft <= 0){
            document.getElementsByClassName("countdown")[0].style.display = "none";
            document.getElementsByClassName("incorrectCommentContainer")[0].style.display = "none";
        }

    });


    // When the user clicks incorrect 1 answer
    document.getElementsByClassName("possibleAnswerButton_10")[0].addEventListener("click", function() {    // change _#
        incorrectCount++;
        document.getElementsByClassName("incorrectCountContainer")[0].innerHTML = "Incorrect answers: " + incorrectCount;
        document.getElementsByClassName("incorrectCommentContainer")[0].innerHTML = "Correct answer is: " + qa[2].correct;    // change [#]
        timeLeft = -1;

        if(timeLeft <= 0){
            document.getElementsByClassName("countdown")[0].style.display = "none";
        }

    });


    // When the user clicks incorrect 2 answer
    document.getElementsByClassName("possibleAnswerButton_11")[0].addEventListener("click", function() {    // change _#
        incorrectCount++;
        document.getElementsByClassName("incorrectCountContainer")[0].innerHTML = "Incorrect answers: " + incorrectCount;
        document.getElementsByClassName("incorrectCommentContainer")[0].innerHTML = "Correct answer is: " + qa[2].correct;    // change [#]
        timeLeft = -1;

        if(timeLeft <= 0){
            document.getElementsByClassName("countdown")[0].style.display = "none";
        }

    });


    // When the user clicks incorrect 3 answer
    document.getElementsByClassName("possibleAnswerButton_12")[0].addEventListener("click", function() {    // change _#
        incorrectCount++;
        document.getElementsByClassName("incorrectCountContainer")[0].innerHTML = "Incorrect answers: " + incorrectCount;
        document.getElementsByClassName("incorrectCommentContainer")[0].innerHTML = "Correct answer is: " + qa[2].correct;    // change [#]
        timeLeft = -1;

        if(timeLeft <= 0){
            document.getElementsByClassName("countdown")[0].style.display = "none";
        }

    });
     
}






// The following is crucial to have.  It is saying that
// when the ENTIRE document is ready (i.e. when the ENTIRE DOM Content is loaded), 
// then the function gameStart will execute

document.addEventListener("DOMContentLoaded", function() {
    console.log('Your document is ready!');
    gameStart();
 });