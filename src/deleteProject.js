export function deleteProject(){
  // handles localStorage deletion
  const projectNames = document.querySelectorAll('.projectName');
  const projectsLocalStorage = window.localStorage.getItem('projects');
  const parsedProjects = JSON.parse(projectsLocalStorage);
  for (let i = 0; i < parsedProjects.length; i++){
    if (projectNames[this.dataset.position].textContent === parsedProjects[i]){
      parsedProjects.splice(i, 1)
    } else {
      continue;
    }
  }
  window.localStorage.setItem('projects', JSON.stringify(parsedProjects));

  // handles DOM deletion
  const projects = document.querySelectorAll('.project');
  const options = document.querySelectorAll('#taskProject > option')
  const editOptions = document.querySelectorAll('#editTaskProject > option')
  projects[this.dataset.position].remove();
  options[this.dataset.position].remove();
  editOptions[this.dataset.position].remove();
  
  // recalculate data-position attribute
  recalculatePosition();
}

function recalculatePosition(){
  const projects = document.querySelectorAll('.project');
  const buttons = document.querySelectorAll('.projectDelete');
  const edit = document.querySelectorAll('.projectEdit');
  const options = document.querySelectorAll('#taskProject > option')
  for (let i = 0; i < projects.length; i++){
    projects[i].setAttribute('data-position', i);
    buttons[i].setAttribute('data-position', i);
    edit[i].setAttribute('data-position', i);
    options[i].setAttribute('data-position', i);
  }
}