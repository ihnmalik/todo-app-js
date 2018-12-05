let todos = getSavedTodos()

renderTodos(todos)

function renderTodos(todos) {
    const divContainer = document.querySelector(".main-container")

    divContainer.innerHTML = ''

    todos.forEach((todo) => {

        const cardDiv = document.createElement('div')
        cardDiv.setAttribute('class', "card small")
        cardDiv.setAttribute('id', "todos-container")

        const cardSpan = document.createElement('span')
        cardSpan.setAttribute('class', 'badge')
        cardSpan.setAttribute('id', 'todo-checkbox')

        const cardLabel = document.createElement('label')

        const todoCheckbox = document.createElement('input')
        todoCheckbox.setAttribute('type', 'checkbox')
        todoCheckbox.checked = todo.completed
        // todoCheckbox.setAttribute(`${todo.completed && 'checked'}`, `${!!todo.completed}`)

        const labelSpan = document.createElement('span')

        cardLabel.appendChild(todoCheckbox)
        cardLabel.appendChild(labelSpan)
        
        // adding event listener to the checkbox state change
        todoCheckbox.addEventListener('change', function(e) {
            onCheckboxChange(todo)
        })

        const textSpan = document.createElement('span')
        textSpan.setAttribute('id', 'todo-name')
        textSpan.innerHTML = `${!!todo.completed ? `<strike>${todo.text}</strike>` : todo.text }`

        const deleteSpan = document.createElement('span')
        deleteSpan.setAttribute('class', 'badge')

        const deleteIcon = document.createElement('i')
        deleteIcon.setAttribute('class', 'material-icons delete-btn')
        deleteIcon.innerHTML = 'delete'

        // When user presses the delete icon
        deleteIcon.addEventListener('click', (e) => {
            alert('Todo Deleted')
            onTodoDeleted(todo)
        })

        deleteSpan.appendChild(deleteIcon)

        cardSpan.appendChild(cardLabel)

        cardDiv.appendChild(cardSpan)
        cardDiv.appendChild(textSpan)
        cardDiv.appendChild(deleteSpan)

        divContainer.appendChild(cardDiv)
        
    })

    
}

document.querySelector('#todo-form').addEventListener('submit', function (e) {
    e.preventDefault()

    todos.unshift({
        id: uuidv4(),
        text: e.target.elements.todoInput.value,
        completed: false
    })

    e.target.elements.todoInput.value = ''

    saveTodos(todos)
    renderTodos(todos)
})



// divContainer.innerHTML += `
// <div class="card small" id="todos-container">
//     <span id="todo-checkbox" class="badge">
//         <label>
//             <input type="checkbox" ${todo.completed && 'checked'} class="todoCheckbox" name="checkbox"/>
//             <span></span>
//         </label>
//     </span>
//     <span id="todo-name">${!!todo.completed ? `<strike>${todo.text}</strike>` : todo.text }</span>
//     <span class="badge">
//         <i class="material-icons delete-btn">delete</i>
//     </span>
// </div>
// `