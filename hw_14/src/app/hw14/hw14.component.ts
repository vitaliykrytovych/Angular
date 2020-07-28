import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IContact } from './hw14.interface';
import { Contacts } from './hw14.model';

@Component({
  selector: 'app-hw14',
  templateUrl: './hw14.component.html',
  styleUrls: ['./hw14.component.scss']
})
export class Hw14Component implements OnInit {
  @Output() fromChild = new EventEmitter<string>();
  @Input() passArr: Array<IContact>;
  arrUser: Array<IContact>;
  editText: boolean; // заголовок вікна редагування/внесення даних
  visForm = false; // видимість форми введення/зміни даних
  passH1 = 'My phone book!';
  firstNameInput = '';
  lastNameInput = '';
  phoneNumInput = '';
  searchContact = ''; // для пошуку - введений текст - поле input
  sortContact: any = ''; // для сортування
  clickElem: string; // для сортування - клікнутий th
  indexUs: any = ''; // для ідентифікації - чи вноситься новий юзер, чи відбувається редагування наявного
  firstArrows: any = ''; // видимість стрілок firstName
  lastArrows: any = ''; // видимість стрілок lastName
  phoneArrows: any = ''; // видимість стрілок phoneNum

  constructor() { }

  ngOnInit(): void {
    this.fromChild.emit(this.passH1);
    this.arrUser = this.passArr;
  }
  visualForm(): void {
    this.editText = true;
    this.visForm = true;
  }
  addContact(): void {
    if (this.indexUs !== '') { // якщо відбувається редагування наявного юзера
      this.arrUser[this.indexUs].firstName = this.firstNameInput;
      this.arrUser[this.indexUs].lastName = this.lastNameInput;
      this.arrUser[this.indexUs].phoneNum = this.phoneNumInput;
      this.clea();
      this.visForm = false;
    } else if (this.firstNameInput && this.lastNameInput && this.phoneNumInput) { // вноситься новий юзер
      this.arrUser.unshift(new Contacts(this.firstNameInput, this.lastNameInput, this.phoneNumInput));
      this.clea();
      this.visForm = false;
    }
  }
  addX(): void {
    this.visForm = false;
  }
  deleteContact(index): void {
    this.arrUser.splice(index, 1);
  }
  editContact(index): void {
    this.editText = false;
    this.indexUs = index;
    this.visForm = true;
    this.firstNameInput = this.arrUser[index].firstName;
    this.lastNameInput = this.arrUser[index].lastName;
    this.phoneNumInput = this.arrUser[index].phoneNum;
  }
  changeStatus(objTask): void {
    objTask.taskStatus = !objTask.taskStatus;
  }
  clea(): void { // обнулення
    this.firstNameInput = '';
    this.lastNameInput = '';
    this.phoneNumInput = '';
    this.indexUs = '';
  }
  sortFunc(clickTh): void {
    if (this.clickElem !== clickTh) { // перший клік по елементу
      this.sortContact = true;
    }
    if (this.clickElem === clickTh) { // повторний клік по тому ж елементу
      if (!this.sortContact) {
        this.sortContact = true;
      } else {
        this.sortContact = false;
      }
    }
    this.clickElem = clickTh;
    this.arrowsVis(clickTh); // робота стрілок
  }
  arrowsVis(elem): void {
    switch (elem) {
      case 'firstName':
        if (!this.firstArrows) {
          this.firstArrows = true;
        } else {
          this.firstArrows = false;
        }
        this.lastArrows = '';
        this.phoneArrows = '';
        break;
      case 'lastName':
        if (!this.lastArrows) {
          this.lastArrows = true;
        } else {
          this.lastArrows = false;
        }
        this.firstArrows = '';
        this.phoneArrows = '';
        break;
      case 'phoneNum':
        if (!this.phoneArrows) {
          this.phoneArrows = true;
        } else {
          this.phoneArrows = false;
        }
        this.firstArrows = '';
        this.lastArrows = '';
        break;
    }
  }
}
