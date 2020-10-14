import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

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

  DeleteProduct(product:Product){
    console.log(this.product);
    this.service.deleteProduct(this.product)
    .subscribe(data=>{
      this.product=data;
      alert("Se Eliminó con Exito...!!!");
      this.router.navigate(["store"]);
    })
  }
}
