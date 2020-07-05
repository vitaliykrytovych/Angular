import { Component, OnInit } from '@angular/core';
import { TextareaComponent } from '../textarea/textarea.component';
import { DivInputComponent } from '../div-input/div-input.component';
import { PBadWordsComponent } from '../p-bad-words/p-bad-words.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addClick(): void {
    const inTextareaComponent = new TextareaComponent();
    const inDivInputComponent = new DivInputComponent();
    const inPBadWordsComponent = new PBadWordsComponent();
    inDivInputComponent.clearStyleTextarea();
    const inpValue = document.querySelector('input');
    if (inpValue.value.length > 0) {
      inTextareaComponent.clearStyleInput();
      inPBadWordsComponent.printSpan(inpValue.value);
      inpValue.value = '';
      return;
    } else {
      if (!inpValue.classList.contains('inputEmpty')) {
        inpValue.classList.add('inputEmpty');
      }
      inpValue.placeholder = 'Please write a word!';
    }
  }
}
