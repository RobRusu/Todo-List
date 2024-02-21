export function allProjects(name){
  const list = document.querySelector('#taskProject')
  const projects = document.querySelector('.projectList');
  const option = document.createElement('option');
  option.value = name.textContent;
  option.textContent = name.textContent;
  option.setAttribute('data-position', projects.childNodes.length - 1)
  list.appendChild(option);
}

export function allEditProjects(name){
  const list = document.querySelector('#editTaskProject')
  const projects = document.querySelector('.projectList');
  const option = document.createElement('option');
  option.value = name.textContent;
  option.textContent = name.textContent;
  option.setAttribute('data-position', projects.childNodes.length - 1)
  list.appendChild(option);
}