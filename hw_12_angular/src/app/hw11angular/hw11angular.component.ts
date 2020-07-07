import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw11angular',
  templateUrl: './hw11angular.component.html',
  styleUrls: ['./hw11angular.component.scss'],
})
export class Hw11angularComponent implements OnInit {
  textLogin = '';
  textPassword = '';
  textEmail = '';
  nameBut = 'Add user';
  indexUs: any = ''; // для ідентифікації - чи вноситься новий юзер, чи відбувається редагування наявного
  arrUser: Array<any> = [];

  constructor() { }

  ngOnInit(): void { }

  addUser(): void {
    if (this.textLogin && this.textPassword && this.textEmail) { // якщо заповнено всі 3 поля
      if (this.indexUs !== '') { // якщо відбувається редагування наявного юзера
        this.nameBut = 'Add user';
        this.arrUser[this.indexUs].login = this.textLogin;
        this.arrUser[this.indexUs].password = this.textPassword;
        this.arrUser[this.indexUs].email = this.textEmail;
        this.clea();
      } else { // якщо вноситься новий юзер
        interface IUser {
          login: string;
          password: string;
          email: string;
        }
        class User implements IUser {
          constructor(
            public login: string,
            public password: string,
            public email: string
          ) { }
        }
        this.arrUser.push(
          new User(this.textLogin, this.textPassword, this.textEmail)
        );
        this.clea();
      }
    }
  }
  deleteUser(index): void {
    this.arrUser.splice(index, 1);
  }
  editUser(index): void {
    this.indexUs = index;
    this.nameBut = 'Edit user';
    this.textLogin = this.arrUser[index].login;
    this.textPassword = this.arrUser[index].password;
    this.textEmail = this.arrUser[index].email;
  }
  clea(): void { // обнулення
    this.textLogin = '';
    this.textPassword = '';
    this.textEmail = '';
    this.indexUs = '';
  }
}
