import { copyTaskDetails } from "./addTask";

export function createTask(){
  const task = copyTaskDetails();
  const content = document.querySelector('.content')
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');

  const status = document.createElement('div');
  status.classList.add('status');
  const color = document.createElement('p');
  color.classList.add('color');
  const statusName = document.createElement('p');
  statusName.classList.add('statusName');
  statusName.textContent = task.status;
  status.append(color, statusName);

  const title = document.createElement('p');
  title.classList.add('title');
  title.textContent = task.title;

  const description = document.createElement('p')
  description.classList.add('description');
  description.textContent = task.description;

  const priority = document.createElement('p');
  priority.classList.add('priority');
  priority.textContent = task.priority;

  const dueDate = document.createElement('p');
  dueDate.classList.add('dueDate');
  dueDate.textContent = task.dueDate;

  const editBtn  = document.createElement('button');
  editBtn.classList.add('editBtn');
  editBtn.textContent = 'Edit';

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('deleteBtn');
  deleteBtn.textContent = 'Delete';

  taskDiv.append(status, title, description, priority, dueDate, editBtn, deleteBtn);
  content.appendChild(taskDiv);
  const dialog = document.querySelector('.createTask');
  dialog.close();
}