import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DefaultTasks } from './DefaultTasks';
import { TaskInterface } from './task-interface';

@Injectable({
  providedIn: 'root'
})
export class TaskSharedService {

  /*This Service manage the task interaction between the
  task-form and the task-list component*/

  constructor() { }

  taskObjects : TaskInterface[] = DefaultTasks;

  private message = new BehaviorSubject(DefaultTasks);

  public sharedTasks = this.message.asObservable();

  nextMessage(newTask : TaskInterface[]) {
    this.message.next(newTask);
  }

}
