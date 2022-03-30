import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SelectedUserService } from 'src/app/services/selected-user.service';
import { DefaultTasks } from '../../task-shared/DefaultTasks';
import { TaskInterface } from '../../task-shared/task-interface';
import { TaskSharedService } from '../../services/task-shared.service';
import { UserTasksList } from 'src/app/task-shared/UserTasksList';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnChanges {

  tasksGlobal : TaskInterface[] = DefaultTasks;
  tasksUser : TaskInterface[] = UserTasksList;

  //from employe-list
  @Input() inputEmploye ?: string;

  constructor(
    private sharedServTask : TaskSharedService,
    private selectedUserServ : SelectedUserService ) { }

  ngOnInit(): void {
    this.inputEmploye = this.setSelectedUser();

    //subscribe to new task added with observable
    this.sharedServTask.sharedTasks.subscribe(message => this.tasksGlobal = message);

    for(let i = 0; i < this.tasksGlobal.length; i++) {
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
      }
    }
  }

  setSelectedUser() : string {
    if(this.selectedUserServ.selectedEmploye != "") {
      return this.selectedUserServ.selectedEmploye;
    }
    return this.tasksGlobal[0].personName;
  }

}
