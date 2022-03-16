import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  taskObjects : {
    taskName : string,
    personName : string,
    startDate : string,
    dueDate : string,
    priority : string,
    involved : string,
    state : string,
    progress : string
  } [] = [
    {taskName: "Task name", personName: "Pippo", startDate: "12/01/2022", dueDate: "31/12/2022", priority: "LOW", involved: "2", state: "IN PROGRESS", progress: "20%"},
    {taskName: "Task name2", personName: "Pippo2", startDate: "12/01/2022",dueDate: "31/12/2022", priority: "LOW", involved: "2", state: "IN PROGRESS", progress: "20%"},
    {taskName: "Task name3", personName: "Pippo3", startDate: "12/01/2022",dueDate: "31/12/2022", priority: "LOW", involved: "2", state: "IN PROGRESS", progress: "20%"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
