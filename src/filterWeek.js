import { format, addDays } from 'date-fns';
import { parseLocalData } from './parseLocalData';
import { tasks } from './parseLocalData';
import { fetchData } from './fetchLocalData';

export function filterWeek(){
  parseLocalData();

  const today = format(new Date(), 'yyyy-MM-dd');
  const week = format(addDays(new Date(today), 7), 'yyyy-MM-dd');
  const clearTasks = document.querySelectorAll('.content > .task')

  clearTasks.forEach((task) =>{
    task.remove();
  })
  for (let i = 0; i < tasks.length; i++){
    if (tasks[i].dueDate >= today && tasks[i].dueDate <= week){
      fetchData(tasks[i]);
    }
  }
}