import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { EMPLOYES } from '../list-employes';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent implements OnInit {

  selectedEmploye ?: Employe; 

  employes = EMPLOYES;

  onSelect(employe : Employe):void {
    this.selectedEmploye = employe;
    console.log(this.selectedEmploye.name);
  }

  constructor() { }

  ngOnInit(): void {
  }  

}
