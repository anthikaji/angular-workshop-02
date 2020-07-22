import { Injectable } from '@angular/core';
import { Product, exProduct } from '../model/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProduct(): Observable<Product[]> {
    // const p1 = new Product('01', 'Name 01', 10000.0, 3, true);
    // const p2 = new Product('02', 'Name 02', 200.5, 4, false);
    // const p3 = new Product('03', 'Name 03', 300.75, 5, true);
    // return of([p1, p2, p3]);
    // return this.http.get<Product[]>('http://165.22.255.58:3000/products');
    return of(exProduct);
  }
  getSpecificProduct(code: string): Observable<Product> {
    return of(exProduct.filter((p) => p.code === code)[0]);
  }
}
