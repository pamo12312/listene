let secretNumber = Math.floor(Math.random() * 100) + 1;
console.log(secretNumber);

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const feedback = document.getElementById('feedback');
const newGameButton = document.getElementById('newGameButton');

function checkGuess() {
    const userGuess = Number(guessInput.value);
    if (userGuess < 1 || userGuess > 100) {
        feedback.textContent = 'Prosím, zadej číslo mezi 1 a 100.';
    } else if (userGuess === secretNumber) {
        feedback.textContent = 'Gratuluji! Uhádl jsi správně!';
        endGame();
    } else if (userGuess < secretNumber) {
        feedback.textContent = 'Tip je příliš nízký. Zkus to znovu.';
    } else if (userGuess > secretNumber) {
        feedback.textContent = 'Tip je příliš vysoký. Zkus to znovu.';
    }
}

function endGame() {
    guessInput.disabled = true;
    guessButton.disabled = true;
    newGameButton.style.display = 'block';
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    console.log(secretNumber);
    feedback.textContent = '';
    guessInput.disabled = false;
    guessButton.disabled = false;
    guessInput.value = '';
    guessInput.focus();
}

// Event listeners
guessButton.addEventListener('click', checkGuess);
newGameButton.addEventListener('click', resetGame);

guessInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        checkGuess();
    }
});

resetGame();