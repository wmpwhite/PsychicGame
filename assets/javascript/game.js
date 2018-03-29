

        
        
        var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        var winCtr = 0;
        var lossCtr = 0;
        var guessCtr = 10;
        var randomNum;            
        var target;
        var missedGuesses = [];
        var guessLtr;

        // function getCompGuess generates a random number and then uses that number as an index
        // number to select an element from the alphabet array.

        function getCompGuess() {
        randomNum = Math.floor((Math.random()*26)+1);        
        target = alphabet[randomNum];           
        }

            // the document.onkeyup event is a function that takes a keyboard stroke from a user and
            // the performs all the game logic.

            document.onkeyup = function(event) {
                guessLtr = event.key;
                    
                // checks if the users guess is correct; if so, the "if" block fires 
                // if the user's guess is incorrect, the else block fires
                
                if (guessLtr === target) {                    
                    winCtr++;
                    missedGuesses = [];
                    getCompGuess();
                    guessCtr = 10;                    
                }
                else {
                    guessCtr--;               
                    missedGuesses.push(guessLtr);                          
                }
                
                // if the user has exhausted 10 attempts without success (i.e., he loses), this if block fires 
                if (guessCtr === 0) {
                    lossCtr++;
                    missedGuesses = [];
                    guessCtr = 10;
                    getCompGuess();                
                }

                // the following takes the changes to various items and dynamically updates the screen

                document.querySelector("#wins").innerHTML = winCtr;
                document.querySelector("#losses").innerHTML = lossCtr;
                document.querySelector("#guesses").innerHTML = guessCtr;
                document.querySelector("#guessed").innerHTML = missedGuesses; 
              
                

            }

            // this function call initiates the game by firing the first function
            
            getCompGuess(); 


    
   