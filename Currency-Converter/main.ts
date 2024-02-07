const promptSync = require('prompt-sync')();

function displayMenu(): void {
    console.log('Currency Converter');
    console.log('1. Convert USD to PKR');
    console.log('2. Convert PKR to USD');
    console.log('3. Exit');
}

function convertUSDToPKR(): void {
    const amountUSD: number = parseFloat(promptSync("Enter the amount in USD: "));
    
    // Conversion rate (as of writing this, approximate conversion rate)
    const conversionRate: number = 175; // 1 USD = 175 PKR

    const convertedAmountPKR: number = amountUSD * conversionRate;
    console.log(`Converted amount: ${convertedAmountPKR} PKR`);
    displayMenu();
    processInput();
}

function convertPKRToUSD(): void {
    const amountPKR: number = parseFloat(promptSync("Enter the amount in PKR: "));
    
    // Conversion rate (as of writing this, approximate conversion rate)
    const conversionRate: number = 0.0057; // 1 PKR = 0.0057 USD

    const convertedAmountUSD: number = amountPKR * conversionRate;
    console.log(`Converted amount: ${convertedAmountUSD.toFixed(2)} USD`);
    displayMenu();
    processInput();
}

function processInput(): void {
    const choice: string = promptSync('Select an option (1-3): ');

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
