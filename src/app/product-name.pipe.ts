import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productName'
})
export class ProductNamePipe implements PipeTransform {

  transform(input: string, target: string): unknown {
    target = input.replace(/ /g, '-');
    return target;
  }

}
