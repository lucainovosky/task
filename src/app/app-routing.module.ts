import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeAreaComponent } from './employe-area/employe-area.component';
import { BossComponent } from './boss/boss.component';
import { AuthComponent } from './boss/auth/auth.component';

const routes: Routes = [
  {path: 'employe', component: EmployeAreaComponent},
  {path: 'boss', component: BossComponent},
  {path: 'auth', component: AuthComponent},
  {path: '',   redirectTo: '/employe', pathMatch: 'full' }, // redirect to `employe`
  {path: '*', component: EmployeAreaComponent}//wildcard per path non gestiti, da lasciare alla fine dell'array
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
