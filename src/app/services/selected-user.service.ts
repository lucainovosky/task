import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedUserService {

  selection : string = "";

  employeFilterSelected ?: boolean;
  tasksFilterSelected ?: boolean;

  setEmploye(employe : string) {
    //if user select an employe
    this.selection = employe;
    this.employeFilterSelected = true;
    this.tasksFilterSelected = false
  }

  setOtherFilter(filter : string) {
    //if user select a state
    this.selection = filter
    this.employeFilterSelected = false;
    this.tasksFilterSelected = true;
  }

  getTasksSelected() {
    return this.tasksFilterSelected
  }

  getEmployeSelected() {
    return this.employeFilterSelected
  }
}
