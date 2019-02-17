// Numbers that need to be modified for each game are commented on the same line next to the code

// Global Variables
var qa = [
    {
        question:   "What was the name of the lead character in The Matrix?",
        correct:    "Neo",
        incorrect1: "Trinity",
        incorrect2: "Morpheus",
        incorrect3: "Agent Smith"   
    },
    {
        question:   "In American Pie, what subject does Nadia ask Jim to help her study for?",
        correct:    "World History",
        incorrect1: "Biology",
        incorrect2: "Mathematics",
        incorrect3: "English"   
    },
    {
        question:   "In which movie did Tom Cruise play the role of Ethan Hunt?",
        correct:    "Mission Impossible",
        incorrect1: "Jerry Maguire",
        incorrect2: "Eyes Wide Shut",
        incorrect3: "Days of Thunder"   
    },
    {
        question:   "What year was Forrest Gump released?",
        correct:    "1994",
        incorrect1: "1991",
        incorrect2: "1992",
        incorrect3: "1993"   
    },
    {
        question:   "What was Adam Sandler's occupation in Big Daddy?",
        correct:    "Tollbooth worker",
        incorrect1: "Teacher",
        incorrect2: "Car Salesman",
        incorrect3: "Pro Hockey Player"   
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
    
    document.getElementsByClassName("possibleAnswerButton_13")[0].style.display = "none";        
    document.getElementsByClassName("possibleAnswerButton_14")[0].style.display = "none";        
    document.getElementsByClassName("possibleAnswerButton_15")[0].style.display = "none";        
    document.getElementsByClassName("possibleAnswerButton_16")[0].style.display = "none";  

    document.getElementsByClassName("possibleAnswerButton_17")[0].style.display = "none";        
    document.getElementsByClassName("possibleAnswerButton_18")[0].style.display = "none";        
    document.getElementsByClassName("possibleAnswerButton_19")[0].style.display = "none";        
    document.getElementsByClassName("possibleAnswerButton_20")[0].style.display = "none";  


    // Hide Game Reset Button 
    document.getElementsByClassName("gameResetButton")[0].style.display = "none";


    // Game Start Text
    document.getElementsByClassName("gameStartText")[0].innerHTML = "Welcome to the game! You have 10 seconds to answer each question. There are a total of 5 questions in the game. Good luck!";   

    // Game Start Button
    document.getElementsByClassName("gameStartButton")[0].innerHTML = "Click here to start game"; 
    document.getElementsByClassName("gameStartButton")[0].addEventListener("click", function() {
        game01();

    });

}

// ----------------------------------------
// Function for Game 01

console.log(qa[0].question)
console.log(qa[0].correct)

var game01 = function() {        // change #

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

    document.getElementsByClassName("possibleAnswerButton_13")[0].style.display = "none";        // show / hide
    document.getElementsByClassName("possibleAnswerButton_14")[0].style.display = "none";        // show / hide
    document.getElementsByClassName("possibleAnswerButton_15")[0].style.display = "none";        // show / hide
    document.getElementsByClassName("possibleAnswerButton_16")[0].style.display = "none";        // show / hide

    document.getElementsByClassName("possibleAnswerButton_17")[0].style.display = "none";        // show / hide
    document.getElementsByClassName("possibleAnswerButton_18")[0].style.display = "none";        // show / hide
    document.getElementsByClassName("possibleAnswerButton_19")[0].style.display = "none";        // show / hide
    document.getElementsByClassName("possibleAnswerButton_20")[0].style.display = "none";        // show / hide
    

    // Write Questions and Possible Answers
    document.getElementsByClassName("questionContainer")[0].innerHTML = qa[0].question;                          // change [#]  
    document.getElementsByClassName("possibleAnswerButton_01")[0].innerHTML = qa[0].incorrect1;     // change _#    change [#]      // change incorrect/correct
    document.getElementsByClassName("possibleAnswerButton_02")[0].innerHTML = qa[0].correct;        // change _#    change [#]      // change incorrect/correct
    document.getElementsByClassName("possibleAnswerButton_03")[0].innerHTML = qa[0].incorrect2;     // change _#    change [#]      // change incorrect/correct
    document.getElementsByClassName("possibleAnswerButton_04")[0].innerHTML = qa[0].incorrect3;     // change _#    change [#]      // change incorrect/correct


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
            game02();    // change #
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

var game02 = function() {        // change #

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

    document.getElementsByClassName("possibleAnswerButton_05")[0].style.display = "block";      // show / hide
    document.getElementsByClassName("possibleAnswerButton_06")[0].style.display = "block";      // show / hide
    document.getElementsByClassName("possibleAnswerButton_07")[0].style.display = "block";      // show / hide
    document.getElementsByClassName("possibleAnswerButton_08")[0].style.display = "block";      // show / hide

    document.getElementsByClassName("possibleAnswerButton_09")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_10")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_11")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_12")[0].style.display = "none";       // show / hide

    document.getElementsByClassName("possibleAnswerButton_13")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_14")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_15")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_16")[0].style.display = "none";       // show / hide

    document.getElementsByClassName("possibleAnswerButton_17")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_18")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_19")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_20")[0].style.display = "none";       // show / hide
    

    // Write Questions and Possible Answers
    document.getElementsByClassName("questionContainer")[0].innerHTML = qa[1].question;                              // change [#]  
    document.getElementsByClassName("possibleAnswerButton_05")[0].innerHTML = qa[1].incorrect1;     // change _#        change [#]      // change incorrect/correct
    document.getElementsByClassName("possibleAnswerButton_06")[0].innerHTML = qa[1].incorrect2;     // change _#        change [#]      // change incorrect/correct
    document.getElementsByClassName("possibleAnswerButton_07")[0].innerHTML = qa[1].incorrect3;     // change _#        change [#]      // change incorrect/correct
    document.getElementsByClassName("possibleAnswerButton_08")[0].innerHTML = qa[1].correct;        // change _#        change [#]      // change incorrect/correct


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
            game03();    // change #
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
// Function for Game 3

