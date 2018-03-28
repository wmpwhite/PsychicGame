

        
        
        var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        var winCtr = 0;
        var lossCtr = 0;
        var randomNum;            
        var target;
        var missedGuesses;
        var guessLtr;
            
        for (var m = 1; m < 100; m++) {
                randomNum = Math.floor((Math.random()*26)+1);        
                target = alphabet[randomNum];                                                
                guessCtr = 10;
                missedGuesses=[" "," "," "," "," "," "," "," "," "," "];       
    
            for (var i = 0; i < 10; i++) {
                guessLtr = document.getElementById("userGuess");
                document.onkeyup = function(event) {
                     guessLtr.textContent = event.key;
                }                
                
                if (guessLtr === target) {                    
                    winCtr = winCtr + 1;
                    i = 10;
                }
                else {
                    guessCtr = guessCtr - 1;
                // add missed guess to array
                    missedGuesses[i] = guessLtr;                             
                }
            }
                if (guessCtr = 0) {
                    lossCtr = lossCtr + 1;                
                }

                var html =                
                "<p>wins: " + winCtr + "</p>" +
                "<p>losses: " + lossCtr + "</p>";

                document.querySelector("#game").innerHTML = html;
                

                var play=confirm("Do you want to play again?");
                if (play=false) {
                    m=100;
                }
        }


    
   