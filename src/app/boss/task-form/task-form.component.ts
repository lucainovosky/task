import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TASK } from 'src/app/employe-area/task-list/task-shared/task';
import { AddWork } from 'src/app/employe-shared-functions/add-work';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {

  //con viewchild mi metto in ascolto del form
  @ViewChild('employeForm', { static: false }) submitForm !: NgForm;

  task = {
    taskName : '',
    dateEnd : Date,
    dateStart : Date,
    priority : '',
    employe : '',
    involvedPeople : 1,
    state : '',
    progress : '',
  }


  //creo la lista per il menu a tendina
  employesArray = [
    'pluto',
    'paperino',
    'minnie'
  ];

  priorityArray = [
    'low',
    'medium',
    'high'
  ];

  progressArray = [
    0,
    10,
    20,
    30,
    40,
    50,
    60,
    70,
    80,
    90,
    100,
  ];

  stateArray = [
    'blocked',
    'progress',
    'ended'
  ];

  model = new AddWork("", "", new Date(), new Date(), "", 1 ,'',0);

  submitted : boolean = false;

  onSubmit() {
    this.submitted  = true;
    this.task.taskName   = this.submitForm.value.taskName;
    this.task.dateStart  = this.submitForm.value.dateStart;
    this.task.dateEnd    = this.submitForm.value.dateEnd;
    this.task.priority   = this.submitForm.value.priority;
    this.task.employe    = this.submitForm.value.employe;
    this.task.involvedPeople = this.submitForm.value.involvedPeople;
    this.task.state      = this.submitForm.value.state;
    this.task.progress   = this.submitForm.value.progress;
    console.log(this.task.taskName);
    console.log(this.task.dateStart);
    console.log(this.task.dateEnd);
    console.log(this.task.priority);
    console.log(this.task.employe);
    console.log(this.task.involvedPeople);
    console.log(this.task.state);
    console.log(this.task.progress);
  }

}
