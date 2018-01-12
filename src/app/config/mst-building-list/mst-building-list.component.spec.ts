import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstBuildingListComponent } from './mst-building-list.component';

describe('MstBuildingListComponent', () => {
  let component: MstBuildingListComponent;
  let fixture: ComponentFixture<MstBuildingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstBuildingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstBuildingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
