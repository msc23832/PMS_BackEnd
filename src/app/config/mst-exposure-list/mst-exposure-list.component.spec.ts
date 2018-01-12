import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstExposureListComponent } from './mst-exposure-list.component';

describe('MstExposureListComponent', () => {
  let component: MstExposureListComponent;
  let fixture: ComponentFixture<MstExposureListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstExposureListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstExposureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
