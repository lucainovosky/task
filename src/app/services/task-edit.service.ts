import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DefaultTasks } from '../task-shared/DefaultTasks';
import { TaskInterface } from '../task-shared/task-interface';

@Injectable({
  providedIn: 'root'
})
export class TaskEditService {

  constructor() { }

  taskObjects : TaskInterface[] = DefaultTasks;

  private message = new BehaviorSubject(DefaultTasks);

  public sharedTasks = this.message.asObservable();

  nextMessage(newTask : TaskInterface[]) {
    this.message.next(newTask);
  }

}
