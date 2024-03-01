import { Task } from "./taskClass";
import { parseLocalData } from "./parseLocalData";

export function submitEditTask(){
  const dialog = document.querySelector('.editTask');
  const project = document.getElementById('editTaskProject')
  const title = document.getElementById('editTaskTitle');
  const description = document.getElementById('editTaskDescription');
  const dueDate = document.getElementById('editTaskDueDate');
  const priority = document.getElementById('editTaskPriority');

  const position = this.dataset.position;

  document.querySelectorAll('.taskTitle')[position].textContent = title.value;
  document.querySelectorAll('.description')[position].textContent = description.value;
  document.querySelectorAll('.dueDateWhen')[position].textContent = dueDate.value;
  document.querySelectorAll('.priorityGrade')[position].textContent = priority.value;

  const task = new Task(project.value, title.value, description.value, priority.value, dueDate.value)

  const newTaskName = `${document.querySelectorAll('.taskTitle')[position].textContent}-${document.querySelectorAll('.description')[position].textContent}`;

  window.localStorage.setItem(newTaskName, JSON.stringify(task));

  parseLocalData();
  dialog.close();
}