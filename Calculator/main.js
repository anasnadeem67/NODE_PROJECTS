var promptsync = require('prompt-sync')();
// Parse integers
var number_1 = parseFloat(promptsync("Enter your first number: "));
var number_2 = parseFloat(promptsync("Enter your second number: "));
var operator = promptsync("Enter your operator (+, -, *, /): ");
var result;
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
console.log("Your answer of ".concat(number_1, " ").concat(operator, " ").concat(number_2, " = ").concat(result));
