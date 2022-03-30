import { Component, OnInit } from '@angular/core';
import { Employe } from '../../employe-shared-functions/employe';
import { Employes } from '../../employe-shared-functions/list-employes';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent implements OnInit {

  //creo un output da mandare al employe-detail
  @Output() newitemEvent = new EventEmitter<string>();

  selectedEmploye ?: Employe;

  employes = Employes;

  outputEmploye : string = "";

  onSelect(employe : Employe):void {
    this.outputEmploye = employe.name;
    this.onOutputEmploye();
  }

  onOutputEmploye() {
    //emetto l'evento
    this.newitemEvent.emit(this.outputEmploye);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
