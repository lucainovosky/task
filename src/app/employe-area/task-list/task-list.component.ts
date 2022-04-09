import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SelectedUserService } from 'src/app/services/selected-user.service';
import { DefaultTasks } from '../../task-shared/DefaultTasks';
import { TaskInterface } from '../../task-shared/task-interface';
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
  taskToEdit  : TaskInterface[] = [];

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

    for(let i = 0; i < this.tasksGlobal.length; i++) {
      console.log(i+") "+this.tasksGlobal[i].taskName)
      if(this.selectedUserServ.selectedEmploye == this.tasksGlobal[i].personName) {
        this.tasksUser.push(this.tasksGlobal[i]);
      }
    }

  }

  ngOnChanges(changes: SimpleChanges): void {

    this.tasksUser = [];

    for(let i = 0; i < this.tasksGlobal.length; i++) {
      if(this.tasksGlobal[i].personName == this.inputEmploye &&
        this.inputEmploye != "") {
        this.tasksUser.push(this.tasksGlobal[i]);
        this.emptyTaskUserList = false;
      }
    }

  }

  setSelectedUser() : string {
    if(this.selectedUserServ.selectedEmploye != "") {
      return this.selectedUserServ.selectedEmploye;
    }
    return this.tasksGlobal[0].personName;
  }

  editTask(getTaskUserSelected : TaskInterface[], index : number) {

    //this.taskToEdit[0] = getTaskUserSelected[index];
    this.logService.setIsLoggedIn(true);
    this.taskIndex.setIndex(index)

  }

}
