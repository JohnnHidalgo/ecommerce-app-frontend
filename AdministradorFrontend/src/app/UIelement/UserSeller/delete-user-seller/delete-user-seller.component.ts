import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-delete-user-seller',
  templateUrl: './delete-user-seller.component.html',
  styleUrls: ['./delete-user-seller.component.css']
})
export class DeleteUserSellerComponent implements OnInit {

  user: User=new User();
  constructor(private router:Router,private service:ServiceService) { }

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
  DeleteSeller(){
  console.log(this.user);
    this.service.deleteUserSeller(this.user)
    .subscribe(data=>{
      //this.user=data;

      alert("Se Eliminó con Exito...!!!");
      this.router.navigate(["listUserSeller"]);
    })  
  }


}
