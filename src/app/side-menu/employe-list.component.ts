import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe-shared-functions/employe';
import { Employes } from '../employe-shared-functions/list-employes';
import { EventEmitter, Output } from '@angular/core';
import { SelectedUserService } from 'src/app/services/selected-user.service';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent implements OnInit {

  constructor( private selectedUserServ : SelectedUserService) { }

  ngOnInit(): void {
  }

  //creo un output da mandare al employe-detail
  @Output() newitemEvent = new EventEmitter<string>();

  selectedEmploye ?: Employe;

  employes = Employes;

  outputEmploye : string = "";

  onSelect(employe : Employe):void {
    this.outputEmploye = employe.name;
    this.selectedUserServ.setEmploye(this.outputEmploye);
    this.onOutputEmploye();
  }

  onOutputEmploye() {
    //emetto l'evento
    this.newitemEvent.emit(this.outputEmploye);
  }

  filterTasks(filter : string) {
    switch(filter) {
      case 'all':
        this.newitemEvent.emit("pippo");
        this.selectedUserServ.setOtherFilter();
        console.log('all');
        break;
      case 'progress':
        console.log('progress');
        break;
      case 'blocked':
        console.log('blocked');
        break;
      case 'ended':
        console.log('ended');
        break;
    }
  }

}
