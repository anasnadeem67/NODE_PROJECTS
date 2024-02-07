var promptSync = require('prompt-sync')();
var QuizQuestion = /** @class */ (function () {
    function QuizQuestion(question, options, correctAnswerIndex) {
        this.question = question;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }
    return QuizQuestion;
}());
function displayQuestion(question) {
    console.log(question.question);
    question.options.forEach(function (option, index) {
        console.log("".concat(index + 1, ". ").concat(option));
    });
}
function getAnswer(question) {
    var userInput = promptSync('Enter your answer (1-4): ');
    var answerIndex = parseInt(userInput) - 1;
    if (isNaN(answerIndex) || answerIndex < 0 || answerIndex >= question.options.length) {
        console.log('Invalid input. Please enter a number between 1 and 4.');
        return getAnswer(question);
    }
    return answerIndex;
}
function evaluateQuiz(questions) {
    var correctAnswers = 0;
    questions.forEach(function (question, index) {
        console.log("\nQuestion ".concat(index + 1, ":"));
        displayQuestion(question);
        var userAnswer = getAnswer(question);
        if (userAnswer === question.correctAnswerIndex) {
            console.log('Correct!');
            correctAnswers++;
        }
        else {
            console.log('Incorrect!');
        }
    });
    console.log("\nYou scored ".concat(correctAnswers, " out of ").concat(questions.length, " questions."));
}
// Define quiz questions
var quizQuestions = [
    new QuizQuestion('What is the capital of France?', ['London', 'Paris', 'Berlin', 'Rome'], 1),
    new QuizQuestion('What is the largest mammal?', ['Elephant', 'Whale', 'Giraffe', 'Lion'], 1),
    new QuizQuestion('What is the chemical symbol for water?', ['H2O', 'CO2', 'NaCl', 'CH4'], 0),
    new QuizQuestion('What is the powerhouse of the cell?', ['Nucleus', 'Mitochondria', 'Ribosome', 'Endoplasmic Reticulum'], 1)
];
// Start the quiz
console.log('Welcome to the Quiz System!');
console.log('You will be presented with multiple-choice questions.');
console.log('Please select the correct option for each question.\n');
evaluateQuiz(quizQuestions);
