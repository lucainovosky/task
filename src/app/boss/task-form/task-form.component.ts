import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DefaultTasks } from 'src/app/task-shared/DefaultTasks';
import { TaskInterface } from 'src/app/task-shared/TaskInterface';
import { TaskSharedService } from 'src/app/services/task-shared.service';
import { Employes } from 'src/app/employe-shared-functions/list-employes';
import { SelectedUserService } from 'src/app/services/selected-user.service';
import { Priority } from 'src/app/employe-shared-functions/list-priority';
import { Progress } from 'src/app/employe-shared-functions/list-progress';
import { State } from 'src/app/employe-shared-functions/list-state';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(
    private sharedTaskService : TaskSharedService,
    private router : Router,
    private selectedUserServ : SelectedUserService) {}

  //viewchild decorator listen the html form
  @ViewChild('employeForm', { static: false }) submitForm !: NgForm;

  private taskObject : TaskInterface[] = DefaultTasks;

  ngOnInit(): void {
    this.sharedTaskService.sharedTasks.subscribe(message => this.taskObject = message);
  }

  //create the dropdown list
  employesArray = Employes;
  priorityArray = Priority;
  progressArray = Progress;
  stateArray = State;
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
