import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Product } from '../model/Product';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  product: Product[];
  constructor(private service: ServiceService, private router:Router,public dialog:MatDialog) { }

  ngOnInit() {
    this.service.getProduct()
    .subscribe(data => {
      this.product = data;
    });
  }
  dashboardRoute():void{
    this.router.navigate(["addProduct"]);
  }
  editRoute(product:Product):void{
    localStorage.setItem("idProd",product.idProduct.toString());
    this.router.navigate(["editProduct"]);
  }

  deleteRoute(product:Product):void{
    localStorage.setItem("idProd",product.idProduct.toString());
    this.router.navigate(["deleteProduct"]);
  }


}
