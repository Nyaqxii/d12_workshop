import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product'
import { empty, from } from 'rxjs';
import { ProductService } from './../product.service';
type Products = Product[];
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filterData = '';
  constructor(public service: ProductService) { }

  ngOnInit(): void {
    this.getAll();
  }
  //getAll(): void {
  // this.service.getAllProduct().subscribe((products) => {
  //  return (this.products = products);
  // });
  //}

  /*getAll(): void {
    this.service
      .getAllProduct()
      .subscribe((allProduct) => (this.products = allProduct));
  }*/

  onRatingClicked(message: string): void {
    // console.log(message);
    alert(message);
  }

  getAll(): void {
    this.service.getAllProduct().subscribe((products) => {
      const Product: Product[] = [];
      products.forEach((product) => {
        Product.push(this.newProduct(product));
      });
      return (this.products = products);
    });
  }
  newProduct(Object: any): Product {
    return new Product(
      Object.code,
      Object.name,
      Object.price,
    );
  }
  onProductDetail(product: Product): void {
    this.service.saveProductDetail(product);
  }

}
