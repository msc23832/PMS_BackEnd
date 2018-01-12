import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstBedTypeListComponent } from './mst-bed-type-list.component';

describe('MstBedTypeListComponent', () => {
  let component: MstBedTypeListComponent;
  let fixture: ComponentFixture<MstBedTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstBedTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstBedTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
