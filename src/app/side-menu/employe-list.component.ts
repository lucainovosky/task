import { Component, OnInit } from '@angular/core';
import { EmployeInterface } from '../employe-shared-functions/EmployeInterface';
import { Employes } from '../employe-shared-functions/list-employes';
import { State } from '../employe-shared-functions/list-state';
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

  selectedEmploye ?: EmployeInterface;

  employes = Employes;

  states = State;

  outputEmploye : string = "";

  selectedEmployeIndex = -1;
  selectedStateIndex = -1;

  onSelect(employe : EmployeInterface):void {
    this.outputEmploye = employe.name;
    this.selectedUserServ.setEmploye(this.outputEmploye);
    this.onOutputEmploye();
  }

  onOutputEmploye() {
    //emetto l'evento
    this.newitemEvent.emit(this.outputEmploye);
  }

  filterTasks(filter : string) {
    this.selectedUserServ.setOtherFilter(filter);
    this.newitemEvent.emit(filter);
  }

}
