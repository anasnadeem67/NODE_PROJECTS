import * as promptSync from 'prompt-sync';

class Person {
    private personality: string;

    constructor() {
        this.personality = "Mystery";
    }

    public askQuestion(answer: number): void {
        if (answer === 1) {
            this.personality = "Extravert";
        } else if (answer === 2) {
            this.personality = "Introvert";
        } else {
            this.personality = "You are still a Mystery";
        }
    }

    public getPersonality(): string {
        return this.personality;
    }
}

class Student extends Person {
    private name: string;

    constructor() {
        super();
        this.name = "";
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const prompt = promptSync();

try {
    const input = prompt("Type 1 if you like to talk to others and type 2 if you would rather keep to yourself: ");
    const myPerson = new Person();
    myPerson.askQuestion(parseInt(input));
    console.log("You are: " + myPerson.getPersonality());

    const name = prompt("What is your name: ");
    const myStudent = new Student();
    myStudent.setName(name);
    console.log("Your Name is: " + myStudent.getName() + " and your personality type is: " + myStudent.getPersonality());
} catch (error) {
    console.log("Please enter an integer value.");
}
