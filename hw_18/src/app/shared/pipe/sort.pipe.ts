import { Pipe, PipeTransform } from '@angular/core';
import { ICategory } from '../../shared/interfaces/category.interface';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: Array<ICategory>, arg: unknown): unknown {
    if (!arr.length) {
      return [];
    }
    if (arg[0] === '') {
      return arr;
    }
    if (arg[0]) {
      return arr.sort((a, b) => {
        const a1 = a[arg[1]].toString().toLowerCase();
        const b1 = b[arg[1]].toString().toLowerCase();
        if (a1 > b1) {
          return 1;
        } else if (a1 < b1) {
          return -1;
        } else {
          return 0;
        }
      });
    } else {
      return arr.sort((a, b) => {
        const a1 = a[arg[1]].toString().toLowerCase();
        const b1 = b[arg[1]].toString().toLowerCase();
        if (a1 > b1) {
          return -1;
        } else if (a1 < b1) {
          return 1;
        } else {
          return 0;
        }
      });
    }
  }
}
