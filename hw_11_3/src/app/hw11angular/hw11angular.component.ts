import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw11angular',
  templateUrl: './hw11angular.component.html',
  styleUrls: ['./hw11angular.component.scss'],
})
export class Hw11angularComponent implements OnInit {
  badArr = ['java', 'tottenham'];
  text: string;
  allText = 'java, tottenham';
  textInArea = '';

  constructor() {}

  ngOnInit(): void {

  }

  add(): void {
    if (this.text) {
      this.badArr.push(this.text);
      this.allText = this.badArr.join(', ');
      this.text = '';
    } else {
      const inpValue = document.querySelector('input');
      if (!inpValue.classList.contains('inputEmpty')) {
        inpValue.classList.add('inputEmpty');
      }
      inpValue.placeholder = 'Please write a word!';
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
    if (this.textInArea === '') {
      if (!textArea.classList.contains('inputEmpty')) {
        textArea.classList.add('inputEmpty');
      }
      textArea.placeholder = 'Please write a text!';
    } else {
      this.clearStyleTextarea();
      const arrTextarea = this.textInArea.split(' ');
      this.badArr.forEach((elemArrPrint) => {
        arrTextarea.forEach((elemArrTextarea, ind, arr) => {
          if (elemArrPrint === elemArrTextarea) {
            arr[ind] = '*'.repeat(elemArrTextarea.length);
          }
        });
      });
      this.textInArea = arrTextarea.join(' ');
    }
  }
}
