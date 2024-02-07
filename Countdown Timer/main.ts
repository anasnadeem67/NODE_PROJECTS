const promptSync = require('prompt-sync')();

function parseTime(input: string): number {
    const time = parseFloat(input);
    if (isNaN(time) || time < 0) {
        console.log('Invalid input. Please enter a valid positive number.');
        process.exit(1);
    }
    return time;
}

function displayTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function countdownTimer(seconds: number): void {
    let remainingTime = seconds;
    const timer = setInterval(() => {
        remainingTime--;
        console.log(displayTime(remainingTime));
        if (remainingTime <= 0) {
            clearInterval(timer);
            console.log('Countdown complete!');
            process.exit(0);
        }
    }, 1000);
}

console.log('Countdown Timer');
const input = promptSync('Enter the duration of the countdown in seconds: ');
const duration = parseTime(input);
countdownTimer(duration);
