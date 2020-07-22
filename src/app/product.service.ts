import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAllProduct(): Product[] {
    const products: Product[] = [];
    const p1 = new Product('001', 'Red Skrit', 1250.57987);
    const p2 = new Product('002', 'White Dress', 890.00);
    const p3 = new Product('003', 'Jeans', 2890.00);
    products.push(p1, p2, p3);
    return products;
  }
}
