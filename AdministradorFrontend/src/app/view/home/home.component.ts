import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ResizeEvent } from 'angular-resizable-element';
import { ServiceService } from 'src/app/Service/service.service';
import { Dashboard } from 'src/app/model/Dashboard';
import {MatDialog} from '@angular/material';
import { DashboarddialogComponent } from 'src/app/UIelement/dialogs/dashboarddialog/dashboarddialog.component';
import { DeleteDashboarddialogComponent } from 'src/app/UIelement/dialogs/delete-dashboarddialog/delete-dashboarddialog.component';
import { UpdateDashboardDialogComponent } from 'src/app/UIelement/dialogs/update-dashboard-dialog/update-dashboard-dialog.component';


export interface DialogData {
  name: String;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dashboard:Dashboard = new Dashboard();
  dashboardlist: Dashboard[];
  newDashboardName: string;
  
  constructor(private router:Router, private service:ServiceService, public dialog:MatDialog) { }
  
  ngOnInit() {
    
    var idUser:number = +localStorage.getItem("loginIdUser");
    this.service.getDashboardbyUser(idUser)
    .subscribe(dashboard=>{
      this.dashboardlist = dashboard;
    });
  }
  
  dashboardRoute(dash:Dashboard):void{
    localStorage.setItem("idDash",dash.idDashboard.toString());
    localStorage.setItem("nameDash",dash.name.toString());
    console.log(dash.idDashboard.toString());
    this.router.navigate(["dashboard"]);
  }
  //connect to api
  
  openUpdateDialog(dashboard:Dashboard){
    const dialogRef = this.dialog.open(UpdateDashboardDialogComponent, {
      data: {name: this.newDashboardName}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The update dialog was closed');
      this.newDashboardName = result;
      console.log(dashboard);
      this.updateDash(dashboard);
    });
  }


  openDeletionDialog(dashboard:Dashboard){
    
    const dialogRef = this.dialog.open(DeleteDashboarddialogComponent, { });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The delete dialog was closed');
      this.newDashboardName = result;
      console.log(dashboard);
      this.deleteDash(dashboard);
    });
    
  }

  public style: object = {};

//verificar que hace este codigo

  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX: number = 50;
    if (
      event.rectangle.width &&
      event.rectangle.height &&
      (event.rectangle.width < MIN_DIMENSIONS_PX ||
        event.rectangle.height < MIN_DIMENSIONS_PX)
    ) {
      return false;
    }
    return true;
  }

  onResizeEnd(event: ResizeEvent): void {
    this.style = {
      position: 'fixed',
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
  }

 // End code for verification 


  openDialog(){
    
    const dialogRef = this.dialog.open(DashboarddialogComponent, {
      data: {name: this.newDashboardName}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.newDashboardName = result;
      console.log(this.newDashboardName);
      this.createDashboard();
    });
    
  }

  createDashboard(){
    var idUser:number = +localStorage.getItem("loginIdUser");
    var str = this.newDashboardName;
    //dashboard2:Dashboard = new Dashboard();
    this.dashboard.name = this.newDashboardName;
    this.dashboard.txUser = 'Pepe';
    this.dashboard.txHost = 'localhost';
    this.dashboard.txDate = Date.now().toString();
    this.dashboard.active = 1;
    this.dashboard.idUser = idUser;
    if (str != null) {
      this.service.createDashboard(this.dashboard)
      .subscribe(data => {
        console.log('Success');
      })
    }else{
      console.log('Fail');
    } 
  }


  deleteDash(dashboard:Dashboard){
    var idUser:number = +localStorage.getItem("loginIdUser");
    dashboard.idUser=idUser;
    console.log(dashboard);
    this.service.deleteDashboard(dashboard)
    .subscribe(data => {
      console.log('Success');
    })

  }

  updateDash(dashboard:Dashboard){
    var idUser:number = +localStorage.getItem("loginIdUser");
    dashboard.idUser=idUser;
    dashboard.name = this.newDashboardName;
    console.log("dashboard");
    console.log(dashboard);
    this.service.updateDashboard(dashboard)
    .subscribe(data => {
      console.log('Success');
    })

  }
 
}