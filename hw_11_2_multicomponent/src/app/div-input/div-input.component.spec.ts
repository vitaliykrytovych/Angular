import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivInputComponent } from './div-input.component';

describe('DivInputComponent', () => {
  let component: DivInputComponent;
  let fixture: ComponentFixture<DivInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
