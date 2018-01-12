import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstFloorListComponent } from './mst-floor-list.component';

describe('MstFloorListComponent', () => {
  let component: MstFloorListComponent;
  let fixture: ComponentFixture<MstFloorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstFloorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstFloorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
