import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialogConfig, MatDialog, MatDialogRef } from '@angular/material/dialog';
import {LoginComponent } from '../authentication/login/login.component';
import { ServiceService } from '../Service/service.service';
import { SigninComponent } from '../authentication/signin/signin.component';



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

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog) {}

  login() {
    
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";

    this.dialog.open(LoginComponent, dialogConfig);

  }

  signin() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";

    this.dialog.open(SigninComponent, dialogConfig);


    

  }
}


