import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalwizardComponent } from './modalwizard.component';

describe('ModalwizardComponent', () => {
  let component: ModalwizardComponent;
  let fixture: ComponentFixture<ModalwizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalwizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalwizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
