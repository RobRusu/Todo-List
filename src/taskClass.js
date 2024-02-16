export class Task {
  constructor (title, description, priority, dueDate, status ='Active'){
    this.title = title;
    this.status = status;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
  }

  changeStatus(state){
    this.status = state;
  }
}