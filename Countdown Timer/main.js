var promptSync = require('prompt-sync')();
function parseTime(input) {
    var time = parseFloat(input);
    if (isNaN(time) || time < 0) {
        console.log('Invalid input. Please enter a valid positive number.');
        process.exit(1);
    }
    return time;
}
function displayTime(seconds) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    var remainingSeconds = Math.floor(seconds % 60);
    return "".concat(hours.toString().padStart(2, '0'), ":").concat(minutes.toString().padStart(2, '0'), ":").concat(remainingSeconds.toString().padStart(2, '0'));
}
function countdownTimer(seconds) {
    var remainingTime = seconds;
    var timer = setInterval(function () {
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
var input = promptSync('Enter the duration of the countdown in seconds: ');
var duration = parseTime(input);
countdownTimer(duration);
