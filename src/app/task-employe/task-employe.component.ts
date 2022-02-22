import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-employe',
  templateUrl: './task-employe.component.html',
  styleUrls: ['./task-employe.component.css']
})
export class TaskEmployeComponent implements OnInit {

  currentItem : string = 'pippo';

  constructor() { }

  ngOnInit(): void {
  }

}
