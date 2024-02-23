import { addProject } from "./addProject";

export function displayAllProjects(){
  const projects = window.localStorage.getItem('projects');
  const parsedProjects = JSON.parse(projects);

  for (let i = 0; i < parsedProjects.length; i++){
    addProject(parsedProjects[i]);
  }
}