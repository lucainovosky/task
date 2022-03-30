import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DefaultTasks } from 'src/app/task-shared/DefaultTasks';
import { TaskInterface } from 'src/app/task-shared/task-interface';
import { TaskSharedService } from 'src/app/services/task-shared.service';
import { Employes } from 'src/app/employe-shared-functions/list-employes';
import { SelectedUserService } from 'src/app/services/selected-user.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {

  constructor(
    private sharedTaskService : TaskSharedService,
    private router : Router,
    private selectedUserServ : SelectedUserService) {}

  //viewchild decorator listen the html form
  @ViewChild('employeForm', { static: false }) submitForm !: NgForm;

  private taskObject : TaskInterface[] = DefaultTasks;

  //create the dropdown list
  employesArray = Employes;

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

    this.goToEmployeArea();

  }

  goToEmployeArea() {
    this.selectedUserServ.setEmploye(this.submitForm.value.employe);
    this.router.navigate(['/employe']);
  }

}
