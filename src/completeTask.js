export function completeTask(){
  const task = document.querySelectorAll('.task')
  const statusColor = document.querySelectorAll('.color');
  const statusName = document.querySelectorAll('.statusName');
  const taskTitle = document.querySelectorAll('.taskTitle');
  const description = document.querySelectorAll('.description');
  const priority = document.querySelectorAll('.priority')
  const dueDate = document.querySelectorAll('.dueDate');

  const originalTaskName = `${taskTitle[this.dataset.position].textContent}-${description[this.dataset.position].textContent}`;

  if (this.checked){
    const localStorageTask = localStorage.getItem(originalTaskName);
    const parsedTask = JSON.parse(localStorageTask);
    parsedTask.status = 'Completed';
    window.localStorage.setItem(originalTaskName, JSON.stringify(parsedTask))

    task[this.dataset.position].style.backgroundColor = 'var(--yaleBlue)';
    task[this.dataset.position].style.color = 'var(--celeste)';
    task[this.dataset.position].style.boxShadow = '0 0 10px 5px black';
    statusColor[this.dataset.position].style.backgroundColor = 'green';
    statusName[this.dataset.position].textContent = 'Completed';
    taskTitle[this.dataset.position].style.textDecoration = 'line-through';
    description[this.dataset.position].style.textDecoration = 'line-through';
    priority[this.dataset.position].style.textDecoration = 'line-through';
    dueDate[this.dataset.position].style.textDecoration = 'line-through';

  } else {
    const localStorageTask = localStorage.getItem(originalTaskName);
    const parsedTask = JSON.parse(localStorageTask);
    parsedTask.status = 'Active';
    window.localStorage.setItem(originalTaskName, JSON.stringify(parsedTask))

    task[this.dataset.position].style.backgroundColor = 'var(--celeste)';
    task[this.dataset.position].style.color = '';
    task[this.dataset.position].style.boxShadow = '0 0 10px 5px';
    statusColor[this.dataset.position].style.backgroundColor = 'var(--amber)';
    statusName[this.dataset.position].textContent = 'Active';
    taskTitle[this.dataset.position].style.textDecoration = '';
    description[this.dataset.position].style.textDecoration = '';
    priority[this.dataset.position].style.textDecoration = '';
    dueDate[this.dataset.position].style.textDecoration = '';
  }


  


}