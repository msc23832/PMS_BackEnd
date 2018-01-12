import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstRoomClassComponent } from './mst-room-class.component';

describe('MstRoomClassComponent', () => {
  let component: MstRoomClassComponent;
  let fixture: ComponentFixture<MstRoomClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstRoomClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstRoomClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
