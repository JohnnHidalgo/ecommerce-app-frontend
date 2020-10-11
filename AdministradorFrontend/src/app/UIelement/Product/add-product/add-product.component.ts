import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product:Product = new Product();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  selectedValue: string;
  CreateProduct(product:Product){
    this.service.createProduct(this.product)
    .subscribe(data=>{
      alert("Creación Exitosa");
      this.router.navigate(["listUser"]);
    })
  }

}
