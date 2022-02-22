import { Component, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-emplye-detail',
  templateUrl: './emplye-detail.component.html',
  styleUrls: ['./emplye-detail.component.css']
})
export class EmplyeDetailComponent implements OnInit {

  @Input() inputEmploye : string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
