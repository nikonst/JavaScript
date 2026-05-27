// State Variables
let timeLeft = 25 * 60; // 25 minutes converted to total seconds
let timerId = null;     // Holds the reference to our setInterval instance

// DOM Elements
const display = document.getElementById('display');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');

// Function to update the text display on screen
function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    
    // padStart ensures numbers look like "05" instead of "5"
    const displayMinutes = String(minutes).padStart(2, '0');
    const displaySeconds = String(seconds).padStart(2, '0');
    
    display.textContent = `${displayMinutes}:${displaySeconds}`;
}

// Function to start the counting action
function startTimer() {
    // Prevent creating multiple duplicate intervals if user clicks 'Start' repeatedly
    if (timerId !== null) return;

    timerId = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            // Time ran out! Clear the interval cleanly
            clearInterval(timerId);
            timerId = null;
            alert("Time is up! Take a break.");
        }
    }, 1000); // Executed exactly every 1000ms (1 second)
}

// Function to temporarily freeze the time counter
function pauseTimer() {
    clearInterval(timerId);
    timerId = null; // Resetting to null allows startTimer() to run again
}

// Function to reset back to original state
function resetTimer() {
    pauseTimer();
    timeLeft = 25 * 60;
    updateDisplay();
}

// Event Listeners
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// Run initially once to render the correct default time layout
updateDisplay();
