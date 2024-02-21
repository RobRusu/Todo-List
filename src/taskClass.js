export class Task {
  constructor (project, title, description, priority, dueDate, status ='Active'){
    this.project = project;
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