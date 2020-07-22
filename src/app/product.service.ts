import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<Product[]> {

    const p1 = new Product('0001', 'Black Dress', 2000);
    const p2 = new Product('0002', 'White Shirt', 1250.25);
    const p3 = new Product('0003', 'Red Skrit', 890.80);
    return of([p1, p2, p3]);

    //return this.http.get<Product[]>(
    //  'http://165.22.255.58:3000/products'
    //);
  }
}
