export function editProject(){
  const projectName = document.querySelectorAll('.projectName')
  const input = document.createElement('input');
  input.value = projectName[this.dataset.position].textContent;
  projectName[this.dataset.position].replaceWith(input);
  input.focus();

  input.addEventListener('focusout', changeElement)

  input.addEventListener('keypress', (e) =>{
    input.removeEventListener('focusout', changeElement);
    if (e.key === 'Enter'){
      changeElement();
    } else {
      input.addEventListener('focusout', changeElement)
    }
  })

  function changeElement(){
    const projects = document.querySelector('.projectList');
    const finalName = document.createElement('p');
    finalName.classList.add('projectName');
    if (!input.value){
      input.textContent = `Project ${projects.childNodes.length}`
      finalName.textContent = input.textContent;
    } else {
      finalName.textContent = input.value;
    }
    input.replaceWith(finalName);
  }

}