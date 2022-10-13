
   let randomNum = Math.floor(Math.random() * 100 + 1);

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
       
    } else if (userInput.value < 1 || userInput.value > 100) {
        response.textContent = "Not a valid guess.";
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
    checkGuesses();// <-- check to see if we've met 5 guesses
    makeList(pastGuesses)

    });

function makeList(arr){
    let list = document.getElementById('guessList');
    var li = document.createElement('li');
    for(let i = 0; i < arr.length; i++){
        li.textContent = arr[i];
      list.appendChild(li);
    }
  }

  const startOver = document.getElementById('reset')
  startOver.addEventListener("click", function () {
    location.reload();
  });

    // Edge cases
    // number is outside of 1 - 100 range
    // guess the same number more than once
    // guess is not a number