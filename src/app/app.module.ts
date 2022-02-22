import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { EmployeListComponent } from './employe-list/employe-list.component';
import { EmplyeDetailComponent } from './emplye-detail/emplye-detail.component';
import { EmployeAreaComponent } from './employe-area/employe-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeListComponent,
    EmplyeDetailComponent,
    EmployeAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
