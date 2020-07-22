import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filterData: '';
  constructor() { }

  ngOnInit(): void {
    const p1 = new Product('001', 'Red Skrit', 1250.57987);
    const p2 = new Product('002', 'White Dress', 890.00);
    const p3 = new Product('003', 'Jeans', 2890.00);
    this.products.push(p1, p2, p3);


  }

}
