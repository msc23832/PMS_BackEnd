import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstExposureComponent } from './mst-exposure.component';

describe('MstExposureComponent', () => {
  let component: MstExposureComponent;
  let fixture: ComponentFixture<MstExposureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstExposureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstExposureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
