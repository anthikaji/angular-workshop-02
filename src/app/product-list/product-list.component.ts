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
    const p1 = new Product('0001', 'A    01', 130, 'Y', 5);
    const p2 = new Product('0002', 'BB  02', 20.5, 'N', 10);
    const p3 = new Product('0003', 'CCC 03', 30.75, 'Y', 100);
    this.products.push(p1, p2, p3);
  }
}
