import { Component, OnInit } from '@angular/core';
import { Product } from './../model/product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor() {}

  ngOnInit(): void {
    const p1 = new Product('0001', 'AA', 130.0, 'Y', 5);
    const p2 = new Product('0002', 'BBB', 20.5, 'N', 10);
    const p3 = new Product('0003', 'CCCC', 30.75, 'Y', 100);
    this.products.push(p1, p2, p3);
  }
}
