import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Product } from '../model/Product';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  product: Product[];
  constructor(private service: ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getProduct()
    .subscribe(data => {
      this.product = data;
    });
  }

  editRoute(product:Product):void{
    localStorage.setItem("idProd",product.idProduct.toString());
    this.router.navigate(["editProduct"]);
  }


}
