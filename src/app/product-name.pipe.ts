import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './model/product';

@Pipe({
  name: 'productName',
})
export class ProductNamePipe implements PipeTransform {
  // transform(product: Product[], name: string): unknown {
  //   return product.filter((p) => p.name.indexOf(name) !== -1);
  //   }
  transform(input: string, target: string): unknown {
    return input.replace(/\s+/g, target);
    //.split('').join(target);
  }
}
