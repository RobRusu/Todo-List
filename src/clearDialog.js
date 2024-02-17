export function clearAddTaskDialog(){
  const inputs = document.querySelectorAll('.createTask > input');
  inputs.forEach((input) =>{
    input.value = '';
  })
  const priority = document.querySelector('#taskPriority')
  priority.value = 'Medium';
}