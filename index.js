
   let randomNum = Math.floor(Math.random() * 100 + 1);
   console.log(randomNum)

    let pastGuesses = [];
    function checkGuesses (){
        if(pastGuesses.length === 5){
        submitGuess.disabled = true;
        document.getElementById("hint").disabled = true;
        response.textContent = "Sorry! You've used all your guesses."  
    }
}
// This sequence occurs when the submit button is clicked
const submitGuess = document.getElementById("submit");
    submitGuess.addEventListener("click", function(){
    let userInput = document.getElementById("guessInput");
    
    if(userInput.value == randomNum){
        userInput.value = "";
        const response = document.getElementById("response");
        response.textContent = "Winner Winner Chicken Dinner!"
        
        submitGuess.disabled = true;
        document.getElementById("hint").disabled = true;
       
    } else if (userInput.value > randomNum){
        pastGuesses.push(userInput.value);
        userInput.value = "";
        response.textContent = "You overshot! Guess lower.";
         
    } else if (userInput.value < randomNum){
        pastGuesses.push(userInput.value);
        userInput.value = "";
        response.textContent = "Too low! Guess higher.";
    }
    // assign guesses to list
    document.getElementById("guess1").innerText = pastGuesses[0];
    document.getElementById("guess2").innerText = pastGuesses[1];
    document.getElementById("guess3").innerText = pastGuesses[2];
    document.getElementById("guess4").innerText = pastGuesses[3];
    document.getElementById("guess5").innerText = pastGuesses[4];
   
    checkGuesses();// <-- check to see if we've met 5 guesses
    });

    // Edge cases
    // number is outside of 1 - 100 range
    // guess the same number more than once
    // guess is not a number