import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductNamePipe } from './product-name.pipe';
import { from } from 'rxjs';
import { ProductPipe } from './product.pipe';
import { HttpClientModule } from '@angular/common/http';
import { RatingComponent } from './rating/rating.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { Product3Component } from './product3/product3.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent,
    ProductNamePipe,
    ProductPipe,
    RatingComponent,
    ProductDetailComponent,
    Product1Component,
    Product2Component,
    Product3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
