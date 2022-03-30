import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { EmployeListComponent } from './employe-area/employe-list/employe-list.component';
import { EmplyeDetailComponent } from './employe-area/employe-detail/emplye-detail.component';
import { EmployeAreaComponent } from './employe-area/employe-area.component';
import { BossComponent } from './boss/boss.component';
import { TaskFormComponent } from './boss/task-form/task-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskListComponent } from './employe-area/task-list/task-list.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CustomDialogComponent } from './dialog/custom-dialog/custom-dialog.component';
import { AuthComponent } from './boss/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeListComponent,
    EmplyeDetailComponent,
    EmployeAreaComponent,
    BossComponent,
    TaskFormComponent,
    TaskListComponent,
    AuthComponent,
    CustomDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
