import { Component, OnInit, Inject } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { LoginClient } from '../../../Shared/Models/login';
import { Cliente } from '../../../Shared/Models/Cliente';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private service: ServiceService,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

   password: string;
   hide = true;

  // cliente = new FormGroup({
  //   nickname: new FormControl(''),
  //   password: new FormControl('')
  // });

  // client: Cliente = new Cliente();
  ngOnInit(): void {
    
  }


  client =new Cliente();

  clienReturn= new Cliente();

 login(){


    this.client.nicknameUser = this.data;
    this.client.password = this.password;

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
  cancelar() {
  
    this.dialogRef.close();
  }
}
