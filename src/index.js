import './style.css';
import {addProject} from './addProject.js';
import { createTask } from './createTask.js';
import { submitEditTask } from './submitEditTask.js';
import {createTemplate} from './addTask.js';
import { displayAllProjects } from './parseProjects.js';
import { parseLocalData } from './parseLocalData.js';
import { filterToday } from './filterToday.js';
import { filterWeek } from './filterWeek.js';


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
createTemplate();

const add = document.querySelector('.heading > button');
const submit = document.querySelector('.createTask > .submit');
const submitEdit= document.querySelector('.editSubmit');
const todayFilter = document.querySelector('.filter:nth-child(1)')
const weekFilter = document.querySelector('.filter:nth-child(2)')
const allFilter = document.querySelector('.filter:nth-child(3)')
add.addEventListener('click', addProject);
submit.addEventListener('click', createTask);
submit.addEventListener('click', parseLocalData);
submitEdit.addEventListener('click', submitEditTask);
todayFilter.addEventListener('click', filterToday);
weekFilter.addEventListener('click', filterWeek)
displayAllProjects();
parseLocalData()
