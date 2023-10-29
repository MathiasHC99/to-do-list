// Retrieve elements
const listsContainer = document.getElementById('lists-container');
const addListButton = document.getElementById('add-list-button');

// Function to create a new list container
const createList = () => {
    const newListContainer = document.createElement('div');
    newListContainer.classList.add('list-container');
    newListContainer.innerHTML = `
        <h2 contenteditable="true">New List</h2>
        <div class="task-list">
            <div class="task">
                <input type="checkbox" class="checkbox">
                <span contenteditable="true">New Task</span>
                <button class="remove-task">Remove</button>
            </div>
        </div>
        <button class="add-task">Add Task</button>
        <button class="set-alarm">Set Alarm</button>
    `;
    listsContainer.insertBefore(newListContainer, addListButton);

    // Add event listeners for the new list
    newListContainer.querySelector('.add-task').addEventListener('click', addNewTask);
    newListContainer.querySelector('.set-alarm').addEventListener('click', () => setAlarm('New List'));
    newListContainer.querySelector('.remove-task').addEventListener('click', removeTask);
};

// Function to add a new task to a list
const addNewTask = (e) => {
    const list = e.target.closest('.list-container').querySelector('.task-list');
    const newTask = document.createElement('div');
    newTask.classList.add('task');
    newTask.innerHTML = `
        <input type="checkbox" class="checkbox">
        <span contenteditable="true">New Task</span>
        <button class="remove-task">Remove</button>
    `;
    list.appendChild(newTask);
    newTask.querySelector('.remove-task').addEventListener('click', removeTask);
};

// Function to remove a task
const removeTask = (e) => {
    const task = e.target.closest('.task');
    task.remove();
};

// Function to set an alarm for a list
const setAlarm = (listName) => {
    const time = prompt(`Set an alarm time for ${listName} (HH:MM):`);
    if (time) {
        // Implement alarm logic here
        alert(`Alarm set for ${listName} at ${time}`);
    }
};

addListButton.addEventListener('click', createList);
