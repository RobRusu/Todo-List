import { editTask } from "./editTask";
import { deleteTask } from "./deleteTask";
import { completeTask } from "./completeTask";
import Edit from './Edit.png'
import Delete from './Delete.png'

export function fetchData(object){
  const task = object;
  const tasks = document.querySelectorAll('.task');
  const content = document.querySelector('.content')
  const taskDiv = document.createElement('div');
  const buttonsDiv = document.createElement('div');
  const detailsDiv = document.createElement('div');
  const completeDiv = document.createElement('div');
  taskDiv.classList.add('task');
  taskDiv.setAttribute('data-position', tasks.length);
  buttonsDiv.classList.add('taskButtons');
  buttonsDiv.setAttribute('data-position', tasks.length);
  detailsDiv.classList.add('taskDetails');
  detailsDiv.setAttribute('data-position', tasks.length);
  completeDiv.classList.add('taskComplete');
  completeDiv.setAttribute('data-position', tasks.length);

  const status = document.createElement('div');
  status.classList.add('status');
  const color = document.createElement('p');
  color.classList.add('color');
  color.setAttribute('data-position', tasks.length);
  const statusName = document.createElement('p');
  statusName.classList.add('statusName');
  statusName.textContent = task.status;
  statusName.setAttribute('data-position', tasks.length);
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

  const priority = document.createElement('div');
  priority.classList.add('priority');
  priority.setAttribute('data-position', tasks.length);

  const priorityText = document.createElement('p');
  priorityText.classList.add('priorityText');
  priorityText.textContent = 'Priority:';
  priorityText.setAttribute('data-position', tasks.length);

  const priorityGrade = document.createElement('p');
  priorityGrade.classList.add('priorityGrade');
  priorityGrade.textContent = task.priority;
  priorityGrade.setAttribute('data-position', tasks.length);

  priority.append(priorityText, priorityGrade);

  const dueDate = document.createElement('div');
  dueDate.classList.add('dueDate');
  dueDate.setAttribute('data-position', tasks.length);

  const dueDateText = document.createElement('p');
  dueDateText.classList.add('dueDateText');
  dueDateText.textContent = 'Due:';
  dueDateText.setAttribute('data-position', tasks.length);

  const dueDateWhen = document.createElement('p');
  dueDateWhen.classList.add('dueDateWhen');
  dueDateWhen.textContent = task.dueDate;
  dueDateWhen.setAttribute('data-position', tasks.length);

  dueDate.append(dueDateText, dueDateWhen);

  const editBtn  = new Image();
  editBtn.src = Edit;
  editBtn.classList.add('editBtn');
  editBtn.setAttribute('data-position', tasks.length);
  editBtn.addEventListener('click', editTask);

  const deleteBtn = new Image();
  deleteBtn.src = Delete;
  deleteBtn.classList.add('deleteBtn');
  deleteBtn.setAttribute('data-position', tasks.length);
  deleteBtn.addEventListener('click', deleteTask);

  const completeBox = document.createElement('input');
  completeBox.setAttribute('type', 'checkbox');
  completeBox.classList.add('complete');
  completeBox.setAttribute('data-position', tasks.length);
  completeBox.addEventListener('change', completeTask);

  detailsDiv.append(status, title, description, priority, dueDate);
  buttonsDiv.append(editBtn, deleteBtn)
  completeDiv.append(completeBox);

  taskDiv.append(completeDiv, detailsDiv, buttonsDiv);

  content.appendChild(taskDiv);


  if (task.status === 'Completed'){
    completeBox.checked = true;
    taskDiv.style.backgroundColor = 'var(--yaleBlue)';
    taskDiv.style.color = 'var(--celeste)';
    taskDiv.style.boxShadow = '0 0 10px 5px black';

    color.style.backgroundColor = 'green';
    statusName.textContent = 'Completed';
    title.style.textDecoration = 'line-through';
    description.style.textDecoration = 'line-through';
    priority.style.textDecoration = 'line-through';
    dueDate.style.textDecoration = 'line-through';
  }
}