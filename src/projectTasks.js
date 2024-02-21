import { tasks } from "./parseLocalData.js";
import { fetchData } from "./fetchLocalData.js";

export function showProjectData(project){
  for (let i = 0; i < tasks.length; i++){
    if (tasks[i].project === project){
      fetchData(tasks[i]);
    }
  }
}