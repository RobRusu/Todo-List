import './style.css';
import {addProject} from './addProject.js';
import { createTask } from './createTask.js';
import { submitEditTask } from './submitEditTask.js';
import {createTemplate} from './addTask.js';
import { displayAllProjects } from './parseProjects.js';
import { parseLocalData } from './parseLocalData.js';
import { filterToday } from './filters.js';
import { filterWeek } from './filters.js';
import { filterAll } from './filters.js';
import { toggleStyleProject } from './toggleProject.js';


function createFilters() {
  const filter = document.querySelector('.filters');
  let names = ["Today's tasks", "This week's tasks", 'All tasks'];
  for (let i = 0; i < 3; i++){
    const btn = document.createElement('p');
    btn.classList.add('filter');
    btn.textContent = names[i];
    filter.appendChild(btn);
  }
}



createFilters();
createTemplate();


const closeBtn = document.querySelector('.close')
const editCloseBtn = document.querySelector('.editClose')
const add = document.querySelector('.heading > button');
const submit = document.querySelector('.createTask > .submit');
const submitEdit= document.querySelector('.editSubmit');
const todayFilter = document.querySelector('.filter:nth-child(1)');
const weekFilter = document.querySelector('.filter:nth-child(2)');
const allFilter = document.querySelector('.filter:nth-child(3)');
add.addEventListener('click', addProject);
submit.addEventListener('click', createTask);
submit.addEventListener('click', parseLocalData);
submitEdit.addEventListener('click', submitEditTask);
todayFilter.addEventListener('click', filterToday);
todayFilter.addEventListener('click', toggleStyleProject);
weekFilter.addEventListener('click', filterWeek);
weekFilter.addEventListener('click', toggleStyleProject);
allFilter.addEventListener('click', filterAll);
allFilter.addEventListener('click', toggleStyleProject);
allFilter.classList.add('toggle');
closeBtn.addEventListener('click', () =>{
  const dialog = document.querySelector('.createTask');
  dialog.close();
})
editCloseBtn.addEventListener('click', () =>{
  const dialog = document.querySelector('.editTask');
  dialog.close();
})
displayAllProjects();
parseLocalData()
filterAll();
