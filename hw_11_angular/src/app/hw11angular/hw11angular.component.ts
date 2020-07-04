import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw11angular',
  templateUrl: './hw11angular.component.html',
  styleUrls: ['./hw11angular.component.scss'],
})
export class Hw11angularComponent implements OnInit {
  badArr = ['java', 'tottenham'];

  constructor() {}

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
  clearStyleInput(): void {
    const inpValue = document.querySelector('input');
    inpValue.placeholder = 'word here...';
    if (inpValue.classList.contains('inputEmpty')) {
      inpValue.classList.remove('inputEmpty');
    }
  }
  clearStyleTextarea(): void {
    const textArea = document.querySelector('textarea');
    textArea.placeholder = 'text here...';
    if (textArea.classList.contains('inputEmpty')) {
      textArea.classList.remove('inputEmpty');
    }
  }
  addClick(): void {
    this.clearStyleTextarea();
    const inpValue = document.querySelector('input');
    if (inpValue.value.length > 0) {
      this.clearStyleInput();
      this.printSpan(inpValue.value);
      inpValue.value = '';
      return;
    } else {
      if (!inpValue.classList.contains('inputEmpty')) {
        inpValue.classList.add('inputEmpty');
      }
      inpValue.placeholder = 'Please write a word!';
    }
  }
  resetClick(): void {
    document.getElementById('bad_words').textContent = '';
    document.querySelector('input').value = '';
    document.querySelector('textarea').value = '';
    this.clearStyleInput();
    this.clearStyleTextarea();
    this.badArr.length = 0;
  }
  cenzorClick(): void {
    const textArea = document.querySelector('textarea');
    if (textArea.value === '') {
      if (!textArea.classList.contains('inputEmpty')) {
        textArea.classList.add('inputEmpty');
      }
      textArea.placeholder = 'Please write a text!';
    } else {
      this.clearStyleTextarea();
      const arrPrint = document
        .getElementById('bad_words')
        .textContent.split(', ');
      const arrTextarea = textArea.value.split(' ');
      arrPrint.forEach((elemArrPrint) => {
        arrTextarea.forEach((elemArrTextarea, ind, arr) => {
          if (elemArrPrint === elemArrTextarea) {
            arr[ind] = '*'.repeat(elemArrTextarea.length);
          }
        });
      });
      textArea.value = arrTextarea.join(' ');
    }
  }
}
