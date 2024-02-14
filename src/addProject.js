import {deleteProject} from "./deleteProject";
import {editProject} from "./editProject";

export function addProject(){
  const projects = document.querySelector('.projectList');
  const project = document.createElement('div');
  const name = document.createElement('input');
  const edit = document.createElement('button');
  const deleteButton= document.createElement('button');

  name.classList.add('projectName');

  edit.classList.add('projectEdit');
  edit.textContent = 'Edit';
  edit.addEventListener('click',editProject)

  deleteButton.classList.add('projectDelete');
  deleteButton.textContent = 'Delete'
  deleteButton.addEventListener('click', deleteProject)

  project.append(name, edit, deleteButton);

  projects.appendChild(project);
  project.classList.add('project')
  project.setAttribute('data-position', projects.childNodes.length - 1)
  deleteButton.setAttribute('data-position', projects.childNodes.length - 1)
  edit.setAttribute('data-position', projects.childNodes.length - 1)

  name.focus();
  name.addEventListener('focusout', changeElement)

  name.addEventListener('keypress', (e) =>{
    name.removeEventListener('focusout', changeElement);
    if (e.key === 'Enter'){
      changeElement();
    } else {
      name.addEventListener('focusout', changeElement)
    }
  })

  function changeElement(){
    const projects = document.querySelector('.projectList');
    const finalName = document.createElement('p');
    finalName.classList.add('projectName');
    if (!name.value){
      name.textContent = `Project ${projects.childNodes.length}`
      finalName.textContent = name.textContent;
    } else {
      finalName.textContent = name.value;
    }
    name.replaceWith(finalName);
  }

}