var game03 = function() {        // change #

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

    document.getElementsByClassName("possibleAnswerButton_05")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_06")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_07")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_08")[0].style.display = "none";       // show / hide

    document.getElementsByClassName("possibleAnswerButton_09")[0].style.display = "block";      // show / hide
    document.getElementsByClassName("possibleAnswerButton_10")[0].style.display = "block";      // show / hide
    document.getElementsByClassName("possibleAnswerButton_11")[0].style.display = "block";      // show / hide
    document.getElementsByClassName("possibleAnswerButton_12")[0].style.display = "block";      // show / hide

    document.getElementsByClassName("possibleAnswerButton_13")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_14")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_15")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_16")[0].style.display = "none";       // show / hide

    document.getElementsByClassName("possibleAnswerButton_17")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_18")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_19")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_20")[0].style.display = "none";       // show / hide
    

    // Write Questions and Possible Answers
    document.getElementsByClassName("questionContainer")[0].innerHTML = qa[2].question;                          // change [#]  
    document.getElementsByClassName("possibleAnswerButton_09")[0].innerHTML = qa[2].correct;        // change _#    change [#]      // change incorrect/correct
    document.getElementsByClassName("possibleAnswerButton_10")[0].innerHTML = qa[2].incorrect1;     // change _#    change [#]      // change incorrect/correct
    document.getElementsByClassName("possibleAnswerButton_11")[0].innerHTML = qa[2].incorrect2;     // change _#    change [#]      // change incorrect/correct
    document.getElementsByClassName("possibleAnswerButton_12")[0].innerHTML = qa[2].incorrect3;     // change _#    change [#]      // change incorrect/correct


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

        // If timeLeft is equal to -4, then clear timer and go to next game
        if(timeLeft === -4){
            clearInterval(downloadTimer);
            game04();    // change #
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

// ----------------------------------------
// Function for Game 4

var game04 = function() {        // change #

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

    document.getElementsByClassName("possibleAnswerButton_05")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_06")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_07")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_08")[0].style.display = "none";       // show / hide

    document.getElementsByClassName("possibleAnswerButton_09")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_10")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_11")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_12")[0].style.display = "none";       // show / hide

    document.getElementsByClassName("possibleAnswerButton_13")[0].style.display = "block";      // show / hide
    document.getElementsByClassName("possibleAnswerButton_14")[0].style.display = "block";      // show / hide
    document.getElementsByClassName("possibleAnswerButton_15")[0].style.display = "block";      // show / hide
    document.getElementsByClassName("possibleAnswerButton_16")[0].style.display = "block";      // show / hide

    document.getElementsByClassName("possibleAnswerButton_17")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_18")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_19")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_20")[0].style.display = "none";       // show / hide
    

    // Write Questions and Possible Answers
    document.getElementsByClassName("questionContainer")[0].innerHTML = qa[3].question;                          // change [#]  
    document.getElementsByClassName("possibleAnswerButton_13")[0].innerHTML = qa[3].incorrect1;     // change _#    change [#]      // change incorrect/correct
    document.getElementsByClassName("possibleAnswerButton_14")[0].innerHTML = qa[3].incorrect2;     // change _#    change [#]      // change incorrect/correct
    document.getElementsByClassName("possibleAnswerButton_15")[0].innerHTML = qa[3].incorrect3;     // change _#    change [#]      // change incorrect/correct
    document.getElementsByClassName("possibleAnswerButton_16")[0].innerHTML = qa[3].correct;        // change _#    change [#]      // change incorrect/correct


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
            document.getElementsByClassName("incorrectCommentContainer")[0].innerHTML = "Correct answer is: " + qa[3].correct;    // change [#]

        }

        // If timeLeft is equal to -4, then clear timer and go to next game
        if(timeLeft === -4){
            clearInterval(downloadTimer);
            game05();    // change #
        }  

    }, 1000); 


    // When the user clicks the correct answer
    document.getElementsByClassName("possibleAnswerButton_16")[0].addEventListener("click", function() {    // change _#
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
    document.getElementsByClassName("possibleAnswerButton_13")[0].addEventListener("click", function() {    // change _#
        incorrectCount++;
        document.getElementsByClassName("incorrectCountContainer")[0].innerHTML = "Incorrect answers: " + incorrectCount;
        document.getElementsByClassName("incorrectCommentContainer")[0].innerHTML = "Correct answer is: " + qa[3].correct;    // change [#]
        timeLeft = -1;

        if(timeLeft <= 0){
            document.getElementsByClassName("countdown")[0].style.display = "none";
        }

    });


    // When the user clicks incorrect 2 answer
    document.getElementsByClassName("possibleAnswerButton_14")[0].addEventListener("click", function() {    // change _#
        incorrectCount++;
        document.getElementsByClassName("incorrectCountContainer")[0].innerHTML = "Incorrect answers: " + incorrectCount;
        document.getElementsByClassName("incorrectCommentContainer")[0].innerHTML = "Correct answer is: " + qa[3].correct;    // change [#]
        timeLeft = -1;

        if(timeLeft <= 0){
            document.getElementsByClassName("countdown")[0].style.display = "none";
        }

    });


    // When the user clicks incorrect 3 answer
    document.getElementsByClassName("possibleAnswerButton_15")[0].addEventListener("click", function() {    // change _#
        incorrectCount++;
        document.getElementsByClassName("incorrectCountContainer")[0].innerHTML = "Incorrect answers: " + incorrectCount;
        document.getElementsByClassName("incorrectCommentContainer")[0].innerHTML = "Correct answer is: " + qa[3].correct;    // change [#]
        timeLeft = -1;

        if(timeLeft <= 0){
            document.getElementsByClassName("countdown")[0].style.display = "none";
        }

    });
     
}

// ----------------------------------------
// Function for Game 5 (Final Game)

var game05 = function() {        // change #
  
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

    document.getElementsByClassName("possibleAnswerButton_05")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_06")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_07")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_08")[0].style.display = "none";       // show / hide

    document.getElementsByClassName("possibleAnswerButton_09")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_10")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_11")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_12")[0].style.display = "none";       // show / hide

    document.getElementsByClassName("possibleAnswerButton_13")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_14")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_15")[0].style.display = "none";       // show / hide
    document.getElementsByClassName("possibleAnswerButton_16")[0].style.display = "none";       // show / hide

    document.getElementsByClassName("possibleAnswerButton_17")[0].style.display = "block";      // show / hide
    document.getElementsByClassName("possibleAnswerButton_18")[0].style.display = "block";      // show / hide
    document.getElementsByClassName("possibleAnswerButton_19")[0].style.display = "block";      // show / hide
    document.getElementsByClassName("possibleAnswerButton_20")[0].style.display = "block";      // show / hide
    

    // Write Questions and Possible Answers
    document.getElementsByClassName("questionContainer")[0].innerHTML = qa[4].question;                          // change [#]  
    document.getElementsByClassName("possibleAnswerButton_17")[0].innerHTML = qa[4].correct;        // change _#    change [#]      // change incorrect/correct
    document.getElementsByClassName("possibleAnswerButton_18")[0].innerHTML = qa[4].incorrect1;     // change _#    change [#]      // change incorrect/correct
    document.getElementsByClassName("possibleAnswerButton_19")[0].innerHTML = qa[4].incorrect2;     // change _#    change [#]      // change incorrect/correct
    document.getElementsByClassName("possibleAnswerButton_20")[0].innerHTML = qa[4].incorrect3;     // change _#    change [#]      // change incorrect/correct


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
            document.getElementsByClassName("incorrectCommentContainer")[0].innerHTML = "Correct answer is: " + qa[4].correct;    // change [#]

        }

        // If timeLeft is equal to -2, then clear timer and go to next game
        if(timeLeft === -2){
            clearInterval(downloadTimer);
                
            // Show Game Reset Button
            document.getElementsByClassName("gameResetButton")[0].innerHTML = "Play Again!";    
            document.getElementsByClassName("gameResetButton")[0].style.display = "block";
            
            // Use the following only for Game Reset Button (no page reload).
            // For Game Reset Button (page reload), comment out the following three lines of code.
            // When the user clicks the Game Reset Button
            document.getElementsByClassName("gameResetButton")[0].addEventListener("click", function() {
                gameReset();
            });

        }  

    }, 1000); 


    // When the user clicks the correct answer
    document.getElementsByClassName("possibleAnswerButton_17")[0].addEventListener("click", function() {    // change _#
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
    document.getElementsByClassName("possibleAnswerButton_18")[0].addEventListener("click", function() {    // change _#
        incorrectCount++;
        document.getElementsByClassName("incorrectCountContainer")[0].innerHTML = "Incorrect answers: " + incorrectCount;
        document.getElementsByClassName("incorrectCommentContainer")[0].innerHTML = "Correct answer is: " + qa[4].correct;    // change [#]
        timeLeft = -1;

        if(timeLeft <= 0){
            document.getElementsByClassName("countdown")[0].style.display = "none";
        }

    });


    // When the user clicks incorrect 2 answer
    document.getElementsByClassName("possibleAnswerButton_19")[0].addEventListener("click", function() {    // change _#
        incorrectCount++;
        document.getElementsByClassName("incorrectCountContainer")[0].innerHTML = "Incorrect answers: " + incorrectCount;
        document.getElementsByClassName("incorrectCommentContainer")[0].innerHTML = "Correct answer is: " + qa[4].correct;    // change [#]
        timeLeft = -1;

        if(timeLeft <= 0){
            document.getElementsByClassName("countdown")[0].style.display = "none";
        }

    });


    // When the user clicks incorrect 3 answer
    document.getElementsByClassName("possibleAnswerButton_20")[0].addEventListener("click", function() {    // change _#
        incorrectCount++;
        document.getElementsByClassName("incorrectCountContainer")[0].innerHTML = "Incorrect answers: " + incorrectCount;
        document.getElementsByClassName("incorrectCommentContainer")[0].innerHTML = "Correct answer is: " + qa[4].correct;    // change [#]
        timeLeft = -1;

        if(timeLeft <= 0){
            document.getElementsByClassName("countdown")[0].style.display = "none";
        }

    });
     
}

// ----------------------------------------
// After the final game, point to one of the following functions

// Function for Game Reset (no page reload)

var gameReset = function() {
    
    // Hide Game Reset Button 
    document.getElementsByClassName("gameResetButton")[0].style.display = "none";

    
    // Remove Event Listeners in an Element
    // Here we will clone the node which will remove all the event listeners for each element.
    // We could also remove event listeners by using .removeEventListener

    var oldElement01 = document.getElementsByClassName("possibleAnswerButton_01")[0];   // change oldElement#   //  change possibleAnswerButton_#
    var newElement01 = oldElement01.cloneNode(true);                                    // change newElement#   //  change oldElement#
    oldElement01.parentNode.replaceChild(newElement01, oldElement01);                   // change oldElement#   //  change newElement#     //  change oldElement#

    var oldElement02 = document.getElementsByClassName("possibleAnswerButton_02")[0];   // change oldElement#   //  change possibleAnswerButton_#
    var newElement02 = oldElement02.cloneNode(true);                                    // change newElement#   //  change oldElement#
    oldElement02.parentNode.replaceChild(newElement02, oldElement02);                   // change oldElement#   //  change newElement#     //  change oldElement#
    
    var oldElement03 = document.getElementsByClassName("possibleAnswerButton_03")[0];   // change oldElement#   //  change possibleAnswerButton_#
    var newElement03 = oldElement03.cloneNode(true);                                    // change newElement#   //  change oldElement#
    oldElement03.parentNode.replaceChild(newElement03, oldElement03);                   // change oldElement#   //  change newElement#     //  change oldElement#
    
    var oldElement04 = document.getElementsByClassName("possibleAnswerButton_04")[0];   // change oldElement#   //  change possibleAnswerButton_#
    var newElement04 = oldElement04.cloneNode(true);                                    // change newElement#   //  change oldElement#
    oldElement04.parentNode.replaceChild(newElement04, oldElement04);                   // change oldElement#   //  change newElement#     //  change oldElement#


    var oldElement05 = document.getElementsByClassName("possibleAnswerButton_05")[0];   // change oldElement#   //  change possibleAnswerButton_#
    var newElement05 = oldElement05.cloneNode(true);                                    // change newElement#   //  change oldElement#
    oldElement05.parentNode.replaceChild(newElement05, oldElement05);                   // change oldElement#   //  change newElement#     //  change oldElement#

    var oldElement06 = document.getElementsByClassName("possibleAnswerButton_06")[0];   // change oldElement#   //  change possibleAnswerButton_#
    var newElement06 = oldElement06.cloneNode(true);                                    // change newElement#   //  change oldElement#
    oldElement06.parentNode.replaceChild(newElement06, oldElement06);                   // change oldElement#   //  change newElement#     //  change oldElement#

    var oldElement07 = document.getElementsByClassName("possibleAnswerButton_07")[0];   // change oldElement#   //  change possibleAnswerButton_#
    var newElement07 = oldElement07.cloneNode(true);                                    // change newElement#   //  change oldElement#
    oldElement07.parentNode.replaceChild(newElement07, oldElement07);                   // change oldElement#   //  change newElement#     //  change oldElement#

    var oldElement08 = document.getElementsByClassName("possibleAnswerButton_08")[0];   // change oldElement#   //  change possibleAnswerButton_#
    var newElement08 = oldElement08.cloneNode(true);                                    // change newElement#   //  change oldElement#
    oldElement08.parentNode.replaceChild(newElement08, oldElement08);                   // change oldElement#   //  change newElement#     //  change oldElement#


    var oldElement09 = document.getElementsByClassName("possibleAnswerButton_09")[0];   // change oldElement#   //  change possibleAnswerButton_#
    var newElement09 = oldElement09.cloneNode(true);                                    // change newElement#   //  change oldElement#
    oldElement09.parentNode.replaceChild(newElement09, oldElement09);                   // change oldElement#   //  change newElement#     //  change oldElement#

    var oldElement10 = document.getElementsByClassName("possibleAnswerButton_10")[0];   // change oldElement#   //  change possibleAnswerButton_#
    var newElement10 = oldElement10.cloneNode(true);                                    // change newElement#   //  change oldElement#
    oldElement10.parentNode.replaceChild(newElement10, oldElement10);                   // change oldElement#   //  change newElement#     //  change oldElement#

    var oldElement11 = document.getElementsByClassName("possibleAnswerButton_11")[0];   // change oldElement#   //  change possibleAnswerButton_#
    var newElement11 = oldElement11.cloneNode(true);                                    // change newElement#   //  change oldElement#
    oldElement11.parentNode.replaceChild(newElement11, oldElement11);                   // change oldElement#   //  change newElement#     //  change oldElement#

    var oldElement12 = document.getElementsByClassName("possibleAnswerButton_12")[0];   // change oldElement#   //  change possibleAnswerButton_#
    var newElement12 = oldElement12.cloneNode(true);                                    // change newElement#   //  change oldElement#
    oldElement12.parentNode.replaceChild(newElement12, oldElement12);                   // change oldElement#   //  change newElement#     //  change oldElement#


    var oldElement13 = document.getElementsByClassName("possibleAnswerButton_13")[0];   // change oldElement#   //  change possibleAnswerButton_#
    var newElement13 = oldElement13.cloneNode(true);                                    // change newElement#   //  change oldElement#
    oldElement13.parentNode.replaceChild(newElement13, oldElement13);                   // change oldElement#   //  change newElement#     //  change oldElement#

    var oldElement14 = document.getElementsByClassName("possibleAnswerButton_14")[0];   // change oldElement#   //  change possibleAnswerButton_#
    var newElement14 = oldElement14.cloneNode(true);                                    // change newElement#   //  change oldElement#
    oldElement14.parentNode.replaceChild(newElement14, oldElement14);                   // change oldElement#   //  change newElement#     //  change oldElement#

    var oldElement15 = document.getElementsByClassName("possibleAnswerButton_15")[0];   // change oldElement#   //  change possibleAnswerButton_#
    var newElement15 = oldElement15.cloneNode(true);                                    // change newElement#   //  change oldElement#
    oldElement15.parentNode.replaceChild(newElement15, oldElement15);                   // change oldElement#   //  change newElement#     //  change oldElement#

    var oldElement16 = document.getElementsByClassName("possibleAnswerButton_16")[0];   // change oldElement#   //  change possibleAnswerButton_#
    var newElement16 = oldElement16.cloneNode(true);                                    // change newElement#   //  change oldElement#
    oldElement16.parentNode.replaceChild(newElement16, oldElement16);                   // change oldElement#   //  change newElement#     //  change oldElement#


    var oldElement17 = document.getElementsByClassName("possibleAnswerButton_17")[0];   // change oldElement#   //  change possibleAnswerButton_#
    var newElement17 = oldElement17.cloneNode(true);                                    // change newElement#   //  change oldElement#
    oldElement17.parentNode.replaceChild(newElement17, oldElement17);                   // change oldElement#   //  change newElement#     //  change oldElement#

    var oldElement18 = document.getElementsByClassName("possibleAnswerButton_18")[0];   // change oldElement#   //  change possibleAnswerButton_#
    var newElement18 = oldElement18.cloneNode(true);                                    // change newElement#   //  change oldElement#
    oldElement18.parentNode.replaceChild(newElement18, oldElement18);                   // change oldElement#   //  change newElement#     //  change oldElement#

    var oldElement19 = document.getElementsByClassName("possibleAnswerButton_19")[0];   // change oldElement#   //  change possibleAnswerButton_#
    var newElement19 = oldElement19.cloneNode(true);                                    // change newElement#   //  change oldElement#
    oldElement19.parentNode.replaceChild(newElement19, oldElement19);                   // change oldElement#   //  change newElement#     //  change oldElement#

    var oldElement20 = document.getElementsByClassName("possibleAnswerButton_20")[0];   // change oldElement#   //  change possibleAnswerButton_#
    var newElement20 = oldElement20.cloneNode(true);                                    // change newElement#   //  change oldElement#
    oldElement20.parentNode.replaceChild(newElement20, oldElement20);                   // change oldElement#   //  change newElement#     //  change oldElement#


    // Set Counters to zero
    correctCount = 0;
    incorrectCount = 0;
    unansweredCount = 0;

    
    // Go to Game 1
    game01();

}

// --------------------
// Function for Game Reset (page reload)

// When the gameResetButton appears and is clicked, the browser window then refreshes.
// function onClickReload() {
//     location.reload();
// }


// The following is crucial to have.  It is saying that
// when the ENTIRE document is ready (i.e. when the ENTIRE DOM Content is loaded), 
// then the function gameStart will execute

document.addEventListener("DOMContentLoaded", function() {
    console.log('Your document is ready!');
    gameStart();
 });