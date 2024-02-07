const promptSync = require('prompt-sync')();

class Student {
    static studentCount: number = 0;

    name: string;
    studentID: string;
    courses: string[];
    balance: number;

    constructor(name: string) {
        this.name = name;
        this.studentID = this.generateStudentID();
        this.courses = [];
        this.balance = 0;
        Student.studentCount++;
    }

    private generateStudentID(): string {
        const idLength = 5;
        let id = '';
        const characters = '0123456789';
        for (let i = 0; i < idLength; i++) {
            id += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return id;
    }

    enrollCourse(course: string): void {
        this.courses.push(course);
    }

    viewBalance(): void {
        console.log(`Balance for ${this.name}: $${this.balance}`);
    }

    payTuition(amount: number): void {
        this.balance -= amount;
        console.log(`Paid $${amount} towards tuition. Remaining balance: $${this.balance}`);
    }

    showStatus(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Student ID: ${this.studentID}`);
        console.log('Courses Enrolled:');
        this.courses.forEach(course => console.log(`- ${course}`));
        console.log(`Balance: $${this.balance}`);
    }
}

const students: Student[] = [];

function addStudent(): void {
    const name = promptSync('Enter student name: ');
    const newStudent = new Student(name);
    students.push(newStudent);
    console.log(`Student ${name} added with ID ${newStudent.studentID}`);
}

function enrollStudent(): void {
    const id = promptSync('Enter student ID: ');
    const student = students.find(student => student.studentID === id);
    if (!student) {
        console.log('Student not found!');
        return;
    }
    const course = promptSync('Enter course to enroll: ');
    student.enrollCourse(course);
    console.log(`Enrolled ${student.name} in ${course}`);
}

function viewBalance(): void {
    const id = promptSync('Enter student ID: ');
    const student = students.find(student => student.studentID === id);
    if (!student) {
        console.log('Student not found!');
        return;
    }
    student.viewBalance();
}

function payTuition(): void {
    const id = promptSync('Enter student ID: ');
    const student = students.find(student => student.studentID === id);
    if (!student) {
        console.log('Student not found!');
        return;
    }
    const amount = parseFloat(promptSync('Enter amount to pay: '));
    student.payTuition(amount);
}

function showStatus(): void {
    const id = promptSync('Enter student ID: ');
    const student = students.find(student => student.studentID === id);
    if (!student) {
        console.log('Student not found!');
        return;
    }
    student.showStatus();
}

function displayMenu(): void {
    console.log('\nStudent Management System');
    console.log('1. Add Student');
    console.log('2. Enroll Student');
    console.log('3. View Balance');
    console.log('4. Pay Tuition');
    console.log('5. Show Status');
    console.log('6. Exit');
}

function processInput(): void {
    const choice = promptSync('Select an option (1-6): ');

    switch (choice) {
        case '1':
            addStudent();
            break;
        case '2':
            enrollStudent();
            break;
        case '3':
            viewBalance();
            break;
        case '4':
            payTuition();
            break;
        case '5':
            showStatus();
            break;
        case '6':
            console.log('Goodbye!');
            process.exit(0);
        default:
            console.log('Please select a valid option (1-6)');
    }

    displayMenu();
    processInput();
}

displayMenu();
processInput();
