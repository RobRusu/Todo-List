import { tasks } from "./parseLocalData";
import { changeProjectList } from "./projectList";
import { parseLocalData } from "./parseLocalData";
import { showProjectData } from "./projectTasks";

export function editProject(){
  const projectName = document.querySelectorAll('.projectName')
  const input = document.createElement('input');
  const initialProjectName = projectName[this.dataset.position].textContent
  input.value = projectName[this.dataset.position].textContent;
  projectName[this.dataset.position].replaceWith(input);
  input.focus();

  input.addEventListener('focusout', changeElement)
  input.addEventListener('focusout', parseLocalData)

  input.addEventListener('keypress', (e) =>{
    input.removeEventListener('focusout', changeElement);
    input.removeEventListener('focusout', parseLocalData);
    if (e.key === 'Enter'){
      changeElement();
      parseLocalData();
    } else {
      input.addEventListener('focusout', changeElement)
      input.addEventListener('focusout', parseLocalData)
    }
  })

  function changeElement(){
    const projectsLocalStorage = window.localStorage.getItem('projects');
    const parsedProjects = JSON.parse(projectsLocalStorage);
    const projects = document.querySelector('.projectList');
    const finalName = document.createElement('p');
    finalName.classList.add('projectName');
    if (!input.value){
      input.textContent = `Project ${projects.childNodes.length}`
      finalName.textContent = input.textContent;
    } else {
      finalName.textContent = input.value;
    }
    input.replaceWith(finalName);
    for (let i = 0; i < parsedProjects.length; i++){
      if (parsedProjects[i] === initialProjectName){
        parsedProjects[i] = finalName.textContent;
        for (let j = 0; j < tasks.length; j++){
          if (tasks[j].project === initialProjectName){
            tasks[j].project = finalName.textContent;
            const taskName = `${tasks[j].title}-${tasks[j].description}`
            window.localStorage.setItem(taskName, JSON.stringify(tasks[j]));
          }
        }
      }
    }
    finalName.addEventListener('click', function () {showProjectData(finalName.textContent)})
    changeProjectList(initialProjectName, finalName.textContent)
    window.localStorage.setItem('projects', JSON.stringify(parsedProjects));
  }
}