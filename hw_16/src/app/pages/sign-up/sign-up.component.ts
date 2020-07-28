import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../shared/services/pages.service';
import { VariablesService } from '../../shared/services/variables.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../../../assets/modal.scss'],
  // styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  username = '';
  email = '';
  password = '';

  constructor(private pageService: PagesService, public varService: VariablesService) { }

  ngOnInit(): void {
  }

  closeSignUp(): void {
    this.username = '';
    this.email = '';
    this.password = '';
    this.varService.visSignUp = false; // закриття вікна SignUp
  }
  submitSignUp(): void {
    if (this.username && this.email && this.password) { // якщо заповнено всі поля
      if (this.pageService.auditRegistration(this.username, this.email)) { // якщо ще нема таких username або email
        this.pageService.addUsers(
          {
            id: 'no server',
            username: this.username,
            email: this.email,
            password: this.password
          }
        );
        this.varService.nameEnterUser = this.username;
        this.username = '';
        this.email = '';
        this.password = '';
        this.varService.visSignUp = false; // закриття вікна SignUp
      }
    }

  }
}
