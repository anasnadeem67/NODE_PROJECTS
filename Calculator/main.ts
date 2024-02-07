const promptsync = require('prompt-sync')();

// Parse integers
let number_1 = parseFloat(promptsync("Enter your first number: "));
let number_2 = parseFloat(promptsync("Enter your second number: "));

let operator = promptsync("Enter your operator (+, -, *, /): ");

let result;

switch (operator) {
    case "+":
        result = number_1 + number_2;
        break;
    case "-":
        result = number_1 - number_2;
        break;
    case "*":
        result = number_1 * number_2;
        break;
    case "/":
        result = number_1 / number_2;
        break;
    default:
        console.log("Please select a valid operator (+, -, *, /)");
        process.exit(1); // Terminate the program
}

console.log(`Your answer of ${number_1} ${operator} ${number_2} = ${result}`);
