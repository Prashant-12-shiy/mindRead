const sendBtn = document.getElementById("send-btn");
const resetBtn = document.getElementById("reset-btn");
const inputSection = document.getElementById("input-section");
const loadingSection = document.getElementById("loading-section");
const resultSection = document.getElementById("result-section");
const guessInput = document.getElementById("guess-input");
const loadingMessage = document.getElementById("loading-message");
const resultNumber = document.getElementById("result-number");

const loadingMessages = [
    "Analyzing probability...",
    "Reading your mind...",
    "Consulting the oracle...",
    "Crunching the numbers...",
];

let currentGuess = 0;

sendBtn.addEventListener("click", () => {
    const guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    currentGuess = guess;
    inputSection.classList.add("hidden");
    loadingSection.classList.remove("hidden");

    let index = 0;
    const interval = setInterval(() => {
        loadingMessage.textContent = loadingMessages[index];
        index = (index + 1) % loadingMessages.length;
    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
        loadingSection.classList.add("hidden");
        resultSection.classList.remove("hidden");
        resultNumber.textContent = currentGuess;
    }, 4000); // 4 seconds loading screen
});

resetBtn.addEventListener("click", () => {
    resultSection.classList.add("hidden");
    inputSection.classList.remove("hidden");
    guessInput.value = "";
});
