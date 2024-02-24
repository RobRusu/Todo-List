import { tasks } from "./parseLocalData.js";
import { fetchData } from "./fetchLocalData.js";
import { parseLocalData } from "./parseLocalData.js";

export function showProjectData(project){
  const clearTasks = document.querySelectorAll('.content > .task')

  clearTasks.forEach((task) =>{
    task.remove();
  })

  for (let i = 0; i < tasks.length; i++){
    if (tasks[i].project === project){
      fetchData(tasks[i]);
    }
  }
  parseLocalData();
}