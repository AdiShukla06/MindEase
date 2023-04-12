const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
  let todoList = document.getElementById('todolist');
  todoList.innerHTML = '';

  todos.forEach(function(todo, index) {
	let li = document.createElement('li');
	let todoText = document.createTextNode(todo);
	let deleteButton = document.createElement('button');
	deleteButton.innerHTML = '<i class="fi fi-sr-trash"></i>';

	deleteButton.onclick = function() {
	  todos.splice(index, 1);
	  localStorage.setItem('todos', JSON.stringify(todos));
	  renderTodos();
	};

	li.appendChild(todoText);
	li.appendChild(deleteButton);
	todoList.appendChild(li);
  });
}

function addItem() {
  let todoInput = document.getElementById('todo');
  let todo = todoInput.value.trim();

  if (todo !== '') {
	todos.push(todo);
	localStorage.setItem('todos', JSON.stringify(todos));
	renderTodos();
	todoInput.value = '';
  }
}

renderTodos();