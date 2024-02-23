export const tasks = [];

for (const task in localStorage){
  if (!localStorage.hasOwnProperty(task)) continue;

  if (localStorage[task] === 'honey:core-sdk:*') continue;

  if (task === 'projects') continue; 

  tasks.push(localStorage[task]);
}

tasks.forEach((task) => {
  const parsed = JSON.parse(task);
  const index = tasks.indexOf(task);
  tasks.splice(index, 1, parsed)
})