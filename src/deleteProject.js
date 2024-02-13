export function deleteProject(){
  const projects = document.querySelectorAll('.project');
  projects[this.dataset.position].remove();
  recalculatePosition();
}

function recalculatePosition(){
  const projects = document.querySelectorAll('.project');
  const buttons = document.querySelectorAll('.projectDelete');
  for (let i = 0; i < projects.length; i++){
    projects[i].setAttribute('data-position', i);
    buttons[i].setAttribute('data-position', i);
  }
}