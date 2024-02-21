import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import { HeaderCompanyComponent } from './header-company/header-company.component';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: DashComponent
  }
];

@NgModule({
  declarations: [
    DashComponent,
    HeaderCompanyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule
  ]
})
export class DashModule { }
