import {deleteProject} from "./deleteProject";
import {editProject} from "./editProject";
import { allProjects } from "./projectList";
import { allEditProjects } from "./projectList";
import { showProjectData } from "./projectTasks";
import { addProjectLocalData } from "./projectLocalData";
import { deleteProjectTasks } from "./deleteProjectTasks";
import { toggleStyleProject } from "./toggleProject";
import Edit from './Edit.png'
import Delete from './Delete.png'

export function addProject(projectName){
  const projects = document.querySelector('.projectList');
  const project = document.createElement('div');
  const name = document.createElement('input');
  const edit = new Image;
  edit.src = Edit;
  const deleteButton = new Image;
  deleteButton.src = Delete;

  name.classList.add('projectName');
  name.textContent = projectName;

  edit.classList.add('projectEdit');
  edit.addEventListener('click',editProject);

  deleteButton.classList.add('projectDelete');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', deleteProjectTasks);
  deleteButton.addEventListener('click', deleteProject);
 
  project.append(name, edit, deleteButton);

  projects.appendChild(project);
  project.classList.add('project')
  project.setAttribute('data-position', projects.childNodes.length - 1)
  deleteButton.setAttribute('data-position', projects.childNodes.length - 1)
  edit.setAttribute('data-position', projects.childNodes.length - 1)

  if (name.textContent === projectName){
    name.value = projectName;
    changeElement();
  }

  name.focus();
  name.addEventListener('focusout', changeElement)
  name.addEventListener('focusout', addProjectLocalData)

  name.addEventListener('keypress', (e) =>{
    name.removeEventListener('focusout', changeElement);
    name.removeEventListener('focusout', addProjectLocalData);
    if (e.key === 'Enter'){
      changeElement();
      addProjectLocalData();
    } else {
      name.addEventListener('focusout', changeElement)
      name.addEventListener('focusout', addProjectLocalData)
    }
  })

  function changeElement(){
    const projects = document.querySelector('.projectList');
    const finalName = document.createElement('p');
    finalName.classList.add('projectName');
    finalName.setAttribute('data-position', projects.childNodes.length - 1);
    if (!name.value){
      name.textContent = `Project ${projects.childNodes.length}`
      finalName.textContent = name.textContent;
    } else {
      finalName.textContent = name.value;
    }
    name.replaceWith(finalName);
    allProjects(finalName);
    allEditProjects(finalName);
    finalName.addEventListener('click', function () {showProjectData(finalName.textContent)})
    finalName.addEventListener('click', toggleStyleProject);
  }
}
