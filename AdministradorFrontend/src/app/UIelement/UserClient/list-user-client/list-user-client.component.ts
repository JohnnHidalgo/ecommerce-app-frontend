import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-list-user-client',
  templateUrl: './list-user-client.component.html',
  styleUrls: ['./list-user-client.component.css']
})
export class ListUserClientComponent implements OnInit {

  user: User[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getUserClient()
      .subscribe(data => {
        this.user = data;
      });
  }

  EditUserClient(user:User):void{
    localStorage.setItem("id",user.idUser.toString());
    this.router.navigate(["editUserClient"])
  }

  DeleteClient(user:User){
    this.service.deleteUser(user)
    .subscribe(data=>{
      this.user=this.user.filter(p=>p!==user);
      alert("Usuario eliminado...");
    })
  }

}