// Fetching existing todos from localStorage
const getSavedTodos = function() {
    const todoJSON= localStorage.getItem('todos')

    if(todoJSON !== null) {
        return JSON.parse(todoJSON)
    } else {
        return []
    }
}

// Save todos to localStorage
const saveTodos = function(todos) {
    localStorage.setItem('todos',  JSON.stringify(todos))
}


// oncheckbox click
function onCheckboxChange(todoToChange) {

    todos.find(function (todo) {
        if (todo.id === todoToChange.id) {
            todoToChange.completed = !todoToChange.completed
        }
    })

    saveTodos(todos)
    renderTodos(todos)
}


// on delete button click
function onTodoDeleted(todoToDelete) {
    todos = todos.filter(function (todo) {
        return todo.id !== todoToDelete.id
    })

    saveTodos(todos)
    renderTodos(todos)
}