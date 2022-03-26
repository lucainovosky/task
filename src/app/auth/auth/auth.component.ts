import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustomDialogComponent } from 'src/app/dialog/custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;

  @ViewChild('authForm', {static : false}) submitForm !: NgForm;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  sendToBoss() {
    if(this.submitForm.value.user == 'admin'
    && this.submitForm.value.user == 'admin') {
      console.log('giusto');
      this.router.navigate(['boss']);
    } else {
      console.log('sbagliato');

      const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        this.dialog.open(CustomDialogComponent, dialogConfig);

    }
  }


  constructor(private router : Router, private dialog : MatDialog) { }

  ngOnInit(): void {
  }

}
