export function deleteTask(){
  const tasks = document.querySelectorAll('.task');
  tasks[this.dataset.position].remove();
  recalculatePosition();
}

function recalculatePosition(){
  const deleteBtn = document.querySelectorAll('.deleteBtn');
  for (let i = 0; i < deleteBtn.length; i++){
    deleteBtn[i].setAttribute('data-position', i);
  }
}