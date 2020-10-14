import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from 'src/app/view/home/home.component';

@Component({
  selector: 'app-addpermisodialog',
  templateUrl: './addpermisodialog.component.html',
  styleUrls: ['./addpermisodialog.component.css']
})
export class AddpermisodialogComponent implements OnInit {

  name: String;
  constructor(public dialogRef: MatDialogRef<AddpermisodialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  onCloseDialog() {
    this.dialogRef.close();
  }
}
