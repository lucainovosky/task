import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.css']
})
export class CustomDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CustomDialogComponent>,
    ) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
}

}
