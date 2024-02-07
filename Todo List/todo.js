var todos = [];
var currentId = 1;
var promptSync = require('prompt-sync')();
function displayMenu() {
    console.log('Todo App');
    console.log('1. Add Todo');
    console.log('2. View Todos');
    console.log('3. Exit');
}
function addTodo() {
    var task = promptSync("Enter your todo task: ");
    var newTodo = {
        id: currentId++,
        task: task
    };
    todos.push(newTodo);
    console.log('Todo added successfully!');
    displayMenu();
    processInput();
}
function viewTodos() {
    console.log('Todos:');
    todos.forEach(function (todo) {
        console.log("ID: ".concat(todo.id, ", Task: ").concat(todo.task));
    });
    displayMenu();
    processInput();
}
function processInput() {
    var choice = promptSync('Select an option (1-3): ');
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
