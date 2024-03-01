export function editTask(){
  const dialog = document.querySelector('.editTask');
  const taskTitle = document.getElementById('editTaskTitle');
  const taskDescription = document.getElementById('editTaskDescription');
  const taskDueDate = document.getElementById('editTaskDueDate');
  const taskPriority = document.getElementById('editTaskPriority');
  const editBtn = document.querySelector('.editSubmit');

  const position = this.dataset.position;

  taskTitle.value = document.querySelectorAll('.taskTitle')[position].textContent;
  taskDescription.value = document.querySelectorAll('.description')[position].textContent;
  taskDueDate.value = document.querySelectorAll('.dueDateWhen')[position].textContent;
  taskPriority.value = document.querySelectorAll('.priorityGrade')[position].textContent;

  editBtn.setAttribute('data-position', position);

  const originalTaskName = `${taskTitle.value}-${taskDescription.value}`
  window.localStorage.removeItem(originalTaskName);
  
  dialog.showModal();
}