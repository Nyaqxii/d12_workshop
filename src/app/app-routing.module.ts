import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AuthGuard } from './auth.guard';
import { PdDetailGuard } from './pd-detail.guard';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { Product3Component } from './product3/product3.component';
import { from } from 'rxjs';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ProductListComponent },
  { path: 'pd-detail/:product', component: ProductDetailComponent },
  { path: 'pd1', component: Product1Component },
  { path: 'pd2', component: Product2Component },
  { path: 'pd3', component: Product3Component },
  {
    path: 'list/:name',
    component: ProductListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'pd-detail/:name',
    component: ProductDetailComponent,
    canActivate: [PdDetailGuard],
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
