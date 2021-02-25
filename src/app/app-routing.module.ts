import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {FacebookGuard} from './guards/facebook.guard';
import {HomeComponent} from './components/home/home.component';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [FacebookGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  }];

@NgModule({
  declarations: [HomeComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatCardModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
