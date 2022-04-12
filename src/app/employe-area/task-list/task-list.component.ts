import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SelectedUserService } from 'src/app/services/selected-user.service';
import { DefaultTasks } from '../../task-shared/DefaultTasks';
import { TaskInterface } from '../../task-shared/TaskInterface';
import { TaskSharedService } from '../../services/task-shared.service';
import { UserTasksList } from 'src/app/task-shared/UserTasksList';
import { IsloggedinService } from 'src/app/services/isloggedin.service';
import { TaskIndexSelectedService } from 'src/app/services/task-index-selected.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnChanges {

  tasksGlobal : TaskInterface[] = DefaultTasks;
  tasksUser   : TaskInterface[] = UserTasksList;

  emptyTaskUserList : boolean = false;

  bossLogged ?: boolean;

  //from employe-list
  @Input() inputEmploye ?: string;

  constructor(
    private sharedServTask : TaskSharedService,
    private selectedUserServ : SelectedUserService,
    private logService : IsloggedinService,
    private taskIndex : TaskIndexSelectedService) { }

  ngOnInit(): void {

    this.inputEmploye = this.setSelectedUser();
    this.bossLogged = this.logService.isLoggedIn;

    //subscribe to new task added with observable
    this.sharedServTask.sharedTasks.subscribe(message => this.tasksGlobal = message);

    this.initializeList()

  }

  ngOnChanges(changes: SimpleChanges): void {

    this.tasksUser = [];

    this.initializeList()

  }

  initializeList() {
    for(let i = 0; i < this.tasksGlobal.length; i++) {
      if(this.tasksGlobal[i].personName == this.inputEmploye &&
        this.inputEmploye != "" && this.selectedUserServ.employeFilterSelected) {

        this.tasksUser.push(this.tasksGlobal[i]);
        this.emptyTaskUserList = false;


      } else if(this.tasksGlobal[i].state.toLowerCase() == this.inputEmploye?.toLocaleLowerCase() &&
        this.inputEmploye != "" && this.selectedUserServ.tasksFilterSelected) {

          this.tasksUser.push(this.tasksGlobal[i]);
          this.emptyTaskUserList = false;

      }

      if(this.inputEmploye?.toLocaleLowerCase() == "all") {
        this.tasksUser = this.tasksGlobal;
        this.emptyTaskUserList = false;
      }

    }

  }

  setSelectedUser() : string {
    if(this.selectedUserServ.selection != "") {
      return this.selectedUserServ.selection;
    }
    return this.tasksGlobal[0].personName;
  }

  editTask(index : number) {
    this.logService.setIsLoggedIn(true);
    this.taskIndex.setIndex(this.getIndexTaskToEdit(index))
  }

  getIndexTaskToEdit(index : number) : number {
    let counter = 0
    for(let i = 0; i < this.tasksGlobal.length; i++) {
      if(this.tasksGlobal[i]==this.tasksUser[index])
      {
        break
      }
      counter++
    }
    return counter
  }

}
