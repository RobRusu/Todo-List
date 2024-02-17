import './style.css';
import {addProject} from './addProject.js';
import { createTask } from './createTask.js';
import { submitEditTask } from './submitEditTask.js';

// create filter buttons with a loop

function createFilters() {
  const filter = document.querySelector('.filters');
  let names = ['Today', 'This week', 'All tasks'];
  for (let i = 0; i < 3; i++){
    const btn = document.createElement('button');
    btn.classList.add('filter');
    btn.textContent = names[i];
    filter.appendChild(btn);
  }
}

createFilters();

const add = document.querySelector('.heading > button');
const submit = document.querySelector('.createTask > .submit');
const submitEdit= document.querySelector('.editSubmit');
add.addEventListener('click', addProject);
submit.addEventListener('click', createTask);
submitEdit.addEventListener('click', submitEditTask);