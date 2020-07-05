import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PBadWordsComponent } from './p-bad-words.component';

describe('PBadWordsComponent', () => {
  let component: PBadWordsComponent;
  let fixture: ComponentFixture<PBadWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PBadWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PBadWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
