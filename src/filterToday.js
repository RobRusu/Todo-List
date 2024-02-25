import { format } from 'date-fns';
import { parseLocalData } from './parseLocalData';
import { tasks } from './parseLocalData';
import { fetchData } from './fetchLocalData';

export function filterToday(){
  parseLocalData();
  const today = format(new Date(), 'yyyy-MM-dd');
  const clearTasks = document.querySelectorAll('.content > .task')

  clearTasks.forEach((task) =>{
    task.remove();
  })
  for (let i = 0; i < tasks.length; i++){
    if (tasks[i].dueDate === today){
      fetchData(tasks[i]);
    }
  }
}