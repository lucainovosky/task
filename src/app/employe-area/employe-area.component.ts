import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employe-area',
  templateUrl: './employe-area.component.html',
  styleUrls: ['./employe-area.component.css']
})
export class EmployeAreaComponent implements OnInit {

  itemSelected : string = "";

  addItem(newItem : string) {
    this.itemSelected = newItem;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
