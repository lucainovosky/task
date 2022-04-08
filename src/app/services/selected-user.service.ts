import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedUserService {

  selectedEmploye : string = "";

  employeSelected ?: boolean;
  tasksFilterSelected ?: boolean;

  setEmploye(employe : string) {
    this.selectedEmploye = employe;
    this.employeSelected = true;
    this.tasksFilterSelected = false
  }

  setOtherFilter() {
    this.employeSelected = false;
    this.tasksFilterSelected = true;
  }

  getTasksSelected() {
    return this.tasksFilterSelected
  }

  getEmployeSelected() {
    return this.employeSelected
  }
}
