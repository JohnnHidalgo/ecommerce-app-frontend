import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-edit-user-seller',
  templateUrl: './edit-user-seller.component.html',
  styleUrls: ['./edit-user-seller.component.css']
})
export class EditUserSellerComponent implements OnInit {
  //TODO: cambiar a nueva entidad
  user: User=new User();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
    this.Edit();  
  }
  //TODO: cambiar a nueva entidad
  Edit(){
    let id = localStorage.getItem("id");
    this.service.getUserId(+id)
    .subscribe(data=>{
      this.user=data;
    })
  }
  //TODO: cambiar a nueva entidad
  Update(user:User){
    this.service.updateUser(user)
    .subscribe(data=>{
      this.user=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }


}
