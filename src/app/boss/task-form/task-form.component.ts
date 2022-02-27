import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AddWork } from 'src/app/employe-shared-functions/add-work';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  name = new FormControl('');

  constructor() {
  }


  ngOnInit(): void {
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
    this.submitted = true;
  }

}
