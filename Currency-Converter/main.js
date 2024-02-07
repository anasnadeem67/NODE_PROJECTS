var promptSync = require('prompt-sync')();
function displayMenu() {
    console.log('Currency Converter');
    console.log('1. Convert USD to PKR');
    console.log('2. Convert PKR to USD');
    console.log('3. Exit');
}
function convertUSDToPKR() {
    var amountUSD = parseFloat(promptSync("Enter the amount in USD: "));
    // Conversion rate (as of writing this, approximate conversion rate)
    var conversionRate = 175; // 1 USD = 175 PKR
    var convertedAmountPKR = amountUSD * conversionRate;
    console.log("Converted amount: ".concat(convertedAmountPKR, " PKR"));
    displayMenu();
    processInput();
}
function convertPKRToUSD() {
    var amountPKR = parseFloat(promptSync("Enter the amount in PKR: "));
    // Conversion rate (as of writing this, approximate conversion rate)
    var conversionRate = 0.0057; // 1 PKR = 0.0057 USD
    var convertedAmountUSD = amountPKR * conversionRate;
    console.log("Converted amount: ".concat(convertedAmountUSD.toFixed(2), " USD"));
    displayMenu();
    processInput();
}
function processInput() {
    var choice = promptSync('Select an option (1-3): ');
    switch (choice) {
        case '1':
            convertUSDToPKR();
            break;
        case '2':
            convertPKRToUSD();
            break;
        case '3':
            console.log('Goodbye!');
            process.exit(0);
        default:
            console.log('Please select a valid option (1-3)');
            processInput();
    }
}
displayMenu();
processInput();
