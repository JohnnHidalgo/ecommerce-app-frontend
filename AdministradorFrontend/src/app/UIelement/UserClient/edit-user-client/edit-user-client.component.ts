import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-edit-user-client',
  templateUrl: './edit-user-client.component.html',
  styleUrls: ['./edit-user-client.component.css']
})
export class EditUserClientComponent implements OnInit {

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
  UpdateClient(){
  console.log(this.user);
    this.service.updateUserClient(this.user)
    .subscribe(data=>{

      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listUserClient"]);
    })
   
  }
}