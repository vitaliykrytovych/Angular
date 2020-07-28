import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../../shared/services/variables.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public varService: VariablesService) { }

  ngOnInit(): void {
  }

  clickSignIn(): void {
    this.varService.visSignIn = true; // видимість блоку SignIn
  }
  clickAddPost(): void {
    this.varService.visAddPost = true; // видимість блоку SignIn
  }
  clickSignUp(): void {
    this.varService.visSignUp = true; // видимість блоку SignUp
  }
  clickSignOut(): void {
    this.varService.nameEnterUser = ''; // вихід юзера
  }
}
