// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0; // Track the number of attempts

// Function to handle user guesses
function checkGuess() {
    const userGuess = parseInt(document.getElementById("guess-input").value);
    const feedback = document.getElementById("feedback");
    const attemptsDisplay = document.getElementById("attempts");
    
    // Increment the attempt counter
    attempts++;

    // Check if the guess is too high, too low, or correct
    if (isNaN(userGuess)) {
        feedback.textContent = "Please enter a valid number!";
    } else if (userGuess < targetNumber) {
        feedback.textContent = "Too low! Try again.";
    } else if (userGuess > targetNumber) {
        feedback.textContent = "Too high! Try again.";
    } else {
        feedback.textContent = `Congratulations! You guessed it right in ${attempts} attempts!`;
    }

    // Update the attempts count
    attemptsDisplay.textContent = `Attempts: ${attempts}`;
}

// Add event listener to the guess button
document.getElementById("guess-button").addEventListener("click", checkGuess);
