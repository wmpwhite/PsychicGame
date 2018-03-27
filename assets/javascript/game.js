<script type="text/javascript">

        var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        var winCtr = 0;
        var lossCtr = 0; 

                
        var startGame = confirm("Do you want to play the Psychic Game?")

           console.log(startGame);

        if (startGame = false) {
                m = 100;
        }                  
        
        for (var m = 1; m < 100; m++) {
            var randomNum = Math.floor((Math.random()*26)+1);        
            var target = alphabet[randomNum];
            alert ("target = " + target);
            alert (randomNum);                                    
            var ltrCtr = 10;
            var missedGuesses=[" "," "," "," "," "," "," "," "," "," "];       

        for (var i = 0; i < 10; i++) {
            var guessLtr = prompt("Pick a letter");
            console.log(guessLtr);
            var guessLtrLower = guessLtr.toLowerCase();
            if (guessLtrLower === target) {
                alert("You won");
                winCtr = winCtr + 1;
                i = 10;
                }
            else {
                alert("Oops, bad guess!")
                ltrCtr = ltrCtr - 1;
            // add missed guess to array
                missedGuesses[i] = guessLtr;
                for (var j = 0; j < (i+1); j++) {
                    alert ("Previous guesses: " + missedGuesses[j]);
                }              
            }
        }
            if (ltrCtr = 0) {
                lossCtr = lossCtr + 1;
            alert ("Sorry.  You Lost");
            alert ("the letter was" + target);
            }
            var play=confirm("Do you want to play again?");
            if (play=false) {
                m=100;
            }
        }


    
    </script>