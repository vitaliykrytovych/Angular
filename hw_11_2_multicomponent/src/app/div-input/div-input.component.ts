import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-div-input',
  templateUrl: './div-input.component.html',
  styleUrls: ['./div-input.component.scss']
})
export class DivInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  clearStyleTextarea(): void {
    const textArea = document.querySelector('textarea');
    textArea.placeholder = 'text here...';
    if (textArea.classList.contains('inputEmpty')) {
      textArea.classList.remove('inputEmpty');
    }
  }
}
