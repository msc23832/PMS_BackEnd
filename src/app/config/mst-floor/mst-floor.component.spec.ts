import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstFloorComponent } from './mst-floor.component';

describe('MstFloorComponent', () => {
  let component: MstFloorComponent;
  let fixture: ComponentFixture<MstFloorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstFloorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
