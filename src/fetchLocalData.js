import { editTask } from "./editTask";
import { deleteTask } from "./deleteTask";

export function fetchData(object){
  const task = object;
  const tasks = document.querySelectorAll('.task');
  const content = document.querySelector('.content')
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');
  taskDiv.setAttribute('data-position', tasks.length);

  const status = document.createElement('div');
  status.classList.add('status');
  const color = document.createElement('p');
  color.classList.add('color');
  const statusName = document.createElement('p');
  statusName.classList.add('statusName');
  statusName.textContent = task.status;
  status.append(color, statusName);
  status.setAttribute('data-position', tasks.length);

  const title = document.createElement('p');
  title.classList.add('taskTitle');
  title.textContent = task.title;
  title.setAttribute('data-position', tasks.length);

  const description = document.createElement('p')
  description.classList.add('description');
  description.textContent = task.description;
  description.setAttribute('data-position', tasks.length);

  const priority = document.createElement('p');
  priority.classList.add('priority');
  priority.textContent = task.priority;
  priority.setAttribute('data-position', tasks.length);

  const dueDate = document.createElement('p');
  dueDate.classList.add('dueDate');
  dueDate.textContent = task.dueDate;
  dueDate.setAttribute('data-position', tasks.length);

  const editBtn  = document.createElement('button');
  editBtn.classList.add('editBtn');
  editBtn.textContent = 'Edit';
  editBtn.setAttribute('data-position', tasks.length);
  editBtn.addEventListener('click', editTask);

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('deleteBtn');
  deleteBtn.textContent = 'Delete';
  deleteBtn.setAttribute('data-position', tasks.length);
  deleteBtn.addEventListener('click', deleteTask);

  taskDiv.append(status, title, description, priority, dueDate, editBtn, deleteBtn);
  content.appendChild(taskDiv);
}