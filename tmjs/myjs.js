const form = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Add task
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

// Add task to the list
function addTask(taskText) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="complete-btn">Complete</button>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    `;
    taskList.appendChild(li);
}

// Mark task as complete
taskList.addEventListener('click', function(event) {
    if (event.target.classList.contains('complete-btn')) {
        const task = event.target.parentElement;
        task.classList.toggle('completed');
    }
});

// Edit task
taskList.addEventListener('click', function(event) {
    if (event.target.classList.contains('edit-btn')) {
        const task = event.target.parentElement;
        const span = task.querySelector('span');
        const newText = prompt('Edit task:', span.innerText);
        if (newText !== null) {
            span.innerText = newText;
        }
    }
});

// Delete task
taskList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        const task = event.target.parentElement;
        task.remove();
    }
});
