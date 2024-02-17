export function submitEditTask(){
  const dialog = document.querySelector('.editTask');
  const title = document.getElementById('editTaskTitle');
  const description = document.getElementById('editTaskDescription');
  const dueDate = document.getElementById('editTaskDueDate');
  const priority = document.getElementById('editTaskPriority');

  const position = this.dataset.position;

  document.querySelectorAll('.taskTitle')[position].textContent = title.value;
  document.querySelectorAll('.description')[position].textContent = description.value;
  document.querySelectorAll('.dueDate')[position].textContent = dueDate.value;
  document.querySelectorAll('.priority')[position].textContent = priority.value;

  dialog.close();
}