import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'g'
})
export class GPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
