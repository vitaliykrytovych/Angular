import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hw13input';
  edited = 'Ivan Ivanov. Count of Task 6';
  h1text = '';
  printH1(text): void{
    this.h1text = text;
  }
}
