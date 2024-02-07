const promptSync = require('prompt-sync')();

class QuizQuestion {
    question: string;
    options: string[];
    correctAnswerIndex: number;

    constructor(question: string, options: string[], correctAnswerIndex: number) {
        this.question = question;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }
}

function displayQuestion(question: QuizQuestion): void {
    console.log(question.question);
    question.options.forEach((option, index) => {
        console.log(`${index + 1}. ${option}`);
    });
}

function getAnswer(question: QuizQuestion): number {
    const userInput = promptSync('Enter your answer (1-4): ');
    const answerIndex = parseInt(userInput) - 1;
    if (isNaN(answerIndex) || answerIndex < 0 || answerIndex >= question.options.length) {
        console.log('Invalid input. Please enter a number between 1 and 4.');
        return getAnswer(question);
    }
    return answerIndex;
}

function evaluateQuiz(questions: QuizQuestion[]): void {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
        console.log(`\nQuestion ${index + 1}:`);
        displayQuestion(question);
        const userAnswer = getAnswer(question);
        if (userAnswer === question.correctAnswerIndex) {
            console.log('Correct!');
            correctAnswers++;
        } else {
            console.log('Incorrect!');
        }
    });
    console.log(`\nYou scored ${correctAnswers} out of ${questions.length} questions.`);
}

// Define quiz questions
const quizQuestions: QuizQuestion[] = [
    new QuizQuestion(
        'What is the capital of France?',
        ['London', 'Paris', 'Berlin', 'Rome'],
        1
    ),
    new QuizQuestion(
        'What is the largest mammal?',
        ['Elephant', 'Whale', 'Giraffe', 'Lion'],
        1
    ),
    new QuizQuestion(
        'What is the chemical symbol for water?',
        ['H2O', 'CO2', 'NaCl', 'CH4'],
        0
    ),
    new QuizQuestion(
        'What is the powerhouse of the cell?',
        ['Nucleus', 'Mitochondria', 'Ribosome', 'Endoplasmic Reticulum'],
        1
    )
];

// Start the quiz
console.log('Welcome to the Quiz System!');
console.log('You will be presented with multiple-choice questions.');
console.log('Please select the correct option for each question.\n');

evaluateQuiz(quizQuestions);
