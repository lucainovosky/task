import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SelectedUserService } from 'src/app/services/selected-user.service';

@Component({
  selector: 'app-emplye-detail',
  templateUrl: './emplye-detail.component.html',
  styleUrls: ['./emplye-detail.component.css']
})
export class EmplyeDetailComponent implements OnInit, OnChanges {

  @Input() inputEmploye : string = '';

  constructor(private selectedUserServ : SelectedUserService ) { }

  ngOnInit(): void {
    if(this.selectedUserServ.selection == "") {
      this.setTitle(true);
    } else {
      this.setTitle(false);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(this.inputEmploye != "") {
        this.setTitle(false);
      }
  }

  setTitle(initialState : boolean) {
    if(initialState) {
      this.inputEmploye = "Please select an employe or access to the Boss page to add a task!"
    } else {
      this.inputEmploye = this.selectedUserServ.selection + " tasks list"
    }
  }

}
