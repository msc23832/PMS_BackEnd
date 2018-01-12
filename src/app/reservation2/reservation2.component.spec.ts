import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reservation2Component } from './reservation2.component';

describe('Reservation2Component', () => {
  let component: Reservation2Component;
  let fixture: ComponentFixture<Reservation2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reservation2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reservation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
