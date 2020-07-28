import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from './hw14.interface';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(arrUser: Array<IContact>, arg: unknown): unknown {
    if (!arrUser.length) {
      return [];
    }
    if (arg[0] === '') {
      return arrUser;
    }
    if (arg[0]) {
      return arrUser.sort((a, b) => {
        const a1 = a[arg[1]];
        const b1 = b[arg[1]];
        if (a[arg[1]].toLowerCase() > b[arg[1]].toLowerCase()) {
          return 1;
        } else if (a[arg[1]].toLowerCase() < b[arg[1]].toLowerCase()) {
          return -1;
        } else {
          return 0;
        }
      });
    } else {
      return arrUser.sort((a, b) => {
        const a1 = a[arg[1]];
        const b1 = b[arg[1]];
        if (a[arg[1]].toLowerCase() > b[arg[1]].toLowerCase()) {
          return -1;
        } else if (a[arg[1]].toLowerCase() < b[arg[1]].toLowerCase()) {
          return 1;
        } else {
          return 0;
        }
      });
    }
  }
}
