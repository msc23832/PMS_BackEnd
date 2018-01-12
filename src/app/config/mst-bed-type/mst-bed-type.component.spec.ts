import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstBedTypeComponent } from './mst-bed-type.component';

describe('MstBedTypeComponent', () => {
  let component: MstBedTypeComponent;
  let fixture: ComponentFixture<MstBedTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstBedTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstBedTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
