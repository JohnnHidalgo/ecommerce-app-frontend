import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-add-user-seller',
  templateUrl: './add-user-seller.component.html',
  styleUrls: ['./add-user-seller.component.css']
})
export class AddUserSellerComponent implements OnInit {

  // TODO: CAbiar User por nueva entidad de usuario
  user:User = new User();
  constructor(private router:Router, private service:ServiceService) { }
  ngOnInit() {
  }

  //TODO: Cambiar a la nueva entidad
  CreateUser(user:User){
    this.service.createUserSeller(this.user)
    .subscribe(data=>{
      alert("Creación Exitosa");
      this.router.navigate(["listUserSeller"]);
    })
  }


}
