import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstRoomZoneListComponent } from './mst-room-zone-list.component';

describe('MstRoomZoneListComponent', () => {
  let component: MstRoomZoneListComponent;
  let fixture: ComponentFixture<MstRoomZoneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstRoomZoneListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstRoomZoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
