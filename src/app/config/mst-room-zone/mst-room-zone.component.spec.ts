import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstRoomZoneComponent } from './mst-room-zone.component';

describe('MstRoomZoneComponent', () => {
  let component: MstRoomZoneComponent;
  let fixture: ComponentFixture<MstRoomZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstRoomZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstRoomZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
