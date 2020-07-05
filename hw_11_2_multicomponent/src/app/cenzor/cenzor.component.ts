import { Component, OnInit } from '@angular/core';
import { DivInputComponent } from '../div-input/div-input.component';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cenzorClick(): void {
    const inDivInputComponent = new DivInputComponent();
    const textArea = document.querySelector('textarea');
    if (textArea.value === '') {
      if (!textArea.classList.contains('inputEmpty')) {
        textArea.classList.add('inputEmpty');
      }
      textArea.placeholder = 'Please write a text!';
    } else {
      inDivInputComponent.clearStyleTextarea();
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
