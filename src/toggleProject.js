export function toggleStyleProject(){
  const names = document.querySelectorAll('.project');
  const filters = document.querySelectorAll('.filter')

  for (let i = 0; i < names.length; i++){
    names[i].classList.remove('toggle');
  }
  for (let i = 0; i < filters.length; i++){
    filters[i].classList.remove('toggle');
  }

  if (this.textContent === "Today's tasks" || this.textContent === "This week's tasks" || this.textContent === 'All tasks'){
    this.classList.add('toggle');
  } else {
    names[this.dataset.position].classList.add('toggle');
  }
}