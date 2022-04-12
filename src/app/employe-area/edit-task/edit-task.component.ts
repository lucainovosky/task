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
import { TaskInterface } from 'src/app/task-shared/task-interface';

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

  selectedOption: string = "";

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

    
    this.selectedOption = this.tasksGlobal[this.indexTask].progress
  }

  onSubmit() {

    this.submitted  = true;

    this.taskToEdit.taskName = this.submitForm.value.taskName
    this.taskToEdit.personName = this.submitForm.value.employe
    this.taskToEdit.startDate = this.submitForm.value.dateStart
    this.taskToEdit.dueDate = this.submitForm.value.dateEnd
    this.taskToEdit.priority = this.submitForm.value.priority
    this.taskToEdit.involved = this.submitForm.value.involvedPeople
    this.taskToEdit.state = this.submitForm.value.state
    this.taskToEdit.progress = this.submitForm.value.progress

    console.log("taskName " + this.submitForm.value.taskName)
    console.log("employe " + this.submitForm.value.employe)
    console.log("dateStart " + this.submitForm.value.dateStart)
    console.log("dateEnd " + this.submitForm.value.dateEnd)
    console.log("priority " + this.submitForm.value.priority)
    console.log("involvedPeople " + this.submitForm.value.involvedPeople)
    console.log("state " + this.submitForm.value.state)
    console.log("progress " + this.submitForm.value.progress)
    console.log("yourModelName " + this.submitForm.value.yourModelName)


    //add the input form to the observable
    //this.sharedTaskService.nextMessage(this.taskToEdit);

    this.tasksGlobal[this.indexTask] = this.taskToEdit;

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
