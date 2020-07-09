import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hw11angularComponent } from './hw11angular.component';

describe('Hw11angularComponent', () => {
  let component: Hw11angularComponent;
  let fixture: ComponentFixture<Hw11angularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hw11angularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hw11angularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
