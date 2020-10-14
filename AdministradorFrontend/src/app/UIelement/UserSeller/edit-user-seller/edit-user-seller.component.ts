import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { User } from 'src/app/model/User';
import {MatDialog} from '@angular/material';
import { AddpermisodialogComponent } from '../../dialogs/addpermisodialog/addpermisodialog.component';
import { Privilegios } from 'src/app/model/Privilegios';
import { arrayClear } from 'igniteui-angular-core';

export interface DialogData {
  name: String;
}
@Component({
  selector: 'app-edit-user-seller',
  templateUrl: './edit-user-seller.component.html',
  styleUrls: ['./edit-user-seller.component.css']
})
export class EditUserSellerComponent implements OnInit {
  user: User=new User();
  privilegio:Privilegios = new Privilegios();
  privilegioName: string;
  constructor(private router:Router,private service:ServiceService, public dialog:MatDialog) { }

  ngOnInit() {
    this.Edit();  
  }
  Edit(){
    let id = localStorage.getItem("id");
    console.log(id)
    this.service.getUserId(+id)
    .subscribe(data=>{
      this.user=data;
    })
  }
  UpdateSeller(){
  console.log(this.user);
    this.service.updateUserSeller(this.user)
    .subscribe(data=>{
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listUserSeller"]);
    }) 
  }
  
  openPermisosDialog(idUser:number){
    const dialogRef = this.dialog.open(AddpermisodialogComponent, {
      data: {name: this.privilegioName}
    });
    var idUser:number = +localStorage.getItem("loginIdUser");
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.privilegioName=result;
      console.log("this.privilegioName");
      console.log(this.privilegioName);

      const substring = "Admin";
      console.log(this.privilegioName.includes(substring));

      if (this.privilegioName.includes(substring)){
        this.privilegio.idpermiso=1;
      }
      else{
        this.privilegio.idpermiso=2;
      }
      this.privilegio.active=1;
      this.privilegio.iduserseler=idUser;
      
      this.createPermiso(this.privilegio);
    });
    
  }

  createPermiso(privilegio:Privilegios){

    console.log("this.privilegioName");
    console.log(this.privilegioName);
    console.log(this.privilegio);
    var privilegioList = new Array();
    privilegioList.push(this.privilegio);
    console.log(privilegioList);
    
    this.service.privilegioUserSeller(privilegioList)
    .subscribe(data=>{
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listUserSeller"]);
    })  

  }

}