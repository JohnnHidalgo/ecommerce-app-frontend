import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from 'src/app/view/home/home.component';

@Component({
  selector: 'app-update-dashboard-dialog',
  templateUrl: './update-dashboard-dialog.component.html',
  styleUrls: ['./update-dashboard-dialog.component.css']
})
export class UpdateDashboardDialogComponent implements OnInit {

  name: String;

  constructor(public dialogRef: MatDialogRef<UpdateDashboardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  onCloseDialog() {
    this.dialogRef.close();
  }

}
