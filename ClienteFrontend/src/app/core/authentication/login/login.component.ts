import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../../../Shared/Models/Cliente';
import { ServiceService } from '../../Service/service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nickname: string;
  password: string;
  hide = true;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  login(): void{
    var logClient = new Client();
    logClient.nicknameUser = this.nickname;
    logClient.password = this.password;

    if (logClient.nicknameUser == 'Alexander1119' && logClient.password == 'Alexander1119' ){
        console.log('Bienvenido ' + this.nickname);
    }
    // console.log(logClient);
    // this.service.loginClient(logClient)
    // .subscribe(data => {
    //   if (data != null) {
    //     console.log('Bienvenido ' + this.nickname);
    //   }else{
    //     console.log('Error:  Los datos no son correctos');
    //   }
    // });

  }


}
