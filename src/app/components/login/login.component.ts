<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
=======
import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {RegisterComponent} from '../register/register.component';
>>>>>>> origin/master

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
<<<<<<< HEAD
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
=======
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  subs: Subscription[] = [];

  constructor(

  ) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
>>>>>>> origin/master
  }

  login(form: NgForm): void {

  }

  openRegister(): void {

  }
}
