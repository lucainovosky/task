import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employes } from 'src/app/employe-shared-functions/list-employes';
import { TaskEditService } from 'src/app/services/task-edit.service';
import { DefaultTasks } from 'src/app/task-shared/DefaultTasks';
import { TaskInterface } from 'src/app/task-shared/task-interface';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  constructor( private taskEditServ : TaskEditService) { }

  taskToEdit : TaskInterface[] = [];

  ngOnInit(): void {
    //subscribe to new task added with observable
    this.taskEditServ.sharedTasks.subscribe(message => this.taskToEdit = message);
  }

  public book: any = {
    pageLayout: 'sdsdds'
 }

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
    '0',
    '10',
    '20',
    '30',
    '40',
    '50',
    '60',
    '70',
    '80',
    '90',
    '100',
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

  }

}
