import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-bad-words',
  templateUrl: './p-bad-words.component.html',
  styleUrls: ['./p-bad-words.component.scss']
})
export class PBadWordsComponent implements OnInit {
  badArr = ['java', 'tottenham'];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.printSpan(this.badArr);
    }, 60);
  }
  printSpan(arg: Array<string> | string): void {
    const span = document.getElementById('bad_words');
    if (span.textContent === '' && typeof arg === 'object') {
      arg.forEach((elem, ind) => {
        if (ind === 0) {
          span.textContent += elem;
        } else {
          span.textContent += `, ${elem}`;
        }
      });
    } else if (span.textContent === '') {
      span.textContent += arg;
    } else {
      span.textContent += `, ${arg}`;
    }
  }
}
