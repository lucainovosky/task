import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DefaultTasks } from 'src/app/employe-area/task-list/task-shared/DefaultTasks';
import { TaskInterface } from 'src/app/employe-area/task-list/task-shared/task-interface';
import { TaskSharedService } from 'src/app/employe-area/task-list/task-shared/task-shared.service';
import { AddWork } from 'src/app/employe-shared-functions/add-work';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {

  constructor(private sharedTaskService : TaskSharedService) {}

  //viewchild decorator listen the html form
  @ViewChild('employeForm', { static: false }) submitForm !: NgForm;

  private taskObject : TaskInterface[] = DefaultTasks;

  //create the dropdown list
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

    this.taskObject.push({
      taskName:   this.submitForm.value.taskName,
      personName: this.submitForm.value.employe,
      startDate:  this.submitForm.value.dateStart,
      dueDate:    this.submitForm.value.dateEnd,
      priority:   this.submitForm.value.priority,
      involved:   this.submitForm.value.involvedPeople,
      state:      this.submitForm.value.state,
      progress:   this.submitForm.value.progress
    });

    //add the input form to the observable
    this.sharedTaskService.nextMessage(this.taskObject);
  }

}
