"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var Person = /** @class */ (function () {
    function Person() {
        this.personality = "Mystery";
    }
    Person.prototype.askQuestion = function (answer) {
        if (answer === 1) {
            this.personality = "Extravert";
        }
        else if (answer === 2) {
            this.personality = "Introvert";
        }
        else {
            this.personality = "You are still a Mystery";
        }
    };
    Person.prototype.getPersonality = function () {
        return this.personality;
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        var _this = _super.call(this) || this;
        _this.name = "";
        return _this;
    }
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    return Student;
}(Person));
var prompt = promptSync();
try {
    var input = prompt("Type 1 if you like to talk to others and type 2 if you would rather keep to yourself: ");
    var myPerson = new Person();
    myPerson.askQuestion(parseInt(input));
    console.log("You are: " + myPerson.getPersonality());
    var name_1 = prompt("What is your name: ");
    var myStudent = new Student();
    myStudent.setName(name_1);
    console.log("Your Name is: " + myStudent.getName() + " and your personality type is: " + myStudent.getPersonality());
}
catch (error) {
    console.log("Please enter an integer value.");
}
