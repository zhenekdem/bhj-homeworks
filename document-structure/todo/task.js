const tasksForm = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

tasksForm.addEventListener('submit', (event) => {
event.preventDefault();
const taskText = taskInput.value;
if (taskText === '') {
    return;
}
const taskContainer = document.createElement('div');
    taskContainer.className = 'task';

const taskTitle = document.createElement('div');
    taskTitle.className = 'task__title';
    taskTitle.textContent = taskText;
const taskRemove = document.createElement('a');
    taskRemove.href = '#';
    taskRemove.className = 'task__remove';
    taskRemove.innerHTML = '&times;';
taskRemove.addEventListener('click', (removeEvent) => {
    removeEvent.preventDefault();
    taskContainer.remove();
});
taskContainer.appendChild(taskTitle);
taskContainer.appendChild(taskRemove);
tasksList.appendChild(taskContainer);
tasksForm.reset();
})