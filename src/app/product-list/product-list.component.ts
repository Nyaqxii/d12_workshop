import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product'
import { empty, from } from 'rxjs';
import { ProductService } from './../product.service';

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
    this.products = this.service.getAllProduct();


  }

}
