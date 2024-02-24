export let tasks = [];

export function parseLocalData(){
  tasks = [];
  for (const task in localStorage){
    if (!localStorage.hasOwnProperty(task)) continue;

    if (task === 'debug') continue;

    if (task === 'projects') continue; 

    tasks.push(localStorage[task]);
  }

  tasks.forEach((task) => {
    const parsed = JSON.parse(task);
    const index = tasks.indexOf(task);
    tasks.splice(index, 1, parsed)
  })
}