
interface Todo {
    id: number;
    task: string;
}

let todos: Todo[] = [];
let currentId: number = 1;

const promptSync = require('prompt-sync')();

function displayMenu(): void {
    console.log('Todo App');
    console.log('1. Add Todo');
    console.log('2. View Todos');
    console.log('3. Exit');
}

function addTodo(): void {
    const task: string = promptSync("Enter your todo task: ");
    const newTodo: Todo = {
        id: currentId++,
        task: task
    };
    todos.push(newTodo);
    console.log('Todo added successfully!');
    displayMenu();
    processInput();
}

function viewTodos(): void {
    console.log('Todos:');
    todos.forEach(todo => {
        console.log(`ID: ${todo.id}, Task: ${todo.task}`);
    });
    displayMenu();
    processInput();
}

function processInput(): void {
    const choice: string = promptSync('Select an option (1-3): ');

    switch (choice) {
        case '1':
            addTodo();
            break;
        case '2':
            viewTodos();
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
