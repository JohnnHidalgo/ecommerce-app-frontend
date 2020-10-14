import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './UIelement/User/add-user/add-user.component';
import { ListUserComponent } from './UIelement/User/list-user/list-user.component';
import { EditUserComponent } from './UIelement/User/edit-user/edit-user.component';
import { HomeComponent } from './view/home/home.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { LoginComponent } from './view/login/login.component';
import { ViewComponent } from './view/view/view.component';
import { DatasetComponent } from './view/dataset/dataset.component';
import { LoginGuard } from './login.guard';
import { NologinGuard } from './nologin.guard';
import { PresentationComponent } from './view/presentation/presentation.component';
import { AddUserSellerComponent } from './UIelement/UserSeller/add-user-seller/add-user-seller.component';
import { ListUserSellerComponent } from './UIelement/UserSeller/list-user-seller/list-user-seller.component';
import { AddUserClientComponent } from './UIelement/UserClient/add-user-client/add-user-client.component';
import { ListUserClientComponent } from './UIelement/UserClient/list-user-client/list-user-client.component';
import { EditUserSellerComponent } from './UIelement/UserSeller/edit-user-seller/edit-user-seller.component';
import { EditUserClientComponent } from './UIelement/UserClient/edit-user-client/edit-user-client.component';
import { StoreComponent } from './store/store.component';
import { AddProductComponent } from './UIelement/Product/add-product/add-product.component';
import { EditProductComponent } from './UIelement/Product/edit-product/edit-product.component';
import { DeleteProductComponent } from './UIelement/Product/delete-product/delete-product.component';
import { DeleteUserSellerComponent } from './UIelement/UserSeller/delete-user-seller/delete-user-seller.component';

const routes: Routes = [
  {path:'',redirectTo:'/presentation',pathMatch: 'full'},
  {path:'home',component:HomeComponent, canActivate:[LoginGuard]},
  {path:'dashboard',component:DashboardComponent, canActivate:[LoginGuard]},
  {path:'addUser',component:AddUserComponent, },
  {path:'listUser',component:ListUserComponent, canActivate:[LoginGuard]},
  {path:'editUser',component:EditUserComponent, canActivate:[LoginGuard]},
  {path:'addUserSeller',component:AddUserSellerComponent, },
  {path:'listUserSeller',component:ListUserSellerComponent, canActivate:[LoginGuard]},
  {path:'editUserSeller',component:EditUserSellerComponent, canActivate:[LoginGuard]},
  {path:'deleteUserSeller',component:DeleteUserSellerComponent, canActivate:[LoginGuard]},
  {path:'addUserClient',component:AddUserClientComponent, },
  {path:'listUserClient',component:ListUserClientComponent, canActivate:[LoginGuard]},
  {path:'editUserClient',component:EditUserClientComponent, canActivate:[LoginGuard]},
  {path: 'login', component:LoginComponent, canActivate:[NologinGuard]},
  {path: 'view', component:ViewComponent, canActivate:[LoginGuard]},
  {path: 'dataset', component:DatasetComponent, canActivate:[LoginGuard]},
  {path: 'presentation', component:PresentationComponent},
  {path: 'store', component:StoreComponent},
  {path: 'addProduct', component:AddProductComponent},
  {path: 'editProduct', component:EditProductComponent},
  {path: 'deleteProduct', component:DeleteProductComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
