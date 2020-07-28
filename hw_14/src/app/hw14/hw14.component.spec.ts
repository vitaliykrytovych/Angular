import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hw14Component } from './hw14.component';

describe('Hw14Component', () => {
  let component: Hw14Component;
  let fixture: ComponentFixture<Hw14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hw14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hw14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
