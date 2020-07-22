import { Injectable } from '@angular/core';
import { Product } from './model/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  // getAllProduct(): Product[] {
  //   const product = [];
  //   const p1 = new Product('0001', 'A    01', 130, 'Y', 5);
  //   const p2 = new Product('0002', 'BB  02', 20.5, 'N', 10);
  //   const p3 = new Product('0003', 'CCC 03', 30.75, 'Y', 100);
  //   return [p1, p2, p3];
  //}
  getAllProoduct(): Observable<Product[]> {
    return this.http.get<Product[]>('http://165.22.255.58:3000/products');
  }
}
