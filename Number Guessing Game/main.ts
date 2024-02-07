const promptSync = require('prompt-sync')();

function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to start the game
function startGame(): void {
    const minRange = 1;
    const maxRange = 100;
    const targetNumber = generateRandomNumber(minRange, maxRange);
    let attempts = 0;

    console.log('Welcome to Guess the Number Game!');
    console.log(`I'm thinking of a number between ${minRange} and ${maxRange}. Can you guess what it is?`);

    // take user input and process it
    function takeUserInput() {
        const guess = parseFloat(promptSync('Your guess: '));

        if (isNaN(guess)) {
            console.log('Please enter a valid number.');
            takeUserInput();
            return;
        }

        attempts++;

        if (guess === targetNumber) {
            console.log(`Congratulations! You've guessed the number ${targetNumber} in ${attempts} attempts.`);
        } else if (guess < targetNumber) {
            console.log('Too low! Try again.');
            takeUserInput();
        } else {
            console.log('Too high! Try again.');
            takeUserInput();
        }
    }

    takeUserInput();
}

// Start the game
startGame();
