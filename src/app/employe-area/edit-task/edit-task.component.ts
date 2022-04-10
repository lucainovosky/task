import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employes } from 'src/app/employe-shared-functions/list-employes';
import { Priority } from 'src/app/employe-shared-functions/list-priority';
import { Progress } from 'src/app/employe-shared-functions/list-progress';
import { State } from 'src/app/employe-shared-functions/list-state';
import { SelectedUserService } from 'src/app/services/selected-user.service';
import { TaskIndexSelectedService } from 'src/app/services/task-index-selected.service';
import { TaskSharedService } from 'src/app/services/task-shared.service';
import { DefaultTasks } from 'src/app/task-shared/DefaultTasks';
import { TaskInterface } from 'src/app/task-shared/task-interface';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  constructor(
    //private taskEditServ : TaskEditService,
    private router : Router,
    private selectedUserServ : SelectedUserService,
    private sharedTaskService : TaskSharedService,
    private taskIndex : TaskIndexSelectedService) { }

  taskToEdit : TaskInterface[] = [];

  //viewchild decorator listen the html form
  @ViewChild('employeEditForm', { static: false }) submitForm !: NgForm;

  private taskObject : TaskInterface[] = DefaultTasks;

  //create the dropdown list
  employesArray = Employes;
  priorityArray = Priority;
  progressArray = Progress;
  stateArray = State;
  submitted : boolean = false;

  indexTask : number = 0

  ngOnInit(): void {
    this.indexTask = this.taskIndex.getIndex()
    //subscribe to new task added with observable
    this.sharedTaskService.sharedTasks.subscribe(message => this.taskToEdit = message);
  }

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

    this.goToEmployeArea()

  }

  formatDateForHtml(input : string) : string {
    let splitInput = input.split("/")
    return splitInput[2] + "-" + splitInput[1] + "-" + splitInput[0];
  }

  goToEmployeArea() {
    this.selectedUserServ.setEmploye(this.submitForm.value.employe);
    this.router.navigate(['/employe']);
  }



}
