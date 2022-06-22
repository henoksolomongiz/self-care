import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  Store } from '@ngrx/store';
import { authLogin } from 'src/app/core/auth-store/actions';
import { State } from '../../core/auth-store/state';
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor( public store: Store<State>,
    public formBuilder: FormBuilder,
    private router: Router) { }
  form = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  ngOnInit(): void {
  }

  login(){
    this.store.dispatch(authLogin({ username: this.form.get('username')?.value,password: this.form.get('username')?.value}));
  }

}
