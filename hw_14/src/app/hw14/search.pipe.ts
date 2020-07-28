import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from './hw14.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  searchArr: Array<IContact>;
  transform(arrUser: Array<IContact>, searchContact: string): unknown {
    if (!arrUser.length){
      return [];
    }
    if (!searchContact){
      return arrUser;
    }
    const firstNameUser = arrUser.filter(elem => elem.firstName.toLowerCase().startsWith(searchContact.toLowerCase()));
    const lastNameUser = arrUser.filter(elem => elem.lastName.toLowerCase().startsWith(searchContact.toLowerCase()));
    const phoneNumUser = arrUser.filter(elem => elem.phoneNum.startsWith(searchContact));
    this.searchArr = [...new Set([...firstNameUser, ...lastNameUser, ...phoneNumUser])]; // очистка від задвоєнь
    return this.searchArr;
  }
}
