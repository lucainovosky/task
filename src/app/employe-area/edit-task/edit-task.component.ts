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
import { TaskInterface } from 'src/app/task-shared/TaskInterface';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  constructor(
    private router : Router,
    private selectedUserServ : SelectedUserService,
    private sharedTaskService : TaskSharedService,
    private taskIndex : TaskIndexSelectedService) { }

  tasksGlobal : TaskInterface[] = [];//get all the tasks

  taskToEdit : TaskInterface = {
    taskName : "", personName : "", startDate : "", dueDate : "", priority : "",
    involved : "", state : "", progress : ""
  };//create the tasks to edit

  indexTask : number = 0//get the index array

  //viewchild decorator listen the html form
  @ViewChild('employeEditForm', { static: false }) submitForm !: NgForm;

  //custom dropdown selection
  selectedPriority: string = ''
  selectedEmploye: string = ''
  selectedState: string = ''
  selectedProgress: string = ''

  //create the dropdown list
  employesArray = Employes;
  priorityArray = Priority;
  progressArray = Progress;
  stateArray = State;
  submitted : boolean = false;

  ngOnInit(): void {
    this.indexTask = this.taskIndex.getIndex()

    //subscribe to new task added with observable
    this.sharedTaskService.sharedTasks.subscribe(message => this.tasksGlobal = message);

    //set the value to the dropdown menu
    this.selectedPriority = this.tasksGlobal[this.indexTask].priority.toLowerCase()
    this.selectedEmploye = this.tasksGlobal[this.indexTask].personName
    this.selectedState = this.tasksGlobal[this.indexTask].state.toLowerCase()
    this.selectedProgress = this.tasksGlobal[this.indexTask].progress.replace('%','')
  }

  onSubmit() {

    this.submitted  = true;

    this.taskToEdit.taskName = this.submitForm.value.taskName
    this.taskToEdit.personName = this.submitForm.value.employe
    this.taskToEdit.startDate = this.formatDate(this.submitForm.value.dateStart,'-','/')
    this.taskToEdit.dueDate = this.formatDate(this.submitForm.value.dateEnd,'-','/')
    this.taskToEdit.priority = this.submitForm.value.priority.toUpperCase()
    this.taskToEdit.involved = this.submitForm.value.involvedPeople
    this.taskToEdit.state = this.submitForm.value.state.toUpperCase()
    this.taskToEdit.progress = this.submitForm.value.progress + "%"

    this.tasksGlobal[this.indexTask] = this.taskToEdit;

    this.goToEmployeArea()

  }

  formatDate(input : string, splitVal : string, replaceVal : string) : string {
    let splitInput = input.split(splitVal)
    return splitInput[2] + replaceVal + splitInput[1] + replaceVal + splitInput[0];
  }

  goToEmployeArea() {
    this.selectedUserServ.setEmploye(this.submitForm.value.employe);
    this.router.navigate(['/employe']);
  }

}
