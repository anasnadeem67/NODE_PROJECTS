var promptSync = require('prompt-sync')();
var Student = /** @class */ (function () {
    function Student(name) {
        this.id = Student.nextID++;
        this.name = name;
        this.courses = [];
        this.balance = 0;
    }
    Student.prototype.enroll = function (course) {
        this.courses.push(course);
    };
    Student.prototype.viewBalance = function () {
        console.log("Balance for ".concat(this.name, ": $").concat(this.balance));
    };
    Student.prototype.payTuition = function (amount) {
        this.balance -= amount;
        console.log("$".concat(amount, " paid towards tuition for ").concat(this.name, "."));
        this.viewBalance();
    };
    Student.prototype.showStatus = function () {
        console.log("Name: ".concat(this.name));
        console.log("ID: ".concat(this.id));
        console.log("Courses Enrolled: ".concat(this.courses.join(', ')));
        this.viewBalance();
    };
    Student.nextID = 10000;
    return Student;
}());
var StudentManagementSystem = /** @class */ (function () {
    function StudentManagementSystem() {
        this.students = [];
    }
    StudentManagementSystem.prototype.addStudent = function (name) {
        var newStudent = new Student(name);
        this.students.push(newStudent);
        console.log("Student ".concat(name, " added with ID: ").concat(newStudent.id));
    };
    StudentManagementSystem.prototype.findStudentById = function (id) {
        return this.students.find(function (student) { return student.id === id; });
    };
    return StudentManagementSystem;
}());
function displayMenu() {
    console.log('\nStudent Management System');
    console.log('1. Add Student');
    console.log('2. Enroll Student');
    console.log('3. View Balance');
    console.log('4. Pay Tuition');
    console.log('5. Show Status');
    console.log('6. Exit');
}
var sms = new StudentManagementSystem();
while (true) {
    displayMenu();
    var choice = promptSync('Enter your choice: ');
    switch (choice) {
        case '1':
            var name_1 = promptSync('Enter student name: ');
            sms.addStudent(name_1);
            break;
        case '2':
            var studentID = parseInt(promptSync('Enter student ID: '));
            var student = sms.findStudentById(studentID);
            if (student) {
                var course = promptSync('Enter course to enroll: ');
                student.enroll(course);
                console.log("".concat(course, " enrolled successfully for ").concat(student.name));
            }
            else {
                console.log('Student not found.');
            }
            break;
        case '3':
            var idForBalance = parseInt(promptSync('Enter student ID to view balance: '));
            var studentForBalance = sms.findStudentById(idForBalance);
            if (studentForBalance) {
                studentForBalance.viewBalance();
            }
            else {
                console.log('Student not found.');
            }
            break;
        case '4':
            var idForPayment = parseInt(promptSync('Enter student ID to pay tuition: '));
            var studentForPayment = sms.findStudentById(idForPayment);
            if (studentForPayment) {
                var amount = parseFloat(promptSync('Enter amount to pay: '));
                studentForPayment.payTuition(amount);
            }
            else {
                console.log('Student not found.');
            }
            break;
        case '5':
            var idForStatus = parseInt(promptSync('Enter student ID to show status: '));
            var studentForStatus = sms.findStudentById(idForStatus);
            if (studentForStatus) {
                studentForStatus.showStatus();
            }
            else {
                console.log('Student not found.');
            }
            break;
        case '6':
            console.log('Exiting Student Management System.');
            process.exit(0);
        default:
            console.log('Invalid choice. Please enter a number between 1 and 6.');
    }
}
