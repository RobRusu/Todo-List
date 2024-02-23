export function addProjectLocalData(){
  const projectsArray = [];

  const projects = document.querySelectorAll('.projectName');
  projects.forEach((project) =>{
    projectsArray.push(project.textContent);
  })

  window.localStorage.setItem('projects', JSON.stringify(projectsArray));
}