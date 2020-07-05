import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  clearStyleInput(): void {
    const inpValue = document.querySelector('input');
    inpValue.placeholder = 'word here...';
    if (inpValue.classList.contains('inputEmpty')) {
      inpValue.classList.remove('inputEmpty');
    }
  }
}
