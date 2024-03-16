
const buttonNewTask = document.querySelector('.new-task button');
const taskBox = document.querySelector('.task-box');
const newTaskInput = document.querySelector('.new-task input');

buttonNewTask.addEventListener('click', addTask);

function addTask() {
    event.preventDefault();

    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    const inputItem = document.createElement('input');
    inputItem.type = 'checkbox';

    const taskItemText = document.createElement('p');
    taskItemText.innerText = newTaskInput.value;

    const buttonTrash = document.createElement('button');

    const trashItem = document.createElement('i');
    trashItem.classList.add('fa-solid');
    trashItem.classList.add('fa-trash-can');

    taskItem.appendChild(inputItem);
    taskItem.append(taskItemText);
    taskItem.appendChild(buttonTrash);
    buttonTrash.appendChild(trashItem);
    taskBox.appendChild(taskItem);

    trashItem.addEventListener('click', deleteTask);

    newTaskInput.value = '';
}

function deleteTask(e) {
    e.target.parentElement.parentElement.remove();
}




