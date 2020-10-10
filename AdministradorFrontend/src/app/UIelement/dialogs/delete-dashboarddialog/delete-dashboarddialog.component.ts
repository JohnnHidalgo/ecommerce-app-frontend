import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from 'src/app/view/home/home.component';

@Component({
  selector: 'app-delete-dashboarddialog',
  templateUrl: './delete-dashboarddialog.component.html',
  styleUrls: ['./delete-dashboarddialog.component.css']
})

export class DeleteDashboarddialogComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DeleteDashboarddialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
  }

  
}


