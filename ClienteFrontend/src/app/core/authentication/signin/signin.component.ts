import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  hide = true;
  constructor(private service:ServiceService,public dialog:MatDialog) { }

  ngOnInit(): void {
  }

}
