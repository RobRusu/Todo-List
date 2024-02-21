export function deleteProject(){
  const projects = document.querySelectorAll('.project');
  const options = document.querySelectorAll('#taskProject > option')
  projects[this.dataset.position].remove();
  options[this.dataset.position].remove();
  recalculatePosition();
}

function recalculatePosition(){
  const projects = document.querySelectorAll('.project');
  const buttons = document.querySelectorAll('.projectDelete');
  const edit = document.querySelectorAll('.projectEdit')
  const options = document.querySelectorAll('#taskProject > option')
  for (let i = 0; i < projects.length; i++){
    projects[i].setAttribute('data-position', i);
    buttons[i].setAttribute('data-position', i);
    edit[i].setAttribute('data-position', i);
    options[i].setAttribute('data-position', i);
  }
}