import addTaskImg from './Add.svg';
import {Task} from './taskClass'

export function createTemplate(){
  const content = document.querySelector('.content');
  const addTask = document.createElement('div');
  addTask.classList.add('add');
  const addIcon = new Image();
  addIcon.src = addTaskImg;
  const addName = document.createElement('p');
  addName.textContent = 'Add task';
  addName.classList.add('addTask');
  addTask.append(addIcon, addName);
  addTask.addEventListener('click', () =>{
    const createTaskDialog = document.querySelector('.createTask');
    createTaskDialog.showModal();
  })
  content.appendChild(addTask);
  this.removeEventListener('click', createTemplate);
}

export function copyTaskDetails(){
  const taskTitle = document.querySelector('#taskTitle').value;
  const taskDescription = document.querySelector('#taskDescription').value;
  const taskPriority = document.querySelector('#taskPriority').value;
  const taskDueDate = document.querySelector('#taskDueDate').value;
  const task = new Task(taskTitle, taskDescription, taskPriority, taskDueDate);
  return task;
}