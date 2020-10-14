import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialogConfig, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {LoginComponent } from '../authentication/login/login.component';
import { ServiceService } from '../Service/service.service';
import { SigninComponent } from '../authentication/signin/signin.component';
import { Cliente } from '../../Shared/Models/Cliente';
import { ElementSchemaRegistry } from '@angular/compiler';

export class ClientData {
  nicknameUser: string;
  password: string;
}


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  mobileQuery: MediaQueryList;
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private service: ServiceService,
    private breakpointObserver: BreakpointObserver, 
    public dialog: MatDialog) {}


    dataClient: Cliente=new Cliente();

    nombreToolbar: string;



  login(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(LoginComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        if ((data)!=undefined) {
          this.nombreToolbar=data;

          this.service.dataClientwithNickname(this.nombreToolbar)
          .subscribe(client=>{
              this.dataClient=client;
              if(client==null){
                console.log('usuario no encontrado');
              }else{
                console.log('usuario encontrado');
              }
          });
          
        } else {
          console.log("No llega nada");
        }
      });
      // , error => this.logService.print(error, LogService.ERROR_MSG));
    // const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = false;
    // dialogConfig.autoFocus = true;
    // dialogConfig.width = "50%";

    // this.dialog.open(LoginComponent, dialogConfig);
    
  }

  signin() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";

    this.dialog.open(SigninComponent, dialogConfig);

  }

}


