import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstBuildingComponent } from './mst-building.component';

describe('MstBuildingComponent', () => {
  let component: MstBuildingComponent;
  let fixture: ComponentFixture<MstBuildingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstBuildingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
