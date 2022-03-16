import { Component, OnInit } from '@angular/core';
import { TASK } from './task-shared/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  taskObjects = TASK;

  constructor() { }

  ngOnInit(): void {
  }

}
