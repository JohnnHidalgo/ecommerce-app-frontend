import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../../Shared/Models/Producto';
import { Cliente } from '../../Shared/Models/Cliente';



@Injectable({
  providedIn: "root"
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  client = 'http://localhost:8080/ejemplo01/k1/cliente';
  product = 'http://localhost:8080/ejemplo01/k1/producto';
  person = 'http://localhost:8080/ejemplo01/k1/persona';

  // Client

  loginClient( client: Cliente){
    return this.http.post<Cliente>(this.client + '/loginuserClient' , client);
  }

  RegisterClient( client: Cliente){
    return this.http.post<Cliente>(this.client + '/addUserClient' , client);
  }

  dataClientwithNickname(nickname : string){
    return this.http.get<Cliente>(this.person + '/usernick/'+nickname);
  }

  editUser(client:Cliente){
    return this.http.put<Cliente>(this.client+"/editUserClient", client);
  }

  // Product
  addProductToCart( product: Producto){
    return this.http.post<Producto>(this.client + '/addUserClient' , product);
  }

  listProduct(){
    return this.http.get<Producto[]>(this.product+"/productlist");
  }

}
