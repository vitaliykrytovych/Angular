import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITasks } from './variant2.interface';
import { Tasks } from './variant2.model';

@Component({
  selector: 'app-variant2',
  templateUrl: './variant2.component.html',
  styleUrls: ['./variant2.component.scss']
})
export class Variant2Component implements OnInit {
  @Output() fromChild = new EventEmitter <string>();
  @Input() passText: string;
  passH1 = 'Plan your day!';
  idUs = '';
  task = '';
  taskEdit = '';
  indexUs: any = ''; // для ідентифікації - чи вноситься новий юзер, чи відбувається редагування наявного
  visSave = false;
  arrTask: Array<ITasks> = [
    {
      idUs: 1,
      task: 'HTML5',
      taskStatus: true
    },
    {
      idUs: 2,
      task: 'CSS3',
      taskStatus: true
    },
    {
      idUs: 3,
      task: 'SCSS',
      taskStatus: false
    },
    {
      idUs: 4,
      task: 'JavaScript',
      taskStatus: false
    },
    {
      idUs: 5,
      task: 'jQuery',
      taskStatus: false
    },
    {
      idUs: 6,
      task: 'Angular',
      taskStatus: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.addTask();
    }, 60);
    this.fromChild.emit(this.passH1);
  }

  addTask(): void {
    if (this.indexUs !== '') { // якщо відбувається редагування наявного юзера
      this.arrTask[this.indexUs].idUs = this.indexUs;
      this.arrTask[this.indexUs].task = this.taskEdit;
      this.clea();
    } else if (this.task) { // вноситься новий юзер
      this.arrTask.push(new Tasks(this.arrTask.length + 1, this.task));
      this.clea();
    }
  }
  deleteTask(index): void {
    this.arrTask.splice(index, 1);
    this.visSave = false; // якщо нажати на del під-час редагування - зникає input для редагування
  }
  editTask(index): void {
    this.visSave = true; // на true, а не на протилежне = щоб нажимання на edit при незакінченому редагуванні виводило інший текст для редугування, а не закривало input редагування
    this.indexUs = index;
    this.taskEdit = this.arrTask[index].task;
  }
  saveTask(): void {
    this.addTask();
    this.visSave = !this.visSave;
  }
  changeStatus(objTask): void {
    objTask.taskStatus = !objTask.taskStatus;
  }
  clea(): void { // обнулення
    this.idUs = '';
    this.task = '';
    this.indexUs = '';
  }
}
