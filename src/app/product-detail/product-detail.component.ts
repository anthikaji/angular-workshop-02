import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../model/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(public service: ProductService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const productId: string = this.route.snapshot.paramMap.get('code');
    this.service.getSpecificProduct(productId).subscribe((p) => {
      this.product = p;
    });
    console.log(this.product);
  }
}
