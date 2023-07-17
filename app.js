const todoList = document.getElementById('todo-list');
const newTodoInput = document.getElementById('new-todo-input');
const addButton = document.getElementById('add-button');
const deleteButtons = document.getElementsByClassName('delete-button');

let todos = ['Collect eggs', 'Clean'];

function renderTodos() {
  todoList.innerHTML = '';
  for (let i = 0; i < todos.length; i++) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    const todoText = document.createElement('span');
    todoText.innerText = todos[i];

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.setAttribute('data-index', i);

    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
  }
}

renderTodos();

addButton.addEventListener('click', addTodo);

newTodoInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    addTodo();
  }
});

function addTodo() {
  const newTodo = newTodoInput.value.trim();
  if (newTodo !== '') {
    todos.push(newTodo);
    newTodoInput.value = '';
    renderTodos();
  }
}

todoList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-button')) {
    const index = event.target.getAttribute('data-index');
    todos.splice(index, 1);
    renderTodos();
  }
});
