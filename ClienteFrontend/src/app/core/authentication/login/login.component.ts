import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../../Shared/Models/Cliente';
import { ServiceService } from '../../Service/service.service';
import { FormGroup, FormControl } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private service:ServiceService,private router: Router,private snackBar: MatSnackBar) { }

  nickname: string;
  password: string;
  hide = true;

  cliente = new FormGroup({
    nickname: new FormControl(''),
    password: new FormControl('')
  });

  client: Cliente = new Cliente();

  clienReturn: Cliente;
  ngOnInit(): void {
  }


  login(){
    console.log(this.cliente.value);

    this.client.nicknameUser = this.nickname;
    this.client.password = this.password;

    console.log(this.cliente.value);
    this.service.loginClient(this.client)
    .subscribe(data => {
      this.clienReturn=data;
      if (data != null) {
        console.log('Bienvenido ' + this.clienReturn.lastName);
      }else{
        console.log('Error:  Los datos no son correctos');
      }
    });

  }


}
