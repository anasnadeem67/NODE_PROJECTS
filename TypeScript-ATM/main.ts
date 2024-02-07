const promptSync = require('prompt-sync')();

// Define a User class to hold user data
class User {
    userId: string;
    userPin: string;

    constructor(userId: string, userPin: string) {
        this.userId = userId;
        this.userPin = userPin;
    }
}

// Generate random user data
function generateRandomUserData(): User {
    const userId = generateRandomString(8);
    const userPin = generateRandomString(4);
    return new User(userId, userPin);
}

// Function to generate a random string of given length
function generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Function to start the ATM application
function startATM(): void {
    const user = generateRandomUserData();

    console.log('Welcome to the ATM Console Application!');
    console.log('Please enter your user ID and PIN to continue');

    const enteredUserId = promptSync('User ID: ');
    const enteredUserPin = promptSync('PIN: ');

    if (enteredUserId === user.userId && enteredUserPin === user.userPin) {
        console.log('Login successful. ATM functionalities unlocked');
    } else {
        console.log('Incorrect user ID or PIN. Please try again');
        startATM(); // Restart the application
    }
}


startATM();
