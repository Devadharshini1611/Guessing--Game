let targetNumber;
let attempts = 0;
let score = 0;
let maxAttempts;
let range;

// Set difficulty level
function setDifficulty(level) {
    const gameArea = document.getElementById("game-area");
    gameArea.style.display = "block";

    if (level === 'easy') {
        range = 50;
        maxAttempts = 10;
    } else if (level === 'medium') {
        range = 100;
        maxAttempts = 7;
    } else if (level === 'hard') {
        range = 500;
        maxAttempts = 5;
    }

    targetNumber = Math.floor(Math.random() * range) + 1;
    attempts = 0;
    score = 100 * (range / maxAttempts);
    document.getElementById("feedback").textContent = "";
    document.getElementById("hint").textContent = "";
    document.getElementById("attempts").textContent = `Attempts Left: ${maxAttempts}`;
    document.getElementById("score").textContent = `Score: ${score}`;
}

// Check the user's guess
function checkGuess() {
    const userGuess = parseInt(document.getElementById("guess-input").value);
    const feedback = document.getElementById("feedback");
    const hint = document.getElementById("hint");
    const attemptsDisplay = document.getElementById("attempts");
    
    if (isNaN(userGuess)) {
        feedback.textContent = "Please enter a valid number!";
        return;
    }
    
    attempts++;
    
    if (userGuess < targetNumber) {
        feedback.textContent = "Too low!";
        hint.textContent = `Hint: Try a higher number.`;
    } else if (userGuess > targetNumber) {
        feedback.textContent = "Too high!";
        hint.textContent = `Hint: Try a lower number.`;
    } else {
        feedback.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        document.getElementById("score").textContent = `Your final score: ${score}`;
        return;
    }
    
    // Decrease score and attempts
    score -= Math.floor(100 / maxAttempts);
    attemptsDisplay.textContent = `Attempts Left: ${maxAttempts - attempts}`;
    document.getElementById("score").textContent = `Score: ${score}`;
    
    if (attempts >= maxAttempts) {
        feedback.textContent = "Game over! You've used all your attempts.";
        document.getElementById("score").textContent = `Your final score: ${score}`;
        hint.textContent = `The correct number was ${targetNumber}. Try again!`;
    }
}
