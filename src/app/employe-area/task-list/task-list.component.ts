import { Component, Input, OnInit } from '@angular/core';
import { DefaultTasks } from './task-shared/DefaultTasks';
import { TaskInterface } from './task-shared/task-interface';
import { TaskSharedService } from './task-shared/task-shared.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  taskObjects : TaskInterface[] = DefaultTasks;

  @Input() inputEmploye ?: string;

  constructor(private sharedServTask : TaskSharedService) { }

  ngOnInit(): void {
    this.inputEmploye = this.taskObjects[0].personName;
    //subscribe to new task added with observable
    this.sharedServTask.sharedTasks.subscribe(message => this.taskObjects = message);
  }

}
