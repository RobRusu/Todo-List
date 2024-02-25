import { parseLocalData } from "./parseLocalData";

export function deleteTask(){
  const titles = document.querySelectorAll('.taskTitle');
  const descriptions = document.querySelectorAll('.description');
  const combine = `${titles[this.dataset.position].textContent}-${descriptions[this.dataset.position].textContent}`;
  localStorage.removeItem(combine);

  const tasks = document.querySelectorAll('.task');
  tasks[this.dataset.position].remove();
  recalculatePosition();
  parseLocalData();
}

function recalculatePosition(){
  const task = document.querySelectorAll('.task');
  const status = document.querySelectorAll('.status');
  const title = document.querySelectorAll('.taskTitle');
  const description = document.querySelectorAll('.description');
  const priority = document.querySelectorAll('.priority');
  const dueDate = document.querySelectorAll('.dueDate');
  const editBtn = document.querySelectorAll('.editBtn');
  const deleteBtn = document.querySelectorAll('.deleteBtn');
  for (let i = 0; i < deleteBtn.length; i++){
    task[i].setAttribute('data-position', i);
    status[i].setAttribute('data-position', i);
    title[i].setAttribute('data-position', i);
    description[i].setAttribute('data-position', i);
    priority[i].setAttribute('data-position', i);
    dueDate[i].setAttribute('data-position', i);
    editBtn[i].setAttribute('data-position', i);
    deleteBtn[i].setAttribute('data-position', i);
  }
}