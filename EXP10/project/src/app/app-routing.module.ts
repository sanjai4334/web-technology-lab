import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { ProductService } from './product.service';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:"navbar", component:NavbarComponent},
  {path:"cart", component:CartComponent},
  {path:"products", component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
