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
  inputClass = false;
  areaClass = false;

  constructor() {}

  ngOnInit(): void {

  }

  add(): void {
    if (this.text) {
      this.inputClass = false;
      this.badArr.push(this.text);
      this.allText = this.badArr.join(', ');
      this.text = '';
    } else {
      this.inputClass = false;
      this.inputClass = true;
    }
  }
  clearStyleInput(): void {
    this.inputClass = false;
  }
  clearStyleTextarea(): void {
    this.areaClass = false;
  }
  resetClick(): void {
    this.allText = '';
    this.text = '';
    this.textInArea = '';
    this.clearStyleInput();
    this.clearStyleTextarea();
    this.badArr.length = 0;
  }
  cenzorClick(): void {
    if (this.textInArea === '') {
      this.areaClass = false;
      this.areaClass = true;
    } else {
      this.areaClass = false;
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
