import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from 'src/app/view/home/home.component';

@Component({
  selector: 'app-deleteviewdialog',
  templateUrl: './deleteviewdialog.component.html',
  styleUrls: ['./deleteviewdialog.component.css']
})
export class DeleteviewdialogComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(DeleteviewdialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit() {
  }

}