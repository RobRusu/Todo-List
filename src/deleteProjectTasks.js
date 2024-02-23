import { tasks } from "./parseLocalData";

export function deleteProjectTasks(){
  const projectNames = document.querySelectorAll('.projectName');
  for (let i = 0; i < tasks.length; i++){
    if (tasks[i].project === projectNames[this.dataset.position].textContent){
      const removeItem = `${tasks[i].title}-${tasks[i].description}`;
      window.localStorage.removeItem(removeItem);
    } else {
      continue;
    }
  }
}