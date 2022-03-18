import { Component, OnInit } from '@angular/core';
import { TASK } from './task-shared/task';
import { TaskSharedService } from './task-shared/task-shared.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  taskObjects = TASK;

  message ?: string;

  constructor(private sharedServTask : TaskSharedService) { }

  ngOnInit(): void {
    this.sharedServTask.sharedMessage.subscribe(message => this.message = message);
  }

}
