import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/authentication/login/login.component';
import { SigninComponent } from './core/authentication/signin/signin.component';
import { HomeComponent } from './modules/home/home.component';
import { ListProductComponent } from './modules/product/list-product/list-product.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'home', component: HomeComponent},
  {path: 'listProduct', component: ListProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
