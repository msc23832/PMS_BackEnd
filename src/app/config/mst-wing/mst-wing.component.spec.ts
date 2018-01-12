import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstWingComponent } from './mst-wing.component';

describe('MstWingComponent', () => {
  let component: MstWingComponent;
  let fixture: ComponentFixture<MstWingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstWingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstWingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
