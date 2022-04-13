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

  getSelection : string = ''

  selectName(employe : EmployeInterface) {
    this.selectedUserServ.setEmploye(employe.name);
    this.outputValSelected(employe.name);
  }

  selectState(filter : string) {
    this.selectedUserServ.setOtherFilter(filter);
    this.outputValSelected(filter);
  }
  
  outputValSelected(selection : string) {
    //emetto l'evento
    this.getSelection = selection
    this.newitemEvent.emit(selection);
  }

}
