import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'product',
})
export class ProductPipe implements PipeTransform {
  transform(products: Product[], name: string): Product[] {
    console.log('>>>' + name);
    return products.filter((p) => p.name.indexOf(name) != -1);
  }
}
