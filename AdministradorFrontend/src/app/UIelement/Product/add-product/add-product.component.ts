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

  CreateProduct(product:Product){
    
    console.log(this.product);
    console.log("product");
    product.nameImage = "Image";
    product.urlImage = "https://www.kenwoodworld.com/Global/Countries/Spain/Carnes/31_PAN-AL-AGUA-HEAD.jpg";
    this.product.nameImage="Imagen";
    this.product.urlImage="https://www.kenwoodworld.com/Global/Countries/Spain/Carnes/31_PAN-AL-AGUA-HEAD.jpgImagen";
    this.service.createProduct(this.product)
    .subscribe(data=>{
      alert("Creación Exitosa");
      this.router.navigate(["store"]);
    })
  }
}