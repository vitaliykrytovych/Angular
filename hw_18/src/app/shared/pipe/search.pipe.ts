import { Pipe, PipeTransform } from '@angular/core';
import { ICategory } from '../../shared/interfaces/category.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  arrCategory: Array<ICategory> = [];

  transform(arr: Array<ICategory>, searchCategory: string): unknown {
    if (!arr.length){
      return [];
    }
    if (!searchCategory){
      return arr;
    }
    const nEN = arr.filter(elem => elem.nameEN.toLowerCase().includes(searchCategory.toLowerCase()));
    const nUA = arr.filter(elem => elem.nameUA.toLowerCase().includes(searchCategory.toLowerCase()));
    this.arrCategory = [...new Set([...nEN, ...nUA])]; // очистка від задвоєнь
    return this.arrCategory;
  }
}
