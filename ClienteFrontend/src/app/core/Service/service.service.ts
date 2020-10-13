import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../../Shared/Models/Producto';
import { Client } from '../../Shared/Models/Cliente';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  client = 'http://localhost:8080/ejemplo01/k1/client';
  product = 'http://localhost:8080/ejemplo01/k1/product';

  // Client

  loginClient( client: Client){
    return this.http.post<Client>(this.client + '/loginuserClient' , client);
  }

  RegisterClient( client: Client){
    return this.http.post<Client>(this.client + '/addUserClient' , client);
  }




  // Product

}
