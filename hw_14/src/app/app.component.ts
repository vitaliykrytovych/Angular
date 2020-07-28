import { Component } from '@angular/core';
import { IContact } from './hw14/hw14.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hw14base';
  edited = '...it is necessary to use somehow @Input()';
  h1text = '';
  arrUser: Array<IContact> = [
    {
      firstName: 'petya',
      lastName: 'zhuk',
      phoneNum: '0631111111'
    },
    {
      firstName: 'petro',
      lastName: 'petriv',
      phoneNum: '0631222222'
    },
    {
      firstName: 'alejandro',
      lastName: 'del rio rlbrechet',
      phoneNum: '0633333333'
    },
    {
      firstName: 'vasylyna',
      lastName: 'vrublevska',
      phoneNum: '0635555555'
    },
    {
      firstName: 'ira',
      lastName: 'tytar',
      phoneNum: '0636666666'
    },
    {
      firstName: 'sofia',
      lastName: 'zhuk',
      phoneNum: '0977777777'
    }
  ];
  printH1(text): void {
    this.h1text = text;
  }
}
