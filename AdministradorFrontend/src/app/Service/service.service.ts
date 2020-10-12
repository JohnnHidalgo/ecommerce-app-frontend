import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Dashboard } from '../model/Dashboard';
import { View } from '../model/View';
import { Attribute } from '../model/Attribute';
import { Graphic } from '../model/Graphic';
import { GraphicType } from '../model/GraphicType';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  
  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/ejemplo01//k1/persona/';

  UrlPersonaSeller='http://localhost:8080/ejemplo01/k1';
  UrlPersonaClient='http://localhost:8080/ejemplo01/k1';

  dashboardUrl='http://localhost:8080/ejemplo01/k1/dashboard';
  viewUrl='http://localhost:8080/ejemplo01/k1/view/';
  attributeUrl='http://localhost:8080/ejemplo01/k1/atribute/';
  graphicUrl='http://localhost:8080/ejemplo01/k1/graphic/';
  graphicTypeUrl='http://localhost:8080/ejemplo01/k1/tipo_grafico/';




  UrlProduct='http://localhost:8080/ejemplo01/k1/producto';


  getUser(){  
    return this.http.get<User[]>(this.Url);
  }
  createUser(user:User){
    return this.http.post<User>(this.Url+"/add/",user);
  }
  getUserId(id:number){
    return this.http.get<User>(this.Url+"/idUser/"+id);
  }
  updateUser(user:User){
    return this.http.put<User>(this.Url+"/"+user.idUser,user);
  }
  deleteUser(user:User){
    //borrado logico
    return this.http.put<User>(this.Url+"/"+user.idUser,user);
    //borrado fisico
    //return this.http.delete<User>(this.Url+"/"+user.id);
  }

  loginUser(user:User){
    return this.http.post<User>(this.Url+"login",user);
    console.log(user);
  }
  logingetUser(nickname:String){
    return this.http.get<User>(this.Url+"/userNick/"+nickname);
  }






  createUserSeller(user:User){
    return this.http.post<User>(this.UrlPersonaSeller+"/persona/addUserSeller/",user);
  }
  getUserSeller(){  
    return this.http.get<User[]>(this.UrlPersonaSeller+"/seller/userselerlist");
  }
  updateUserSeller(user:User){
    return this.http.put<User>(this.UrlPersonaSeller+"/persona/editUserSeller",user);
  }

  getUserClient(){  
    return this.http.get<User[]>(this.UrlPersonaClient+"/cliente/userclientlist");
  }
  updateUserClient(user:User){
    return this.http.put<User>(this.UrlPersonaSeller+"/cliente/editUserClient",user);
  }
  //Product
  createProduct(product:Product){
    return this.http.post<Product>(this.UrlProduct+"/idtienda/1",product);
  }


  getDashboardbyUser(idUser:number){
    return this.http.get<Dashboard[]>(this.dashboardUrl+"/userdash/"+idUser);
  }

  getDashboard(){  
    return this.http.get<Dashboard[]>(this.dashboardUrl);
  }
  createDashboard(dashboard:Dashboard){
    return this.http.post<Dashboard>(this.dashboardUrl+"/add/",dashboard);
  }
  getDashboardId(id:number){
    return this.http.get<Dashboard>(this.dashboardUrl+"/"+id);
  }
  updateDashboard(dashboard:Dashboard){
    return this.http.put<Dashboard>(this.dashboardUrl+"/"+dashboard.idDashboard,dashboard);
  }
  deleteDashboard(dashboard:Dashboard){
    //borrado logico
    return this.http.put<Dashboard>(this.dashboardUrl+"/"+dashboard.idDashboard,dashboard);
    //borrado fisico
    //return this.http.delete<User>(this.Url+"/"+user.id);
  }


  getView(){
    return this.http.get<View[]>(this.viewUrl);
  }

  getViewbyDashboard(idDash:number){
    return this.http.get<View[]>(this.viewUrl+"/dashviews/"+idDash);
  }
  createView(view:View){
    return this.http.post<View>(this.viewUrl+"/add/",view);
  }
  getViewId(id:number){
    return this.http.get<View>(this.viewUrl+"/"+id);
  }
  updateView(view:View){
    return this.http.put<View>(this.viewUrl+"/"+view.idView,view);
  }
  deleteView(view:View){
    //borrado logico
    return this.http.put<View>(this.viewUrl+"/"+view.idView,view);
    //borrado fisico
    //return this.http.delete<User>(this.Url+"/"+user.id);
  }


  getAttribute(){
    return this.http.get<Attribute[]>(this.attributeUrl);
    //return this.http.get<View[]>(this.viewUrl);
  }
  createAttribute(attribute:String[]){
    return this.http.post<Attribute>(this.attributeUrl+"/addAtributeArray/",attribute);
  }
  getAttributeId(id:number){
    return this.http.get<Attribute>(this.attributeUrl+"/"+id);
  }
  updateAttribute(attribute:Attribute){
    return this.http.put<Attribute>(this.attributeUrl+"/"+attribute.idAttribute,attribute);
  }
  deleteAttribute(attribute:Attribute){
    //borrado logico
    return this.http.put<Attribute>(this.attributeUrl+"/"+attribute.idAttribute,attribute);
    //borrado fisico
    //return this.http.delete<User>(this.Url+"/"+user.id);
  }


  getGraphic(){
    return this.http.get<Graphic[]>(this.graphicUrl);
    //return this.http.get<View[]>(this.viewUrl);
  }
  createGraphic(graphic:Graphic){
    return this.http.post<Graphic>(this.graphicUrl+"/add/",graphic);
  }
  getGraphicId(id:number){
    return this.http.get<Graphic>(this.graphicUrl+"/"+id);
  }
  updateGraphic(graphic:Graphic){
    return this.http.put<Graphic>(this.graphicUrl+"/"+graphic.idGraphic,graphic);
  }
  deleteGraphic(graphic:Graphic){
    //borrado logico
    return this.http.put<Graphic>(this.graphicUrl+"/"+graphic.idGraphic,graphic);
    //borrado fisico
    //return this.http.delete<User>(this.Url+"/"+user.id);
  }

  
  getGraphicType(){
    return this.http.get<GraphicType[]>(this.graphicTypeUrl);
    //return this.http.get<View[]>(this.viewUrl);
  }
  createGraphicType(graphicType:GraphicType){
    return this.http.post<GraphicType[]>(this.graphicTypeUrl,graphicType);
  }
  getGraphicTypeId(id:number){
    return this.http.get<GraphicType>(this.graphicTypeUrl+"/"+id);
  }
  updateGraphicType(graphicType:GraphicType){
    return this.http.put<GraphicType>(this.graphicTypeUrl+"/"+graphicType.idGraphicType,graphicType);
  }
  deleteGraphicType(graphicType:GraphicType){
    //borrado logico
    return this.http.put<GraphicType>(this.graphicTypeUrl+"/"+graphicType.idGraphicType,graphicType);
    //borrado fisico
    //return this.http.delete<User>(this.Url+"/"+user.id);
  }


}