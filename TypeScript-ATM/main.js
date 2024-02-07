var promptSync = require('prompt-sync')();
// Define a User class to hold user data
var User = /** @class */ (function () {
    function User(userId, userPin) {
        this.userId = userId;
        this.userPin = userPin;
    }
    return User;
}());
// Function to generate random user data
function generateRandomUserData() {
    var userId = generateRandomString(8);
    var userPin = generateRandomString(4);
    return new User(userId, userPin);
}
// Function to generate a random string of given length
function generateRandomString(length) {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
// Function to start the ATM application
function startATM() {
    var user = generateRandomUserData();
    console.log('Welcome to the ATM Console Application!');
    console.log('Please enter your user ID and PIN to continue.');
    var enteredUserId = promptSync('User ID: ');
    var enteredUserPin = promptSync('PIN: ');
    if (enteredUserId === user.userId && enteredUserPin === user.userPin) {
        console.log('Login successful. ATM functionalities unlocked.');
        // Add your ATM functionalities here
    }
    else {
        console.log('Incorrect user ID or PIN. Please try again.');
        startATM(); // Restart the application
    }
}
// Start the ATM application
startATM();
