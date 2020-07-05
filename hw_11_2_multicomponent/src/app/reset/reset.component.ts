import { Component, OnInit } from '@angular/core';
import { TextareaComponent } from '../textarea/textarea.component';
import { DivInputComponent } from '../div-input/div-input.component';
import { PBadWordsComponent } from '../p-bad-words/p-bad-words.component';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  resetClick(): void {
    const inTextareaComponent = new TextareaComponent();
    const inDivInputComponent = new DivInputComponent();
    const inPBadWordsComponent = new PBadWordsComponent();
    document.getElementById('bad_words').textContent = '';
    document.querySelector('input').value = '';
    document.querySelector('textarea').value = '';
    inTextareaComponent.clearStyleInput();
    inDivInputComponent.clearStyleTextarea();
    inPBadWordsComponent.badArr.length = 0;
  }
}
