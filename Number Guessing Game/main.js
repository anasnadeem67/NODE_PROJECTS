"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
// Function to generate a random number between min and max
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Function to start the game
function startGame() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    var minRange = 1;
    var maxRange = 100;
    var targetNumber = generateRandomNumber(minRange, maxRange);
    var attempts = 0;
    console.log('Welcome to Guess the Number Game!');
    console.log("I'm thinking of a number between ".concat(minRange, " and ").concat(maxRange, ". Can you guess what it is?"));
    // Function to take user input and process it
    function takeUserInput() {
        rl.question('> ', function (input) {
            var guess = parseInt(input);
            if (isNaN(guess)) {
                console.log('Please enter a valid number.');
                takeUserInput();
                return;
            }
            attempts++;
            if (guess === targetNumber) {
                console.log("Congratulations! You've guessed the number ".concat(targetNumber, " in ").concat(attempts, " attempts."));
                rl.close();
            }
            else if (guess < targetNumber) {
                console.log('Too low! Try again.');
                takeUserInput();
            }
            else {
                console.log('Too high! Try again.');
                takeUserInput();
            }
        });
    }
    takeUserInput();
}
// Start the game
startGame();
