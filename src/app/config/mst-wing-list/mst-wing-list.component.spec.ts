import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstWingListComponent } from './mst-wing-list.component';

describe('MstWingListComponent', () => {
  let component: MstWingListComponent;
  let fixture: ComponentFixture<MstWingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstWingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstWingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
