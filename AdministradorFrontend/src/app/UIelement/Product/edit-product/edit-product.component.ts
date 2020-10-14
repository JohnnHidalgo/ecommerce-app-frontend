import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product:Product = new Product();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
    this.Edit();  
  }

  Edit(){
    let id = localStorage.getItem("idProd");
    this.service.geProductId(+id)
    .subscribe(data=>{
      this.product=data;
    })
  }


  UpdateProduct(product:Product){
    console.log(this.product);
    this.service.updateProduct(this.product)
    .subscribe(data=>{
      this.product=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["store"]);
    })
  }

}
