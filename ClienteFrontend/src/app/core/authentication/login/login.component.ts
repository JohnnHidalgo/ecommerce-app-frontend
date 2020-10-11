import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../../../Shared/Models/Cliente';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nickname: string;
  password: string;
  hide = true;


  constructor() { }

  ngOnInit(): void {
  }


  login(){
  }



}
