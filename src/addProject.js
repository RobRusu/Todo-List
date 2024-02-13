import {deleteProject} from "./deleteProject";

export function addProject(){
  const projects = document.querySelector('.projectList');
  const project = document.createElement('div');
  const name = document.createElement('p');
  const edit = document.createElement('button');
  const deleteButton= document.createElement('button');

  name.classList.add('projectName');
  name.textContent = `Project ${projects.childNodes.length + 1}`;

  edit.classList.add('projectEdit');
  edit.textContent = 'Edit';

  deleteButton.classList.add('projectDelete');
  deleteButton.textContent = 'Delete'
  deleteButton.addEventListener('click', deleteProject)

  project.append(name, edit, deleteButton);

  projects.appendChild(project);
  project.classList.add('project')
  project.setAttribute('data-position', projects.childNodes.length - 1)
  deleteButton.setAttribute('data-position', projects.childNodes.length - 1)
}